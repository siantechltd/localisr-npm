"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    uuid = '';
    name = '';
    info = '';
    constructor() {
    }
    getUuid() {
        return this.uuid;
    }
    setUuid(uuid) {
        this.uuid = uuid;
        return this;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    getInfo() {
        return this.info;
    }
    setInfo(info) {
        this.info = info;
        return this;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map