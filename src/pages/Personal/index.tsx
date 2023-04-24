import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import PersonalContent from '../../component/Personal';
import { doc, getDoc, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { db, usersCol } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import { User } from '../../type/user';
import { Email } from '@mui/icons-material';
let cx = classNames.bind(styles);

const Personal = () => {
    const [user,setUser] = useState<User>();
    const GetUserData = async (uid: string) => {
        try {
            const userDocRef = doc(usersCol,uid);
            const getUserDocRef = await getDoc(userDocRef);
            setUser(getUserDocRef.data());
            
      
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                GetUserData(uid);
            } else {
               
            }
        });
    }, [])

    return (
        <div className={cx('container')}>
            <Sidebar />
            <PersonalContent LastName={user?.LastName} FirstName={user?.FirstName} Role={user?.Role} Birthday={user?.Birthday} Number={user?.Number} Email={user?.Email}/>
        </div>
    )
}

export default Personal