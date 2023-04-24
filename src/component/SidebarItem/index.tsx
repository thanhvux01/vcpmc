import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

type ItemType = {
    title: string,
    icon:string,
    expanded? : boolean,

}

const SidebarItem = ({title,icon}:ItemType) => {
  return (
    <div className={cx('wrapper')}>
         <div className={cx('icon')}>
            <img src={icon}/>
         </div>
         <label>{title}</label>
    </div>
  )
}

export default SidebarItem