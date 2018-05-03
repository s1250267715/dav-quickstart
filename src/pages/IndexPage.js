import React, { Component } from 'react';
import styles from './IndexPage.css';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('common')
@observer
export default class IndexPage extends Component {
  render() {
    const { obj } = this.props.common;
    const routers = [
      { path: '/interview', name: 'interview' },
      { path: '/learn-ant', name: 'learn-ant' },
      { path: '/handling', name: 'handling' },
      { path: '/todolist', name: 'todoList' },
    ]
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <div>you can look at the following examples:</div>
        <ul className={styles.list}>
          {routers.map((item, index) => <li key={index}><Link to={`${item.path}/${obj.age}`}>{index + 1}. {item.name}</Link></li>)}
        </ul>
      </div>
    );
  }
}


