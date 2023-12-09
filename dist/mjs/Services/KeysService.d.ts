import { AbstractService } from './AbstractService.js';
export declare class KeysServices extends AbstractService {
    getAll(): Promise<any>;
    getOne(key: string): Promise<any>;
}
