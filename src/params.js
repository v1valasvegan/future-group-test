const urls = {
  big: new URL('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'),
  small: new URL('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'),
};
const recordsPerPage = 50;
const increments = {
  next: 1,
  previous: -1,
};

export { urls, recordsPerPage, increments };
