"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeysServices = void 0;
const AbstractService_js_1 = require("./AbstractService.js");
class KeysServices extends AbstractService_js_1.AbstractService {
    async getAll() {
        const path = 'keys/translations/' + this.language;
        const response = await super.request('GET', path);
        return response.data.translations;
    }
    async getOne(key) {
        const path = 'keys/translations/' + this.language + `/${key}`;
        const response = await super.request('GET', path);
        return response.data.translations;
    }
}
exports.KeysServices = KeysServices;
//# sourceMappingURL=KeysService.js.map