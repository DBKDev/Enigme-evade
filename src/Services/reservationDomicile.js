import axios from "axios";

function newReservation(resaDom) {
    return axios.post("http://127.0.0.1:3000/reservationDomicile", resaDom, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

function salleDom(){
    return axios.get("http://127.0.0.1:3000/reservationDomicile")
}

export default {
    newReservation,
    salleDom
}