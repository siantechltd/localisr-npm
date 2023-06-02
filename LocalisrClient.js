import HttpClient from './Core/Client'
import KeysServices from './Services/KeysService'
import GroupsServices from './Services/GroupsService'
import ProjectsService from './Services/ProjectsService'
import DocumentsService from './Services/DocumentsService'

export class LocalisrClient{

    constructor(authorizationToken, projectToken){
        this.client = new HttpClient(authorizationToken, projectToken)
    }

    setLanguage(language){
        this.language = language
        return this
    }

    keys(){
        return new KeysServices(this.language, this.client)
    }

    groups(){
        return new GroupsServices(this.language, this.client)
    }

    projects(){
        return new ProjectsService(this.language, this.client)
    }

    documents(){
        return new DocumentsService(this.language, this.client)
    }
}