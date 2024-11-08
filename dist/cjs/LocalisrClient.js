"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalisrClient = void 0;
const HttpClient_js_1 = require("./Core/HttpClient.js");
const GroupsService_js_1 = require("./Services/GroupsService.js");
const ProjectsService_js_1 = require("./Services/ProjectsService.js");
const DocumentsService_js_1 = require("./Services/DocumentsService.js");
const KeysService_js_1 = require("./Services/KeysService.js");
const EntitiesService_1 = require("./Services/EntitiesService");
class LocalisrClient {
    client;
    language = 'en';
    constructor(authorizationToken, projectToken) {
        this.client = new HttpClient_js_1.HttpClient(authorizationToken, projectToken);
    }
    setLanguage(language) {
        this.language = language;
        return this;
    }
    keys() {
        return new KeysService_js_1.KeysServices(this.language, this.client);
    }
    entities() {
        return new EntitiesService_1.EntitiesServices(this.language, this.client);
    }
    groups() {
        return new GroupsService_js_1.GroupsServices(this.language, this.client);
    }
    projects() {
        return new ProjectsService_js_1.ProjectsService(this.language, this.client);
    }
    documents() {
        return new DocumentsService_js_1.DocumentsService(this.language, this.client);
    }
}
exports.LocalisrClient = LocalisrClient;
//# sourceMappingURL=LocalisrClient.js.map