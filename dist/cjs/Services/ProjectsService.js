"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const AbstractService_js_1 = require("./AbstractService.js");
class ProjectsService extends AbstractService_js_1.AbstractService {
    async getLanguages() {
        const path = 'languages';
        const response = await super.request('GET', path).catch((err) => {
            return err.response;
        });
        return response.data.languages;
    }
}
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=ProjectsService.js.map