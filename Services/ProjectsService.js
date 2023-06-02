import { AbstractService } from "./AbstractService";

class ProjectsService extends AbstractService{

    constructor(language, client){
        super(language, client)
    }

    async getLanguages(dev = false){
        const path = 'languages'

        const response = await super.request('GET', path)

        return response.data.languages
    }
}

export default ProjectsService