import axios from "axios";

function ModifCompte (modifCompte) {
    return axios.patch (`http://localhost:3000/monCompte/${modifCompte.user_email}`,modifCompte, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

function getUserByEmail(email) {
    return axios.get("http://127.0.0.1:3000/monCompte/"+email+'/compte')
}

function getLastRes(email){
    return axios.get("http://127.0.0.1:3000/monCompte/"+email)
}

export default {
    ModifCompte,
    getUserByEmail,
    getLastRes,
}