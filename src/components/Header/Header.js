import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="container-fluid bg-dark text-light">
            <div className="row">

                <Link to="/" className="p-2">home</Link>
                <Link to="/about" className="p-2">about</Link>
                <Link to="/contact" className="p-2">contact</Link>
                <Link to="/login" className="p-2">login</Link>
                <Link to="/todoListRcc" className="p-2">ToDoListRCC</Link>
                <Link to="/todoListRfc" className="p-2">ToDoListRFC</Link>
                <Link to="/todoListSaga" className="p-2">ToDoListSaga</Link>
                <Link to="/demoHOC" className="p-2">Demo HOC</Link>
            </div>
        </div>
    )
}
