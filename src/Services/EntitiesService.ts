import { AbstractService } from './AbstractService.js'
import { Entity } from '../Models/Entity'
import { EntityTranslation } from '../Models/EntityTranslation'

export class EntitiesServices extends AbstractService {
  // will return a batch of 500 keys
  async getAll () {
    const path = 'entities/translations/' + this.language

    const response = await super.request('GET', path)

    return response.data.translations
  }

  // get translation for a single entity
  async getOne (key: string) {
    const path = `entities/${key}`

    try {
        const response = await super.request('GET', path)

        return response.data.entity
    }catch(err) {
      console.error('error: ', err)
    }
  }

  // get translation for a single entity
  async getOneTranslation (key: string) {
    const path = 'entities/translations/' + this.language + `/${key}`

    const response = await super.request('GET', path)

    return response.data.translations
  }

  // create entity
  async createOne (entity: Entity) {
    const path = 'entities'

    const params = {
      name: entity.getName(),
      info: entity.getInfo(),
    }
    const response = await super.request('POST', path, params)

    return response.data.entity
  }

  // create entity
  async deleteOne (params: any) {
    const path = 'entities/' + params.entity

    const response = await super.request('DELETE', path, params)

    return response.data.entity
  }

  // save / update translation for a specific language
  async saveTranslation (entity: Entity, entityTranslation: EntityTranslation) {
    const path = 'entities/translations/' + this.language + `/${entity.getUuid()}`

    const params = {
      object: entityTranslation.getBody()
    }

    const response = await super.request('POST', path, params)

    return response.data.translation
  }

  // save / update translation for a specific language
  async updateTranslation (entity: Entity, entityTranslation: EntityTranslation) {
    const path = 'entities/translations/' + this.language + `/${entity.getUuid()}`

    const params = {
      object: entityTranslation.getBody()
    }

    const response = await super.request('PATCH', path, params)

    return response.data.translation
  }
}
