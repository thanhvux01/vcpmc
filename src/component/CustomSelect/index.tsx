import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Select , MenuItem, colors } from '@mui/material';
import { vietnam } from '../../assets/png';

let cx = classNames.bind(styles);
const SelectLang = () => {
  const [lang,setLang] = useState('Vi');
  return (
    <div className={cx('wrapper')}>
        <Select
        labelId="select-lang"
        id="select-lang"    
        value={lang}
        className={cx('select')}
        sx={
          {
            color:'white',
            '& .MuiSvgIcon-root': {
              color: '#C8C8DB'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#C8C8DB'
        },
          }
        }
      >
        <MenuItem value={'Vi'} className={cx('select-item')}>Tiếng việt <img src={vietnam} className={cx('img')}/></MenuItem>
        <MenuItem value={'En'}>Tiếng Anh</MenuItem>
      </Select>
    </div>
  )
}

export default SelectLang