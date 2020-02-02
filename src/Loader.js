import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  const firstClassList = `${styles.dot} ${styles.first}`;
  const secondClassList = `${styles.dot} ${styles.second}`;
  const thirdClassList = `${styles.dot} ${styles.third}`;
  return (<div className={styles.loader}>
    <span className={firstClassList}></span>
    <span className={secondClassList}></span>
    <span className={thirdClassList}></span>
  </div>);
};

export default Loader;
