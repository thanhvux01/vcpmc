import React from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/SideBar';
let cx = classNames.bind(styles);


const Contract = () => {
  return (
    <div className={cx('container')}>
     <SideBar/>
    </div>
  )
}

export default Contract