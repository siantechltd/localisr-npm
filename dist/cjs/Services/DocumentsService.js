"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
const AbstractService_js_1 = require("./AbstractService.js");
class DocumentsService extends AbstractService_js_1.AbstractService {
    async getAll() {
        const path = 'documents';
        const response = await super.request('GET', path);
        return response.data.documents;
    }
    async getOne(reference) {
        const path = 'documents/translations/' + this.language + '/' + reference;
        const response = await super.request('GET', path);
        return response.data.document;
    }
}
exports.DocumentsService = DocumentsService;
//# sourceMappingURL=DocumentsService.js.map