const server = 'http://localhost:8080'

export default{
    FETCH_DASHBOARD:`${process.env.REACT_APP_SERVER}/investor/dashboard`,

    FETCH_PORTFOLIO:`${process.env.REACT_APP_SERVER}/investor/portfolio`,

    FETCH_PROFILE:`${process.env.REACT_APP_SERVER}/investor/profile`,
    UPDATE_PROFILE:`${process.env.REACT_APP_SERVER}/investor/profile`,

    CHANGE_PASSWORD:`${process.env.REACT_APP_SERVER}/investor/change-password`,

    FETCH_FAVOURITE:`${process.env.REACT_APP_SERVER}/investor/favourite-startups`,

}