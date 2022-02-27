import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header';

// cách viết sử dụng HOC để tái sử dụng tốt hơn

export const HomeTemplate = (props)=>{
    const {Component,...restProps} = props;
    return (
        <Route {...restProps} render={(propsRoute)=>{
            return (
                <>
                    <Header />
                    <Component {...propsRoute} />
                </>
            )
        }} />
    )
}