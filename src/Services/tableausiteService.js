import axios from "axios";

function getTableauSite (){
    return axios.get("http://127.0.0.1:3000/tableausite");
}

function getTableauDomicile (){
    return axios.get("http://127.0.0.1:3000/tableausite/tableaudomicile");
}

export default{
    getTableauSite,
    getTableauDomicile
}