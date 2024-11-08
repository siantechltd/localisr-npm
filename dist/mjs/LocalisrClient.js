import { HttpClient } from './Core/HttpClient.js';
import { GroupsServices } from './Services/GroupsService.js';
import { ProjectsService } from './Services/ProjectsService.js';
import { DocumentsService } from './Services/DocumentsService.js';
import { KeysServices } from "./Services/KeysService.js";
import { EntitiesServices } from './Services/EntitiesService';
export class LocalisrClient {
    client;
    language = 'en';
    constructor(authorizationToken, projectToken) {
        this.client = new HttpClient(authorizationToken, projectToken);
    }
    setLanguage(language) {
        this.language = language;
        return this;
    }
    keys() {
        return new KeysServices(this.language, this.client);
    }
    entities() {
        return new EntitiesServices(this.language, this.client);
    }
    groups() {
        return new GroupsServices(this.language, this.client);
    }
    projects() {
        return new ProjectsService(this.language, this.client);
    }
    documents() {
        return new DocumentsService(this.language, this.client);
    }
}
//# sourceMappingURL=LocalisrClient.js.map