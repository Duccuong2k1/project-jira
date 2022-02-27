import Axios from "axios"
import { GET_API_TASK } from "../constants/ToDoListConstants"

export const getToDoListAPI = () => {
    return dispatch => {
        const promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'

        })
        promise
            .then((result) => {
                console.log(result.data)
                console.log('thanh cong')
                dispatch({
                    type: GET_API_TASK,
                    toDoList: result.data
                })

            })
            .catch((err) => {
                console.log('that bai');
                console.log(err.response.data)
            })
    }
}
export const addTaskAPI = (taskName) => {
    return dispatch => {
        const promise = Axios({
            url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
            method: "POST",
            data: { taskName: taskName }
        });
        promise
            .then((result) => {
                // sau khi thực hiện api gọi phương thức dispatchAction get taskList để load lai danh sách task
                dispatch(getToDoListAPI())
            })

        .catch((err) => {
            alert('them that bai')
        })
    }
}

// thuc hiên với async va await
export const _getToDoListAPI = () => {
    return async dispatch => {
        try {
            const res = await Axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'

            })
            if (res.status === 200) {
                dispatch({
                    type: GET_API_TASK,
                    toDoList: res.data
                })
            }

        } catch (error) {
            console.log(error.response.data)
        }


    }
}