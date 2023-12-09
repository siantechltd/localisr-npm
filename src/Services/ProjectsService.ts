import { AbstractService } from './AbstractService.js'

export class ProjectsService extends AbstractService {
  async getLanguages () {
    const path = 'languages'

    const response = await super.request('GET', path).catch((err) => {
      return err.response
    })

    return response.data.languages
  }
}
