import React from 'react';
// Components
import Banner from '../Banner/Banner';
import NavigationBar from '../NavigationBar/NavigationBar';

// Styles
import styles from './HomePage.module.scss';

const HomePage = () => {


  return (
    <>
      <div className={styles.homePage}>
          <NavigationBar />
          <Banner />
      </div>
    </>
  )
}

export default HomePage