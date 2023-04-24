import React from 'react'
import  styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../../component/Sidebar';
import ContractContent from '../../component/Contract';
let cx = classNames.bind(styles);


const Contract = () => {
  return (
    <div className={cx('container')}>
     <SideBar/>
     <ContractContent/>
    </div>
  )
}

export default Contract