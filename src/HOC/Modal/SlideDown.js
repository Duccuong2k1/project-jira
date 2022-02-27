import React from 'react'
import {animated,useSpring} from 'react-spring';



export default function SlideDown(Component) {
    const propsSpring = useSpring({
        to:{
            marginTop:'0'
        },
        from:{
            marginTop:'-100px'
        },config:{
            duration:1000
        }
    })
    return (
        <animated.div style={propsSpring}>
            <Component/>
        </animated.div>
    )
}
