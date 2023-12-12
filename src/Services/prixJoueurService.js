import axios from "axios";

function getPrixJoueurSite () {
    return axios.get("http://127.0.0.1:3000/accueilPrixNbJoueur")
}

export default {
    getPrixJoueurSite
}