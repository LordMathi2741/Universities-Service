export class University{
    constructor(name, domains, web_pages){
        this.name = name;
        this.domains = domains;
        this.web_pages = web_pages;
    }
  get getName() {
    return this.name;
  }

  get getDomains() {
    return this.domains;
  }

  get getWebPages() {
    return this.web_pages;
  }
}
