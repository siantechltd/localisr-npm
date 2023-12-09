import { AbstractService } from './AbstractService.js'

export class DocumentsService extends AbstractService {

  /**
   * Get all documents headers from Localisr
   */
  async getAll () {
    const path = 'documents'

    const response = await super.request('GET', path)

    return response.data.documents
  }

  /**
   * Get document translation for a given reference
   * @param reference
   */
  async getOne (reference: string) {
    const path = 'documents/translations/' + this.language + '/' + reference

    const response = await super.request('GET', path)

    return response.data.document
  }
}
