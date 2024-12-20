import {HttpClient} from "../Core/HttpClient.js";
import {AxiosResponse} from "axios";

export class AbstractService {

    language: string = 'en'
    client: HttpClient

    constructor(language: string, client: HttpClient) {
        this.language = language
        this.client = client
    }

    request(method: string, path: string, params?: {}): Promise<AxiosResponse> {
        switch (method.toLowerCase()) {
            default:
            case 'get':
                return this.client.get(path, params || {})
            case 'post':
                return this.client.post(path, params || {})
            case 'patch':
                return this.client.patch(path, params || {})
            case 'delete':
                return this.client.delete(path, params || {})
        }
    };
}
