import {test, expect} from '@playwright/test';
import { DemoProjectLoginPage } from '../Pages/DemoProjectLoginPage';
import { DemoProjectGeneral } from '../Pages/DemoProjectGeneral';
const credentialsList = require('../utils/demoprojecttestdata.json');

test.describe('Login Suite', () => {
let demoprojectgeneral
let demoprojectloginpage
test.beforeEach(async ({ page }) => {

    const url = credentialsList.siteUrl.url;
    demoprojectgeneral= new DemoProjectGeneral(page)
    await demoprojectgeneral.goto(url);
    demoprojectloginpage= new DemoProjectLoginPage(page)
    
})

test('Login using valid Credentials', async({page})=>{
    test.setTimeout(60000);
    const username=credentialsList.validlogincredentials.username
    const password= credentialsList.validlogincredentials.password
    await demoprojectloginpage.login(username,password)
    
    const logoutText=page.locator('#logout2')
    await expect(logoutText).toBeVisible()
    await expect(logoutText).toHaveText('Log out')

})
test('Login using Invalid Username and Valid Password', async({page})=>{
    
     page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('User does not exist.');
        await dialog.accept();
    })

    const userCredForInvalidUsernameValidPassword=credentialsList.invalidlogincredentials[0]
    const username = userCredForInvalidUsernameValidPassword.username
    const password= userCredForInvalidUsernameValidPassword.password
    await demoprojectloginpage.login(username,password)

})
test('Login using Valid Username and Invalid Password', async({page})=>{
    
     page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Wrong password.');
        await dialog.accept();
    })

    const userCredForValidUsernameInvalidPassword=credentialsList.invalidlogincredentials[1]
    const username = userCredForValidUsernameInvalidPassword.username
    const password= userCredForValidUsernameInvalidPassword.password
    await demoprojectloginpage.login(username,password)

})
test('Login using Invalid Username and Invalid Password', async({page})=>{
    
     page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('User does not exist.');
        await dialog.accept();
    })

    const userCredForInvalidUsernameInvalidPassword=credentialsList.invalidlogincredentials[2]
    const username = userCredForInvalidUsernameInvalidPassword.username
    const password= userCredForInvalidUsernameInvalidPassword.password
    await demoprojectloginpage.login(username,password)
    
})
})