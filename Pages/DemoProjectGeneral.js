export class DemoProjectGeneral {
  constructor(page) {
    this.page = page;
    this.url='https://www.demoblaze.com/'
  }
  async goto(url) {
    await this.page.goto(this.url);
  }
}