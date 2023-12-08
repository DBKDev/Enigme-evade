import axios from "axios";

function getImageAccueil ( ){
    return axios.get("http://127.0.0.1:3000/imageAccueil");
}

export default {
    getImageAccueil,
}