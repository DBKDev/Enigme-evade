import axios from "axios";

function AddReservationSite(resSite){
    return axios.post("http://127.0.0.1:3000/reservation", resSite,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function GetNomsite(){
    return axios.get("http://127.0.0.1:3000/nomsite");
}

export default{
    AddReservationSite,
    GetNomsite
}