import React from 'react';

const Filter = ({ handleChange, handleSubmit, text }) => (
      <form className="filter" onSubmit={handleSubmit}>
        <input className="input" type="text" value={text} onChange={handleChange}/>
        <button className="button button-submit" type="submit">Filter</button>
      </form>
);

export default Filter;
