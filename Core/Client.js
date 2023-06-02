import axios from "axios";

class HttpClient{

    serverUrl = 'https://api.localisr.com/v1/'

    constructor(authorizationToken, projectToken){
        this.authorizationToken = authorizationToken
        this.projectToken = projectToken
    }

    generateHeaders() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Localisr-Authorization-Token': this.authorizationToken,
            'X-Localisr-Project-Token': this.projectToken,
        };
    }
    
    get(path, params){
        const url = this.serverUrl + path

        return axios.get(url, {
            headers: this.generateHeaders(),
            params,
        }).catch((err) => {
            console.log(err);
        });
    };
}

export default HttpClient