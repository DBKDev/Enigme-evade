import axios from "axios";

function sendEmail(formData){
    return axios.post('http://127.0.0.1:3000/submit', formData,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    sendEmail
};