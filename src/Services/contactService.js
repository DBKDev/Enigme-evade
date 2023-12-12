import axios from "axios";

function sendEmailContact(formData){
    return axios.post('http://127.0.0.1:3000/contact', formData,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function sendEmailDevis(formData){
    return axios.post('http://127.0.0.1:3000/devis', formData,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    sendEmailContact,
    sendEmailDevis
};