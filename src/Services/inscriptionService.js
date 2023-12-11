import axios from "axios";

function AddInscription(inscription) {
    return axios.post("http://127.0.0.1:3000/inscription", inscription, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

export default {
    AddInscription,
}