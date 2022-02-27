import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Profile() {
    if(localStorage.getItem('userLogin')){
    return (

            <div>
                trang thong tin ca nhan
            </div>
    )
    }else{
        alert('ban vui long dang nhap truoc khi vao profile')
        return <Redirect to="/login"/>
    }
}
