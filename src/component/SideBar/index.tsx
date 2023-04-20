import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { logo } from '../../assets/png';
let cx = classNames.bind(styles);

const SideBar = () => {
  return (
    <div className={cx('container')}>
       <div className={cx('image-holder')}>
          
       </div>
    </div>
  )
}

export default SideBar