import {AbstractService} from './AbstractService';

class KeysServices extends AbstractService{

    constructor(language, client){
        super(language, client)
    }

    // will return a batch of 500 keys
    async getAll(){
        const path = 'keys/translations/' + this.language;

        const response = await super.request('GET', path)

        return response.data.translations
    }

    // get translation for a single key
    async getOne(key) {

        const path = 'keys/translations/' + this.language + `/${key}`;

        const response = await super.request('GET', path)

        return response.data
    }
}

export default KeysServices