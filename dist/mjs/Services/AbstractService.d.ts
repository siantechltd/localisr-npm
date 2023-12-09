import { HttpClient } from "../Core/HttpClient.js";
import { AxiosResponse } from "axios";
export declare class AbstractService {
    language: string;
    client: HttpClient;
    constructor(language: string, client: HttpClient);
    request(method: string, path: string, params?: {}): Promise<AxiosResponse>;
}
