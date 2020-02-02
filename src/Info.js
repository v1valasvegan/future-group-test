import React from 'react';

const Info = ({
  firstName, lastName, address, description,
}) => (
    <div className="info">
      <span className="info__item">Выбран пользователь: <b>{`${firstName} ${lastName}`}</b></span>
      <label htmlFor="description" className="info__item">Описание:</label>
      <textarea className="info__item" name="" id="description" cols="30" rows="10" defaultValue={description} />
      <span className="info__item">Адрес проживания: <b>{address.streetAddress}</b></span>
      <span className="info__item">Город: {address.city}</span>
      <span className="info__item">Провинция/штат: {address.state}</span>
      <span>Индекс: {address.zip}</span>
    </div>
);

export default Info;
