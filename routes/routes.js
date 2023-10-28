import {SERVER_URL} from '../config/env';
console.log(SERVER_URL);

export default {
    signUpRoute:`${SERVER_URL}/user/signup`,
    loginRoute:`${SERVER_URL}/user/login`,
    startup:`${SERVER_URL}/startup/`,
    userRoute:`${SERVER_URL}/user/`,
    
};