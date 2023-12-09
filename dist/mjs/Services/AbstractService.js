export class AbstractService {
    language = 'en';
    client;
    constructor(language, client) {
        this.language = language;
        this.client = client;
    }
    request(method, path, params) {
        switch (method.toLowerCase()) {
            default:
            case 'get':
                return this.client.get(path, params || {});
        }
    }
    ;
}
//# sourceMappingURL=AbstractService.js.map