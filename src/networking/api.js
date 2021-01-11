import axios from 'axios';

export default class API {

    async setToken(token) {
        try {
            await localStorage.setItem('token', token)
        } catch (error) {
            console.log(error);
        }
    }

    async ResponseApi(data, url) {
        console.log('react')
        try {
            let response = axios.post(
                url,
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


    async PatchApi(data, url) {
        console.log('react')
        try {
            let response = axios.patch(
                url,
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