"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractService = void 0;
class AbstractService {
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
            case 'post':
                return this.client.post(path, params || {});
            case 'patch':
                return this.client.patch(path, params || {});
            case 'delete':
                return this.client.delete(path, params || {});
        }
    }
    ;
}
exports.AbstractService = AbstractService;
//# sourceMappingURL=AbstractService.js.map