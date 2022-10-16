import React from 'react';
// Styles
import styles from  './App.module.scss';
// Components
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div className={styles.app}>
      <HomePage />
    </div>
  );
}

export default App;
 