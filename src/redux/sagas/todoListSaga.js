import Axios from 'axios'
import { fork, take, takeEvery, delay, takeLatest, call, put } from 'redux-saga/effects'
import { todoListService } from '../../services/ToDoListServices';
import { STATUS_CODE } from '../../util/constants/settingSystem';
import { ADD_TASK_LIST, GET_API_TASK, GET_TASK_LIST_API } from '../constants/ToDoListConstants';


function* getTaskListAPI(action) {
    // while (true) {
    //     yield take('getListTaskAPI'); // take theo dõi action => xem action nào được dispatch lên mới bắt đầu làm
    //     console.log('Task list API')
    // }
    // yield delay(3000);
    // console.log('get api task', action)


    // thuc hien goi api
    try {
        let { data, status } = yield call(todoListService.getTaskListApi)
            // sau khi lay gia tri thanh cong dung put (giong nhu dispatch cua ben thunk)
        console.log(data);
        // if (status === 200) {

        //     yield put({
        //         type: GET_TASK_LIST_API,
        //         toDoList: data

        //     })
        // }


    } catch (err) {
        console.log('error', err)
    }


}


export function* FollowActionGetTaskAPI() {
    // fork là hàm thực hiện non-blocking nó sẽ chạy không cần chờ
    // yield fork(getTaskListAPI);

    // cách sử dụng bây giờ
    // taskEvery('ten dispatch action', ten ham duoc goi);

    // yield takeEvery('getListTaskAPI', getTaskListAPI)

    // takeLatest nó sẽ lấy dữ liệu cuối cùng trong lúc thực thi 
    yield takeLatest(GET_TASK_LIST_API, getTaskListAPI)
}


function* addTaskApiAction(action) {
    const { taskName } = action;
    try {
        const { data, status } = yield call(() => {
            return todoListService.appTaskApi(taskName);
        })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_LIST_API
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export function* FollowActionAddTaskAPI() {
    yield takeLatest(ADD_TASK_LIST, addTaskApiAction)
}