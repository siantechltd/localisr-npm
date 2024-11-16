import { AbstractService } from './AbstractService.js';
import { Entity } from '../Models/Entity';
import { EntityTranslation } from '../Models/EntityTranslation';
export declare class EntitiesServices extends AbstractService {
    getAll(): Promise<any>;
    getOne(key: string): Promise<any>;
    getOneTranslation(key: string): Promise<any>;
    createOne(entity: Entity): Promise<any>;
    deleteOne(params: any): Promise<any>;
    saveTranslation(entity: Entity, entityTranslation: EntityTranslation): Promise<any>;
    updateTranslation(entity: Entity, entityTranslation: EntityTranslation): Promise<any>;
}
