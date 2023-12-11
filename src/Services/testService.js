import axios from 'axios'

function fetchUserByEmail (id) {
    return axios.get("http://127.0.0.1:3000/test/"+ id)
}

export default {
    fetchUserByEmail
}