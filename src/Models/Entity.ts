export class Entity {
  private uuid: string = '';
  private name: string = ''
  private info: string = ''

  constructor() {

  }

  getUuid(): string {
    return this.uuid;
  }

  setUuid(uuid: string): this
  {
    this.uuid = uuid;
    return this;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  getInfo(): string {
    return this.info;
  }

  setInfo(info: string) {
    this.info = info;
    return this;
  }

}
