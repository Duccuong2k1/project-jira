import Axios from 'axios'
import { fork, take, takeEvery, delay, takeLatest, call, put, select } from 'redux-saga/effects';
import { cyberBugService } from '../../../services/CyberBugService';
import { TOKEN } from '../../../util/constants/settingSystem';
import { USER_SIGN_API } from '../../constants/CyberBugConstants';
import { push } from 'react-router-redux';
import history from '../../../util/history';
import { US_LOGIN } from "../../constants/CyberBugConstants";


function* signInSaga(action) {
    yield
    // console.log('signInSaga', action);
    yield delay(500);
    try {
        // lưu vào localStorage khi đăng nhập thành công 
        const { data, status } = yield call(() => cyberBugService.signInService(action.userLogin));
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem("user_login", JSON.stringify(data.content));


        yield put({
            type: US_LOGIN,
            userLogin: data.content
        })

        // action.userLogin.history.push('/');
        console.log('login', data);
        //CÁCH 1 để chuyển hướng trong redux saga  action.userLogin.history.push('/');

        // CÁCH 2 chuyển hướng dùng tạo ra 1 history trên reducer và lấy xuống thông qua dispatch được gửi từ app
        let history = yield select(state => state.historyReducer.history);
        history.push('/');
    } catch (error) {

        console.log(error.response.data)
    }

}
export function* followSignInSaga() {
    yield takeLatest(USER_SIGN_API, signInSaga);
}