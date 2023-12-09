import { AbstractService } from './AbstractService.js';
export class KeysServices extends AbstractService {
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
//# sourceMappingURL=KeysService.js.map