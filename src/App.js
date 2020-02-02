/* eslint-disable no-alert */
import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import './App.css';
import Form from './Form';
import Table from './Table';
import Loader from './Loader';
import Filter from './Filter';
import Info from './Info';
import { urls, increments, recordsPerPage } from './params';

const includes = (row, text) => {
  const normalizedValues = Object.values(row).map((value) => value.toString().toLowerCase());
  const normalizedText = text.toString().toLowerCase();
  let result = false;
  // eslint-disable-next-line no-restricted-syntax
  for (const value of normalizedValues) {
    if (value.includes(normalizedText)) {
      result = true;
      break;
    }
  }
  return result;
};

const isFilled = (fields) => fields.every((field) => field);

const isFormStateChanged = (data, isCompleted) => {
  const fields = Object.values(data);
  return (isFilled(fields) && !isCompleted) || (!isFilled(fields) && isCompleted);
};

export default class App extends React.Component {
  state = {
    appState: 'initial',
    errorText: '',
    activeId: null,
    form: {
      isCompleted: false,
      formData: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    },
    table: {
      tableData: null,
      dataSize: 'small',
      sortBy: null,
      sortDirection: null,
      page: 1,
    },
    filter: {
      text: '',
      value: '',
    },
  }

    componentDidUpdate = async () => {
      const { appState, form: { formData, isCompleted }, table } = this.state;
      if (isFormStateChanged(formData, isCompleted)) {
        this.setState({ form: { formData, isCompleted: !isCompleted } });
        return;
      }
      if (appState !== 'request') {
        return;
      }
      const url = urls[table.dataSize].href;
      try {
        await axios.get(url);
      } catch (e) {
        this.setState({ appState: 'fail', errorText: e.message });
        return;
      }
      const { data } = await axios.get(url);
      const uniqData = _.uniqBy(data, 'id');
      this.setState({ appState: 'success', table: { ...table, tableData: uniqData } });
    }

  handleFormChange = (dataField) => ({ target: { value } }) => {
    const { formData } = this.state.form;
    this.setState({ form: { formData: { ...formData, [dataField]: value } } });
  }

  addRow = (row) => (e) => {
    e.preventDefault();
    const { table } = this.state;
    if (table.tableData.find(({ id }) => id === +row.id)) {
      alert(`User with ${row.id} already exists. Choose another id.`);
      return;
    }
    const newTable = { ...table, tableData: [row, ...this.state.table.tableData] };
    this.setState({ table: newTable });
    alert('Record added succesfully.');
  }

  goTo = (direction) => () => {
    const { table } = this.state;
    const increment = increments[direction] || 0;
    const newTable = { ...table, page: table.page + increment };
    this.setState({ table: newTable, activeId: null });
  }

  chooseDataSize = (dataSize) => () => {
    const { table, form } = this.state;
    const newTable = { ...table, dataSize };
    this.setState({ appState: 'request', form, table: newTable });
  }

  sort = (field) => () => {
    const { table } = this.state;
    const sortDirection = table.sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedData = _.sortBy(table.tableData, (row) => row[field]);
    const result = sortDirection === 'asc' ? sortedData : sortedData.reverse();
    this.setState({
      table: {
        ...table, tableData: result, sortDirection, sortBy: field,
      },
    });
  };

  handleFilterChange = ({ target: { value: text } }) => {
    const { filter: { value } } = this.state;
    this.setState({ filter: { text, value } });
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
    const { filter: { text }, table } = this.state;
    this.setState({ filter: { value: text, text }, table: { ...table, page: 1 }, activeId: null });
  }

  setActive = (id) => () => {
    const previousState = { ...this.state };
    this.setState({ ...previousState, activeId: id });
  }

  render() {
    const {
      appState, filter, activeId, errorText, form: { isCompleted, formData }, table: {
        tableData, dataSize, page, sortBy, sortDirection,
      },
    } = this.state;
    const filteredData = filter.value
      ? _.filter(tableData, (row) => includes(row, filter.value))
      : tableData;
    const activeInfo = filteredData && filteredData.find(({ id }) => id === activeId);
    const isFirstPage = page === 1;
    const isLastPage = filteredData && page === Math.floor(filteredData.length / recordsPerPage) + 1;
    const begin = (page - 1) * recordsPerPage;
    const end = page * recordsPerPage;
    const pageData = tableData && filteredData.slice(begin, end);
    const tableProps = {
      data: pageData, dataSize, goTo: this.goTo, isFirstPage, isLastPage, sort: this.sort,
      setActive: this.setActive, sortDirection, sortBy,
    };
    return (
    <div className="App">
      {appState === 'initial'
      && <div className="buttons">
        <button className="button button-initial" onClick={this.chooseDataSize('big')}>Big data</button>
        <button className="button button-initial" onClick={this.chooseDataSize('small')}>Small data</button>
      </div>}
      {appState === 'request' && <Loader />}
      {appState === 'success'
      && <>
        <Filter handleChange={this.handleFilterChange} handleSubmit={this.handleFilterSubmit} text={filter.text} />
        <Form
          isCompleted={isCompleted}
          data={formData}
          handleSubmit={this.addRow}
          handleChange={this.handleFormChange}
          />
        <Table {...tableProps} />
      </>}
      {appState === 'fail' && <div className="fail">
        <span className="error-message">{errorText}</span>
        <a href=".">Go back</a>
        </div>}
      {activeId && <Info {...activeInfo}/>}
    </div>
    );
  }
}
