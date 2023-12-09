import { AbstractService } from './AbstractService.js'

export class KeysServices extends AbstractService {
  // will return a batch of 500 keys
  async getAll () {
    const path = 'keys/translations/' + this.language

    const response = await super.request('GET', path)

    return response.data.translations
  }

  // get translation for a single key
  async getOne (key: string) {
    const path = 'keys/translations/' + this.language + `/${key}`

    const response = await super.request('GET', path)

    return response.data.translations
  }
}
