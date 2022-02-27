import Axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";

export class ToDoListService {
    constructor() {
        return;
    }
    getTaskListApi = () => {
        return Axios({
            url: `${DOMAIN}/ToDoList/GetAllTask`,
            method: 'GET'

        });
    }
    appTaskApi = (taskName) => {
        return Axios({
            url: `${DOMAIN}/ToDoList/AddTask`,
            method: "POST",
            data: { taskName: taskName }
        });
    }
    deleteTaskApi = (taskName) => {
        return Axios({
            url: `${DOMAIN}/ToDoList/deleteTask?taskName=${taskName}`,
            method: "DELETE",

        });
    }
    doneTaskApi = (taskName) => {
        return Axios({
            url: `${DOMAIN}/ToDoList/doneTask?taskName=${taskName}`,
            method: "PUT",

        });
    }


}

export const todoListService = new ToDoListService();