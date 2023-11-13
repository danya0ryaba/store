import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.escuelajs.co/api/v1/'
})


export const categotyAPI = {
    getCategory() {
        return instance.get('categories')
    }
}