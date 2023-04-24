import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { bglogo } from '../../assets/png';
import SidebarItem from '../SidebarItem';
import { ic_banghi, ic_playlist , ic_lichphat , ic_quanly , ic_doanhthu , ic_caidat , ic_hotro } from '../../assets/svg';
let cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx('container')}>
       <div className={cx('logo-holder')}>
           <img src={bglogo} />
       </div>
       <div className={cx('feature-list-item')}>
           <SidebarItem title='Kho bản ghi' icon={ic_banghi}/>
           <SidebarItem title='Playlist' icon={ic_playlist}/>
           <SidebarItem title='Lập lịch phát' icon={ic_lichphat}/>
           <SidebarItem title='Quản lý' icon={ic_quanly}/>
           <SidebarItem title='Doanh thu' icon={ic_doanhthu}/>
           <SidebarItem title='Cài đặt' icon={ic_caidat}/>
           <SidebarItem title='Hỗ trợ' icon={ic_hotro}/>
       </div>
    </div>
  )
}

export default Sidebar