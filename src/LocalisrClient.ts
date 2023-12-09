import {HttpClient} from './Core/HttpClient.js'
import {GroupsServices} from './Services/GroupsService.js'
import {ProjectsService} from './Services/ProjectsService.js'
import {DocumentsService} from './Services/DocumentsService.js'
import {KeysServices} from "./Services/KeysService.js";

export class LocalisrClient{

    client: HttpClient;
    language: string = 'en'

    constructor(authorizationToken: string, projectToken: string){
        this.client = new HttpClient(authorizationToken, projectToken)
    }

    setLanguage(language: string){
        this.language = language
        return this
    }

    keys(): KeysServices{
        return new KeysServices(this.language, this.client)
    }

    groups(): GroupsServices{
        return new GroupsServices(this.language, this.client)
    }

    projects(): ProjectsService{
        return new ProjectsService(this.language, this.client)
    }

    documents(): DocumentsService{
        return new DocumentsService(this.language, this.client)
    }
}
