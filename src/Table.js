import React from 'react';

const Table = ({
  data, goTo, isFirstPage, isLastPage, dataSize, sort, setActive, sortBy, sortDirection,
}) => {
  const classList = (field) => (sortBy === field
    ? `table-heading__item sort-by ${sortDirection}`
    : 'table-heading__item'
  );

  return (<>
    {dataSize === 'big'
    && <div className="table-buttons">
      <button className="button previous" onClick={goTo('previous')} disabled={isFirstPage}>Previous</button>
      <button className="button next" onClick={goTo('next')} disabled={isLastPage}>Next</button>
    </div>}
        <table className="table">
          <thead className="table-heading">
            <tr>
              <th className={classList('id')} onClick={sort('id')}>id</th>
              <th className={classList('firstName')} onClick={sort('firstName')}>firstName</th>
              <th className={classList('lastName')} onClick={sort('lastName')}>lastName</th>
              <th className={classList('email')} onClick={sort('email')}>email</th>
              <th className={classList('phone')} onClick={sort('phone')}>phone</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map(({
            id, firstName, lastName, email, phone,
          }) => (
                <tr key={id} onClick={setActive(id)}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
          ))}
          </tbody>
        </table>
  </>
  );
};

export default Table;
