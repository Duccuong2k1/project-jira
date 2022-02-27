import React, { useState ,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTaskAPI, getToDoListAPI } from '../../redux/actions/ToDoListAction';
import {ADD_TASK_LIST, GET_TASK_LIST_API} from '../../redux/constants/ToDoListConstants'

export default function ToDoListSaga() {
    const dispatch = useDispatch()
    const {toDoList} = useSelector(state => state.ToDoList)
    const [state,setState] = useState({
        values:{
            taskName:''
        },
        errors:{
            taskName:''
        },
    })

    const renderTaskToDo = ()=>{
        return (
            
            toDoList.filter(task=> !task.status).map((item,index)=>{
                    return (

                        <li key={index}>
                            <span>{item.taskName}</span>
                            <div className="buttons">
                                <button className="remove" type="button" >
                                    <i className="fa fa-trash-alt" />
                                </button>
                                <button className="complete" type="button" >
                                    <i className="far fa-check-circle" />
                                    <i className="fas fa-check-circle" />
                                </button>
                            </div>
                        </li>
                    )
                })
        )
    }
    const renderTaskToDoDone = ()=>{
        return (
            toDoList.filter(task=> task.status).map((item,index)=>{
                    return (

                        <li key={index}>
                            <span>{item.taskName}</span>
                            <div className="buttons">
                                <button className="remove" type="button" >
                                    <i className="fa fa-trash-alt" />
                                </button>
                                <button className="complete" type="button">
                                    <i class="fas fa-undo"></i>
                                </button>
                            </div>
                        </li>
                    )
                })
        )
    }
    const handleOnChange = (e)=>{
        let {value,name} = e.target;
        // console.log(value,name)
        let newValues = {...state.values};
        newValues = {...newValues,[name]:value};

        let newErrors = {...state.errors}
        newErrors = {...newErrors,[name]:value};

        setState({
            ...state,
            values: newValues,
            errors: newErrors,
            
        })
        console.log('taskName',state.values.taskName)
    }
    const _getTaskList = ()=>{
        dispatch({
            type:GET_TASK_LIST_API,

        })
    };
    const addTask = (e)=>{
        e.preventDefault();
        dispatch({
            type:ADD_TASK_LIST,
            taskName:state.values.taskName
        })
    }
    useEffect(() => {
        _getTaskList()
        return () => {
            
        }
    }, [])
    
    return (
        <form >
            <button type="button" onClick={() => { 
                dispatch({
                    type:'getListTaskAPI',
                })
             }}>Get task list</button>
            <div className="card">
                <div className="card__header">
                    <img src={require('./bg.png').default} alt="" />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input id="newTask" name="taskName" onChange={handleOnChange} type="text" placeholder="Enter an activity..." />
                            <button id="addItem"
                                onClick={(e)=>{addTask(e)}}
                            >
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {renderTaskToDo()}
                                
                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                                {renderTaskToDoDone()}

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
