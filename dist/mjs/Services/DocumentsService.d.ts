import { AbstractService } from './AbstractService.js';
export declare class DocumentsService extends AbstractService {
    getAll(): Promise<any>;
    getOne(reference: string): Promise<any>;
}
