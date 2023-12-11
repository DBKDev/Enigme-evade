import axios from "axios";

function AddConnexion(connexion) {
    return axios.post("http://127.0.0.1:3000/connexion",{connexion}, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

export default {
    AddConnexion,
}