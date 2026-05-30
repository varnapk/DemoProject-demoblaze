import {test, expect} from '@playwright/test';
import { DemoProjectSignupPage } from '../Pages/DemoProjectSignupPage';
import { DemoProjectGeneral } from '../Pages/DemoProjectGeneral';
import { assert } from 'node:console';
const credentialsList = require('../utils/demoprojecttestdata.json');
import { faker } from '@faker-js/faker';
import fs from 'fs';

test.describe('Signup Suite', () => {
let demoprojectgeneral
let demoprojectsignuppage
test.beforeEach(async ({ page }) => {

    const url=credentialsList.siteUrl.url
    demoprojectgeneral= new DemoProjectGeneral(page)
    await demoprojectgeneral.goto(url);
    demoprojectsignuppage = new DemoProjectSignupPage(page);
    await demoprojectsignuppage.signinbuttonClick();
    
})
test('Demoproject Signup submission', async({page}) => {
test.setTimeout(60000);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Sign up successful.');
        await dialog.accept();
    })
    const username = `user_${faker.string.alphanumeric(5)}`;
  const password = faker.internet.password(10);
  
  const userData = { username, password };
   
   // const usernamevalue= credentialsList.signupcredentials.username
   // const passwordvalue= credentialsList.signupcredentials.password 
    //await demoprojectsignuppage.signupFormFilling(usernamevalue,passwordvalue);
     await demoprojectsignuppage.signupFormFilling(userData.username,userData.password);
    await demoprojectsignuppage.signupFormSubmission()
    fs.writeFileSync('./utils/newUser.json', JSON.stringify(userData, null, 2));
})
test('DemoProject Signup Cancel',async({page})=>{
    test.setTimeout(60000);
    await demoprojectsignuppage.signupFormCancel()

    const contactText= page.locator("//a[text()='Contact']")
    await expect(page.locator("//a[text()='Contact']")).toBeVisible()
})
})