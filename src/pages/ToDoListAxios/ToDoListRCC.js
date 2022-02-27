import Axios  from 'axios';
import React, { Component } from 'react'
import './TodoList.css';
export default class ToDoListRCC extends Component {
    state = {
        toDoList:[],
        values:{
            taskName:''
        },
        errors:{
            taskName:''
        }
    }
    // goi axios tu server 
    getTaskList = () =>{
        const promise = Axios({    
            url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'

        })
        promise.then((result) =>{
                console.log(result.data)
                console.log('thanh cong')
                this.setState({
                    toDoList:result.data
                })
            })
            .catch((err)=>{
                console.log('that bai');
                console.log(err.response.data)
            })
    }
    componentDidMount = () => {
        this.getTaskList()
    }
    addTask = (e)=>{
        e.preventDefault();
        const promise = Axios({
            url:"http://svcy.myclass.vn/api/ToDoList/AddTask",
            method:"POST",
            data:{taskName : this.state.values.taskName}
        });
        promise
            .then((result) => {
                this.getTaskList()
            })
            .then((result)=>{
                this.setState({
                    ...this.state,
                    values:{...this.state, values:{taskName:''}}
                })
            })
            .catch((err) =>{
                alert('them that bai')
            })
    }
    handleDelete = (taskName)=>{
        const promise = Axios({
            url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method:"DELETE",
           
        })
        promise.then((result)=>{
            // alert('xoa thanh cong',result.data)
            this.getTaskList()
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }
    handleDoneTask = (taskName)=>{
        const promise = Axios({
            url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method:"PUT",
           
        })
        promise.then((result)=>{
            // alert('xoa thanh cong',result.data)
            this.getTaskList()
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }
    handleRejectTask = (taskName)=>{
        const promise = Axios({
            url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method:"PUT",
           
        })
        promise.then((result)=>{
            // alert('xoa thanh cong',result.data)
            this.getTaskList()
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    renderTaskToDo = ()=>{
        return (
            
                this.state.toDoList.filter(task=> !task.status).map((item,index)=>{
                    return (

                        <li key={index}>
                            <span>{item.taskName}</span>
                            <div className="buttons">
                                <button className="remove" type="button" onClick={()=>{this.handleDelete(item.taskName)}}>
                                    <i className="fa fa-trash-alt" />
                                </button>
                                <button className="complete" type="button" onClick={()=>{this.handleDoneTask(item.taskName)}}>
                                    <i className="far fa-check-circle" />
                                    <i className="fas fa-check-circle" />
                                </button>
                            </div>
                        </li>
                    )
                })
            

        )
    }
    renderTaskToDoDone = ()=>{
        return (
            
                this.state.toDoList.filter(task=> task.status).map((item,index)=>{
                    return (

                        <li key={index}>
                            <span>{item.taskName}</span>
                            <div className="buttons">
                                <button className="remove" type="button" onClick={()=>{this.handleDelete(item.taskName)}}>
                                    <i className="fa fa-trash-alt" />
                                </button>
                                <button className="complete" type="button" onClick={()=> {this.handleRejectTask(item.taskName)}}>
                                    <i class="fas fa-undo"></i>
                                </button>
                            </div>
                        </li>
                    )
                })
            

        )
    }
    handleOnChange = (e)=>{
        let {value,name} = e.target;
        // console.log(value,name)
        let newValues = {...this.state.values};
        newValues = {...newValues,[name]:value};

        let newErrors = {...this.state.errors}
        newErrors = {...newErrors,[name]:value};

        this.setState({
            ...this.state,
            values: newValues,
            errors: newErrors,
            
        })
        console.log('taskName',this.state.values.taskName)
    }
    
    
    render() {
        return (
            <form onSubmit={this.addTask}>
                {/* <button onClick={() => { this.getTaskList() }}>Get task list</button> */}
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
                                <input id="newTask" name="taskName" onChange={this.handleOnChange} type="text" placeholder="Enter an activity..." />
                                <button id="addItem"
                                    onClick={(e)=>this.addTask(e)}
                                >
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <div className="card__todo">
                                {/* Uncompleted tasks */}
                                <ul className="todo" id="todo">
                                    {this.renderTaskToDo()}
                                    
                                </ul>
                                {/* Completed tasks */}
                                <ul className="todo" id="completed">
                                    {this.renderTaskToDoDone()}

                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
