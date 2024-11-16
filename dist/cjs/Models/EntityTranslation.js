"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTranslation = void 0;
class EntityTranslation {
    language = '';
    info = '';
    body = {};
    constructor() {
    }
    getLanguage() {
        return this.language;
    }
    setLanguage(language) {
        this.language = language;
        return this;
    }
    getInfo() {
        return this.info;
    }
    setInfo(info) {
        this.info = info;
        return this;
    }
    getBody() {
        return this.body;
    }
    setBody(body) {
        this.body = body;
        return this;
    }
}
exports.EntityTranslation = EntityTranslation;
//# sourceMappingURL=EntityTranslation.js.map