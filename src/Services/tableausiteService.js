import axios from "axios";

function getTableauSite (email){
    return axios.get("http://127.0.0.1:3000/tableausite/" + email);
}

function getTableauDomicile (email){
    return axios.get("http://127.0.0.1:3000/tableausite/tableaudomicile/" + email);
}

export default{
    getTableauSite,
    getTableauDomicile
}