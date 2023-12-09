import { AbstractService } from './AbstractService.js';
export class GroupsServices extends AbstractService {
    async getTranslations(group) {
        const path = 'groups/translations/' + this.language + `/${group}`;
        const response = await super.request('GET', path);
        return response.data;
    }
}
//# sourceMappingURL=GroupsService.js.map