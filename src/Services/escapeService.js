import axios from "axios";


function getNomSite (){
    return axios.get("http://127.0.0.1:3000/site");
}

function getDetailsSite (id){
    return axios.get("http://127.0.0.1:3000/site/"+id);
}


function getNomDomicile (){
    return axios.get("http://127.0.0.1:3000/domicile");
}
function getDetailsDomicile (id){
    return axios.get("http://127.0.0.1:3000/domicile/"+id);
}


export default {
    getDetailsSite,
    getDetailsDomicile,
    getNomDomicile,
    getNomSite
}