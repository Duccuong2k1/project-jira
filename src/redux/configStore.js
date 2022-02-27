import { combineReducers, createStore } from "redux";
import ToDoListReducer from "./reducers/ToDoListReducer";
import reduxThunk from 'redux-thunk';
import { applyMiddleware } from "redux";

// middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { ModalReducer } from "./reducers/ModalHOCReducer";
import { HistoryReducer } from "./reducers/HistoryReducer";
import { UserCyberBugReducer } from "./reducers/UserCyberBugReducer";
import { ProjectCategoryReducer } from "./reducers/ProjectCategoryReduer";

const middleWareSaga = createMiddleWareSaga();

// redux 
const rootReducer = combineReducers({
    // 
    ToDoList: ToDoListReducer,
    Modal: ModalReducer,
    historyReducer: HistoryReducer,
    UserCyberBugReducer: UserCyberBugReducer,
    ProjectCategoryReducer: ProjectCategoryReducer,
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

// run saga
middleWareSaga.run(rootSaga)

export default store;