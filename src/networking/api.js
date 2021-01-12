import axios from 'axios';

export default class API {
    baseUrl = 'http://192.168.29.106:8000/'
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
                this.baseUrl + url,
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


    async ResponseApi1(data, url) {
        console.log('react')
        try {
            let response = axios.post(
                this.baseUrl + url,
                data
            )
                .then((res1) => {
                    return res1
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
        let token = localStorage.getItem('token')
        try {
            let response = axios.post(
                this.baseUrl + url,
                data,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
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
