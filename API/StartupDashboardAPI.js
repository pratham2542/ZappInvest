import { SERVER_URL } from "../config/env"
export default{

    FETCH_DASHBOARD:`${SERVER_URL}/startup/dashboard`,

    FETCH_PROFILE:`${SERVER_URL}/startup/profile`,
    UPDATE_PROFILE:`${SERVER_URL}/startup/profile`,

    FETCH_TEAM:`${SERVER_URL}/startup/team-details`,
    UPDATE_TEAM:`${SERVER_URL}/startup/team-details`,

    FETCH_ENTITY_DETAIL:`${SERVER_URL}/startup/entity-detail`,
    UPDATE_ENTITY_DETAIL:`${SERVER_URL}/startup/entity-detail`,

    FETCH_FAQ_DETAIL:`${SERVER_URL}/startup/faq-detail`,
    UPDATE_FAQ_DETAIL:`${SERVER_URL}/startup/faq-detail`,

    FETCH_DOCUMENT:`${SERVER_URL}/startup/document`,
    UPDATE_DOCUMENT:`${SERVER_URL}/startup/document`,

    FETCH_ONEPAGER:`${SERVER_URL}/startup/onepager`,
    UPDATE_ONEPAGER:`${SERVER_URL}/startup/onepager`,

    FETCH_ONEPAGER_PDF:`${SERVER_URL}/startup/onepager-pdf`,

    FETCH_SERVICE:`${SERVER_URL}/startup/service`,
    UPDATE_SERVICE:`${SERVER_URL}/startup/service`,
}