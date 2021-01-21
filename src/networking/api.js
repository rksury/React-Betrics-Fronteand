import axios from 'axios';
// import {Redirect} from "react-router";


export default class API {
    baseUrl = 'http://127.0.0.1:8000/'

    async setToken(token) {
        try {
            await localStorage.setItem('token', token)
        } catch (error) {
            console.log(error);
        }
    }

    async PostApi(data, url) {
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


    async GetApi(url) {
        let token = localStorage.getItem('token')
        try {
            let response = axios.get(
                this.baseUrl + url,
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
                    return error.response
                })
            return response
        } catch (error) {
            console.log(error);
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

};