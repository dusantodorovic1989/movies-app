import axios from 'axios'

class Movies {
    constructor(){
        axios.defaults.baseURL='http://localhost:3000/api/'
    }
    // getAll(){
    //     return axios.get('movies')
    // }
}

export const movies = new Movies();

export default movies;