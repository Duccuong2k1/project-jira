import React from 'react'
import { useSelector } from 'react-redux';

export default function Home() {

    const userLogin = useSelector(state => state.UserCyberBugReducer.userLogin);


    return (
        <div>
            trang chu
            {userLogin?.name}
        </div>
    )
}
