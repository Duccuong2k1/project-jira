import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberBugService } from "../../../services/CyberBugService";
import { GET_ALL_PROJECT_CATEGORY, GET_ALL_PROJECT_CATEGORY_SAGA } from "../../constants/CyberBugConstants";

function* getAllProjectCategorySaga(action) {
    yield
    console.log(action);
    try {
        const { data, status } = yield call(() => cyberBugService.getAllProjectCategory());

        console.log(data, data);
        yield put({
            type: GET_ALL_PROJECT_CATEGORY,
            data: data.content,
        })
    } catch (err) {
        console.log(err);
    }
};

export function* followProjectCreate() {
    yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga)
};
// ================== createProject saga ===========
function* createProjectSaga(action) {
    yield
    console.log(action);
    yield delay(500)
    try {
        const { data, status } = yield call(() => cyberBugService.createProject(action.newProject));

        console.log("data moi tao", data);

    } catch (err) {
        console.log('thong tin chi tiết lỗi',err);

    }

};
export function* followProjectCreateSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga)
};