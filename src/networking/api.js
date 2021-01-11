import axios from 'axios';

export default class API {

    async setToken(token) {
        try {
            await localStorage.setItem('token', token)
        }
        catch (error) {
            console.log(error);
        }
    }

    async LoginApi(data) {
        try {
            let response = axios.post(
                'http://127.0.0.1:8000/user/login',
                data
            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error
                })
            return response
        } catch (error) {
            return error
        }
    }

}
