import React, { useCallback, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Select from 'react-select';

const sizeOptions = [
  { value: 20, label: '20x20cm' },
  { value: 15, label: '15x15cm' }
]

const userReducer = (state, action) => {
  switch (action.type) {
      case "SET_LOGGED_USER":
          return {...action.payload, admin: false };
      case "SET_LOGGED_ADMIN":
          return {...action.payload, admin: true};
      case "RESET_USER":
          localStorage.removeItem('@iru/token');
          sessionStorage.removeItem('@iru/token');
          return null;
      default:
          return state;
  }
};

export default function Index() {

    const [currentUser, dispatch] = useReducer(userReducer, null);

  useEffect(() => {
  }, []);


  return (
    <main className={styles.home}>
      <section className={styles.model}>
        <p>Escolha os modelo:</p>
        <Select options={sizeOptions} value={} />
        <div className={styles.model__border}>
        </div>
        <div className={styles.model__center}>
        </div>
      </section>
      <section className={styles.board}></section>
      <section className={styles.picker}></section>
    </main>
  );
}
