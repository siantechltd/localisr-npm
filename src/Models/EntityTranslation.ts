export class EntityTranslation {
  private language: string = '';
  private info: string = ''
  private body: any = {};

  constructor () {

  }

  getLanguage(): string{
    return this.language;
  }

  setLanguage(language: string): this {
    this.language = language;
    return this;
  }

  getInfo(): string{
    return this.info;
  }

  setInfo(info: string): this {
    this.info = info;
    return this;
  }

  getBody(): any{
    return this.body;
  }

  setBody(body: any): this {
    this.body = body;
    return this;
  }

}
