import {test, expect} from '@playwright/test';
import { DemoProjectSignupPage } from '../Pages/DemoProjectSignupPage';
import { DemoProjectGeneral } from '../Pages/DemoProjectGeneral';
import { assert } from 'node:console';
const credentialsList = require('../utils/demoprojecttestdata.json');

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
   
    const usernamevalue= credentialsList.signupcredentials.username
    const passwordvalue= credentialsList.signupcredentials.password 
    await demoprojectsignuppage.signupFormFilling(usernamevalue,passwordvalue);
    await demoprojectsignuppage.signupFormSubmission()
})
test('DemoProject Signup Cancel',async({page})=>{
    test.setTimeout(60000);
    await demoprojectsignuppage.signupFormCancel()

    const contactText= page.locator("//a[text()='Contact']")
    await expect(page.locator("//a[text()='Contact']")).toBeVisible()
})
})