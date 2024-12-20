import axios from 'axios';
export class HttpClient {
    serverUrl = 'https://api.localisr.com/v1/';
    authorizationToken;
    projectToken;
    constructor(authorizationToken, projectToken) {
        this.authorizationToken = authorizationToken;
        this.projectToken = projectToken;
    }
    generateHeaders() {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Localisr-Authorization-Token': this.authorizationToken,
            'X-Localisr-Project-Token': this.projectToken
        };
    }
    async get(path, params) {
        const url = this.serverUrl + path;
        return axios.get(url, {
            headers: this.generateHeaders(),
            params
        });
    }
    ;
    async post(path, params) {
        const url = this.serverUrl + path;
        return axios.post(url, JSON.stringify(params), {
            headers: this.generateHeaders()
        });
    }
    ;
    async patch(path, params) {
        const url = this.serverUrl + path;
        return axios.post(url, JSON.stringify(params), {
            headers: this.generateHeaders()
        });
    }
    ;
    async delete(path, params) {
        const url = this.serverUrl + path;
        return axios.delete(url, {
            headers: this.generateHeaders(),
            data: JSON.stringify(params)
        });
    }
    ;
}
//# sourceMappingURL=HttpClient.js.map