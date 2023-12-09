"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsServices = void 0;
const AbstractService_js_1 = require("./AbstractService.js");
class GroupsServices extends AbstractService_js_1.AbstractService {
    async getTranslations(group) {
        const path = 'groups/translations/' + this.language + `/${group}`;
        const response = await super.request('GET', path);
        return response.data;
    }
}
exports.GroupsServices = GroupsServices;
//# sourceMappingURL=GroupsService.js.map