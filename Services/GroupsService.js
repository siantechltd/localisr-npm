import {AbstractService} from './AbstractService';

class GroupsServices extends AbstractService{

    constructor(language, client){
        super(language, client)
    }

    async getTranslations(group) {

        const path = 'groups/translations/' + this.language + `/${group}`;

        const response = await super.request('GET', path)

        return response.data
    }
}

export default GroupsServices