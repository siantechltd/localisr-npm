import axios, { AxiosResponse} from 'axios'


export class HttpClient {
  serverUrl:string = 'https://api.localisr.com/v1/'
  authorizationToken: string
  projectToken: string

  constructor (authorizationToken: string, projectToken: string) {
    this.authorizationToken = authorizationToken
    this.projectToken = projectToken
  }

  generateHeaders () {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Localisr-Authorization-Token': this.authorizationToken,
      'X-Localisr-Project-Token': this.projectToken
    }
  }

  async get (path: string, params: {}):Promise<AxiosResponse> {
    const url = this.serverUrl + path

    return axios.get(url, {
      headers: this.generateHeaders(),
      params
    })
  };

  async post (path: string, params: {}):Promise<AxiosResponse> {
    const url = this.serverUrl + path

    return axios.post(url, JSON.stringify(params), {
      headers: this.generateHeaders()
    })
  };

  async patch (path: string, params: {}):Promise<AxiosResponse> {
    const url = this.serverUrl + path

    return axios.post(url, JSON.stringify(params), {
      headers: this.generateHeaders()
    })
  };

  async delete (path: string, params: {}):Promise<AxiosResponse> {
    const url = this.serverUrl + path

    return axios.delete(url, {
      headers: this.generateHeaders(),
      data: JSON.stringify(params)
    })
  };
}
