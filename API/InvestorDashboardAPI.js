import { SERVER_URL } from "../config/env"
export default{
    FETCH_DASHBOARD:`${SERVER_URL}/investor/dashboard`,

    FETCH_PORTFOLIO:`${SERVER_URL}/investor/portfolio`,

    FETCH_PROFILE:`${SERVER_URL}/investor/profile`,
    UPDATE_PROFILE:`${SERVER_URL}/investor/profile`,

    CHANGE_PASSWORD:`${SERVER_URL}/investor/change-password`,

    FETCH_FAVOURITE:`${SERVER_URL}/investor/favourite-startups`,

}