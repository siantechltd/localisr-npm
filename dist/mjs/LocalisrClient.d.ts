import { HttpClient } from './Core/HttpClient.js';
import { GroupsServices } from './Services/GroupsService.js';
import { ProjectsService } from './Services/ProjectsService.js';
import { DocumentsService } from './Services/DocumentsService.js';
import { KeysServices } from "./Services/KeysService.js";
import { EntitiesServices } from './Services/EntitiesService';
export declare class LocalisrClient {
    client: HttpClient;
    language: string;
    constructor(authorizationToken: string, projectToken: string);
    setLanguage(language: string): this;
    keys(): KeysServices;
    entities(): EntitiesServices;
    groups(): GroupsServices;
    projects(): ProjectsService;
    documents(): DocumentsService;
}
