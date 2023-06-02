
export class AbstractService{

    constructor(language, client){
        this.language = language
        this.client = client
    }

    request(method, path, params){

        switch(method.toLowerCase()){
            case 'get':
                return this.client.get(path, params)
        }
    }
}
