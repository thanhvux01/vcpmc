import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import FormLog from '../../component/FormLogin';
import SelectLang from '../../component/SelectLang';
import { Link } from 'react-router-dom';
let cx = classNames.bind(styles);



const Login = () => {
 
  return (
    <div className={cx('container')}>
       <SelectLang/>
       <FormLog/>
       <div className={cx('bottom-wrapper')}>
          <Link to={'/recover'} style={{color:"#FF7506"}}>Quên mật khẩu</Link>
      </div>    
    </div>
  )
}

export default Login