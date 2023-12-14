import axios from "axios";

function getUserByEmail (email){
    return axios.get("http://127.0.0.1:3000/test/"+email);
}

function getAllResa(){
    return axios.get("http://127.0.0.1:3000/test")
};


export default {
    getUserByEmail,
    getAllResa
}