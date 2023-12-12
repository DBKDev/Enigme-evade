import axios from "axios";

function getImageSite (id){
    return axios.get("http://127.0.0.1:3000/site/"+id);
}

function getImageDomicile (id){
    return axios.get("http://127.0.0.1:3000/domicile/"+id);
}


export default {
    getImageDomicile,
    getImageSite

}