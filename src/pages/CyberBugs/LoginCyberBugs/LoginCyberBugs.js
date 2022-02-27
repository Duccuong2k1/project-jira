import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined,LockOutlined  } from '@ant-design/icons';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { USER_SIGN_API } from '../../../redux/constants/CyberBugConstants';
import { signInCyberBugSaga } from '../../../redux/actions/CyberBugAction';

function LoginCyberBugs(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
    return (
        <>

            
            <div className="d-flex justify-center m-5" 
            
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                {/* <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input onChange={handleChange} name="email" placeholder="email" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password  onChange={handleChange} name="password" prefix={<LockOutlined className="site-form-item-icon" />}/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 16, span: 24 }}>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor:'#7960fe'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form> */}
                <form action=""  style={{height:window.innerHeight}} onSubmit={handleSubmit} className="align-item-center">
                    <h3 className="text-center text-warning">Login cyberBug</h3>
                    <div className="d-flex my-2">
                        <Input  style={{minWidth:350}} onChange={handleChange} name="email" type="email" placeholder="email" prefix={<UserOutlined />} />
                    </div>
                    <div  className="text-danger">{errors.email}</div>
                    
                    <div className="d-flex my-2">
                        <Input style={{minWidth:350}} onChange={handleChange} name="password" type="password" placeholder="password" prefix={<LockOutlined />} />
                    </div>
                    <div className="text-danger">{errors.password}</div>
                    <Button htmlType="submit" size="large" style={{minWidth:'350px',backgroundColor:"#7960fe"}} className="mt-3">Đăng nhập</Button>
                </form>

            </div>
        </>
    )
}

const LoginFormSubmitWithFormik = withFormik({
    mapPropsToValues: () => ({ email: '' ,password: ''}),
    
    // Custom sync validation
    validationSchema:Yup.object().shape({
        email:Yup.string().required('email is required').email('email is validate'),
        password:Yup.string().min(6,'password must have min 6 character').max(32,'password have max 32 character')
    }),
    
    handleSubmit: (values, {props, setSubmitting }) => {
        // let action = {
        //     type:USER_SIGN_API,
        //     userLogin:{
        //         email: values.email,
        //         password: values.password
        //     }
        // }
        props.dispatch(signInCyberBugSaga(values.email,values.password,props.history));
        // console.log('props cua redux',props)
        // console.log(values);
    },
  
    displayName: 'BasicForm',
  })(LoginCyberBugs);

export default connect()(LoginFormSubmitWithFormik);