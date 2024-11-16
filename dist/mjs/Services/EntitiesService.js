import { AbstractService } from './AbstractService.js';
export class EntitiesServices extends AbstractService {
    async getAll() {
        const path = 'entities/translations/' + this.language;
        const response = await super.request('GET', path);
        return response.data.translations;
    }
    async getOne(key) {
        const path = `entities/${key}`;
        try {
            const response = await super.request('GET', path);
            return response.data.entity;
        }
        catch (err) {
            console.error('error: ', err);
        }
    }
    async getOneTranslation(key) {
        const path = 'entities/translations/' + this.language + `/${key}`;
        const response = await super.request('GET', path);
        return response.data.translations;
    }
    async createOne(entity) {
        const path = 'entities';
        const params = {
            name: entity.getName(),
            info: entity.getInfo(),
        };
        const response = await super.request('POST', path, params);
        return response.data.entity;
    }
    async deleteOne(params) {
        const path = 'entities/' + params.entity;
        const response = await super.request('DELETE', path, params);
        return response.data.entity;
    }
    async saveTranslation(entity, entityTranslation) {
        const path = 'entities/translations/' + this.language + `/${entity.getUuid()}`;
        const params = {
            object: entityTranslation.getBody()
        };
        const response = await super.request('POST', path, params);
        return response.data.translation;
    }
    async updateTranslation(entity, entityTranslation) {
        const path = 'entities/translations/' + this.language + `/${entity.getUuid()}`;
        const params = {
            object: entityTranslation.getBody()
        };
        const response = await super.request('PATCH', path, params);
        return response.data.translation;
    }
}
//# sourceMappingURL=EntitiesService.js.map