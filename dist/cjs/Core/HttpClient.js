"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = require("axios");
class HttpClient {
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
        return axios_1.default.get(url, {
            headers: this.generateHeaders(),
            params
        });
    }
    ;
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=HttpClient.js.map