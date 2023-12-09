import { AbstractService } from './AbstractService.js';
export class DocumentsService extends AbstractService {
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
//# sourceMappingURL=DocumentsService.js.map