import React from 'react'
import { useDispatch } from 'react-redux'
import SlideDown from '../../HOC/Modal/SlideDown';
import Login from '../Login/Login';
import Register from '../Register/Register';

export default function DemoHOCModal() {
    const LoginWithSlideDown  =  new SlideDown(Register)
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={()=>{
                    dispatch({
                        type:'OPEN_FORM',
                        Component:<Login/>
                    })
                }}
            type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Đăng nhập
            </button>
            {/* Modal */}
            <button
                onClick={()=>{
                    dispatch({
                        type:'OPEN_FORM',
                        Component:<Register/>
                    })
                }}
            type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Đăng ký
            </button>
            {/* Modal */}
            {LoginWithSlideDown}
        </div>
    )
}
