import { GET_API_TASK, GET_TASK_LIST_API } from "../constants/ToDoListConstants";

const initialState = {
    toDoList: [{ taskName: 'an com', status: false }],
}

export const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_API_TASK:
            console.log('action', action)
            state.toDoList = action.toDoList
            return {...state }


        default:
            return {...state }
    }
}
export default ToDoListReducer;