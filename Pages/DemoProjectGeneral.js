import { faker } from "@faker-js/faker";
import fs from "fs";
export class DemoProjectGeneral {
  constructor(page) {
    this.page = page;
    this.url = "https://www.demoblaze.com/";
  }
  async goto(url) {
    await this.page.goto(this.url);
  }

  randomUserGenerationAndUpdate(){
  const username = `user_${faker.string.alphanumeric(5)}`;
  const password = faker.internet.password(10);
  const userData = { username, password }
  fs.writeFileSync("./utils/newUser.json", JSON.stringify(userData, null, 2));
  return userData;
  }
  
}
