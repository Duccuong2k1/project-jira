import Axios from "axios"
import { DOMAIN_CYBERBUG } from "../util/constants/settingSystem"



export const cyberBugService = {
    signInService: (userLogin) => {
        return Axios({
            url: `${DOMAIN_CYBERBUG}/Users/signin`,
            method: 'POST',
            data: userLogin
        })
    },
    getAllProjectCategory: () => {
        return Axios({
            url: `${DOMAIN_CYBERBUG}/ProjectCategory`,
            method: 'GET',
        })
    },
    createProject: (newProject) => {
        return Axios({
            url: `${DOMAIN_CYBERBUG}/Project/createProject`,
            method: 'POST',
            data: newProject
        })
    }
}