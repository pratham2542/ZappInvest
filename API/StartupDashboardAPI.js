const server = 'http://localhost:8080'

export default{

    FETCH_DASHBOARD:`${process.env.REACT_APP_SERVER}/startup/dashboard`,

    FETCH_PROFILE:`${process.env.REACT_APP_SERVER}/startup/profile`,
    UPDATE_PROFILE:`${process.env.REACT_APP_SERVER}/startup/profile`,

    FETCH_TEAM:`${process.env.REACT_APP_SERVER}/startup/team-details`,
    UPDATE_TEAM:`${process.env.REACT_APP_SERVER}/startup/team-details`,

    FETCH_ENTITY_DETAIL:`${process.env.REACT_APP_SERVER}/startup/entity-detail`,
    UPDATE_ENTITY_DETAIL:`${process.env.REACT_APP_SERVER}/startup/entity-detail`,

    FETCH_FAQ_DETAIL:`${process.env.REACT_APP_SERVER}/startup/faq-detail`,
    UPDATE_FAQ_DETAIL:`${process.env.REACT_APP_SERVER}/startup/faq-detail`,

    FETCH_DOCUMENT:`${process.env.REACT_APP_SERVER}/startup/document`,
    UPDATE_DOCUMENT:`${process.env.REACT_APP_SERVER}/startup/document`,

    FETCH_ONEPAGER:`${process.env.REACT_APP_SERVER}/startup/onepager`,
    UPDATE_ONEPAGER:`${process.env.REACT_APP_SERVER}/startup/onepager`,

    FETCH_ONEPAGER_PDF:`${process.env.REACT_APP_SERVER}/startup/onepager-pdf`,

    FETCH_SERVICE:`${process.env.REACT_APP_SERVER}/startup/service`,
    UPDATE_SERVICE:`${process.env.REACT_APP_SERVER}/startup/service`,
}