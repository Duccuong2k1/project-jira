import { GET_ALL_PROJECT_CATEGORY } from "../constants/CyberBugConstants"

const initialState = {
    projectCategory: []
}


export const ProjectCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECT_CATEGORY:
            state.projectCategory = action.data
            return {...state }
        default:
            return {...state }
    }
}