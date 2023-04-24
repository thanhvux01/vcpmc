import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Avatar } from '@mui/material';
let cx = classNames.bind(styles);

const HeaderUser = () => {
  return (
    <div className={cx('user-wrapper')}>
     <Avatar className={cx('avatar')} >H</Avatar>
     <label className={cx('user-name')}>C.Thành</label>
     <label className={cx('role')}>Admin</label>
    </div>
  )
}

export default HeaderUser