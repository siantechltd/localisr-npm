import { AxiosResponse } from 'axios';
export declare class HttpClient {
    serverUrl: string;
    authorizationToken: string;
    projectToken: string;
    constructor(authorizationToken: string, projectToken: string);
    generateHeaders(): {
        Accept: string;
        'Content-Type': string;
        'X-Localisr-Authorization-Token': string;
        'X-Localisr-Project-Token': string;
    };
    get(path: string, params: {}): Promise<AxiosResponse>;
}
