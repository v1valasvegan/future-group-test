/* eslint-disable react/prop-types */
import React from 'react';

const Form = ({
  handleSubmit, handleChange, data, isCompleted,
}) => {
  const {
    id, firstName, lastName, email, phone,
  } = data;

  return (
      <form className="form" onSubmit={handleSubmit(data)}>
        <input className="input" type="number" value={id} onChange={handleChange('id')} placeholder="id" name="id" />
        <input
          className="input" type="text" value={firstName} onChange={handleChange('firstName')}
          placeholder="firstName" name="firstName"
        />
        <input
          className="input" type="text" value={lastName} onChange={handleChange('lastName')}
          placeholder="lastName" name="lastName"
        />
        <input
          className="input" type="email" value={email} onChange={handleChange('email')}
          placeholder="email" name="email"
        />
        <input
          className="input" type="tel" value={phone} onChange={handleChange('phone')}
          placeholder="phone number" name="phone"
        />
        <button typs="submit button" disabled={!isCompleted}>Add</button>
      </form>
  );
};

export default Form;
