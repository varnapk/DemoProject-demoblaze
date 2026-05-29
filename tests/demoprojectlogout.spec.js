import {test, expect} from '@playwright/test';
import { DemoProjectLoginPage } from '../Pages/DemoProjectLoginPage';
import { DemoProjectLogoutPage } from '../Pages/DemoProjectLogoutPage';
import { DemoProjectGeneral } from '../Pages/DemoProjectGeneral';
const credentialsList = require('../utils/demoprojecttestdata.json');
test('Logout', async({page})=>{

    const url=credentialsList.siteUrl.url
    const demoprojectgeneral= new DemoProjectGeneral(page)
    await demoprojectgeneral.goto(url);

    const demoprojectloginpage= new DemoProjectLoginPage(page)
    const username=credentialsList.validlogincredentials.username
    const password= credentialsList.validlogincredentials.password
    await demoprojectloginpage.login(username,password)
    
    const demoprojectlogoutpage= new DemoProjectLogoutPage(page)
    await demoprojectlogoutpage.logout()

    const loginText=page.locator('#login2')
    await expect(loginText).toBeVisible()
    await expect(loginText).toHaveText('Log in')

})