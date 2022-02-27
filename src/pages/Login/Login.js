import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

const Login = (props) => {
    const [login,setLogin] = useState({userName:'', password:'',})
    console.log(login);
    console.log('props',props);
    const onChangeInput = (e)=>{
        let {name,value} = e.target
        setLogin({
            ...login,
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(login.userName === "admin" && login.password === "123123"){
            // goBack quy lai trang truoc do
            // props.history.goBack();
            // chuyen den trang theo chi dinh
            // props.history.push('/');
            // chuyen huong thay doi noi dung path tuong ung
            props.history.replace('/')
            localStorage.setItem('userLogin',JSON.stringify(login))
        }else{
            alert('nhap sai tai khoan')
            return
        }

    }
    return (
        <div>
            <form className="mt-5 p-4" onSubmit={handleSubmit}>
                <h4>Login</h4>
                <div className="form-group">
                    <label htmlFor="">tai khoan</label>
                    <input type="text" name="userName" placeholder="nhap ten tai khoan" 
                    className="form-control" onChange={onChangeInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">mat khau</label>
                    <input type="password" name="password" placeholder="nhap mat khau" 
                    className="form-control" onChange={onChangeInput}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">dang nhap</button>
                </div>
                {/* neu when la false thi se khong hien hop thoai truoc khi chuyen trang
                    neu true thi se hien hop thoai hoi
                */}
                <Prompt when={true} message={(location)=>{
                    return 'ban co chac muon chuyen di khong'
                }} />
                
            </form>
        </div>
    );
}

export default Login;
