import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
let cx = classNames.bind(styles);

const ContractContent = () => {
  return (
    <div className={cx('container')}>
         <Header/>
    </div>
  )
}

export default ContractContent