import { all } from 'redux-saga/effects'
import * as ToDoListSaga from './todoListSaga';
import * as CyberBugs from './CyberBug/UserCyberBug';
import * as CyberBugsCreateProject from './CyberBug/ProjectCreateSaga';
import * as CreateProject from './CyberBug/ProjectCreateSaga';

export function* rootSaga() {
    yield all([
        // nghiep vu theo doi cac action todolist
        ToDoListSaga.FollowActionGetTaskAPI(),
        ToDoListSaga.FollowActionAddTaskAPI(),

        // cac nghiep vu khac se khai bao tiep o duoi day
        CyberBugs.followSignInSaga(),
        CyberBugsCreateProject.followProjectCreate(),
        CreateProject.followProjectCreateSaga(),
    ])
}