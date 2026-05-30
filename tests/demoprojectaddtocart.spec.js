import {test, expect} from '@playwright/test';
import { DemoProjectLoginPage } from '../Pages/DemoProjectLoginPage';
import { DemoProjectAddtocartPage } from '../Pages/DemoProjectAddtoCartPage';
import { DemoProjectGeneral } from '../Pages/DemoProjectGeneral';
const credentialsList = require('../utils/demoprojecttestdata.json');
const validCredential=require('../utils/newUser.json')
    const name=credentialsList.placeorderDetails.name
    const country=credentialsList.placeorderDetails.country
    const city=credentialsList.placeorderDetails.city
    const creditcard=credentialsList.placeorderDetails.creditcard
    const month=credentialsList.placeorderDetails.month
    const year=credentialsList.placeorderDetails.year
test.describe('Add to Cart Suite', () => {
 let demoprojectgeneral;
 let demoprojectloginpage;
 let demoprojectaddtocart;

  test.beforeEach(async ({ page }) => {
    const url = credentialsList.siteUrl.url;
    demoprojectgeneral = new DemoProjectGeneral(page);
    demoprojectloginpage = new DemoProjectLoginPage(page);
    demoprojectaddtocart = new DemoProjectAddtocartPage(page);
    
    await demoprojectgeneral.goto(url);
    await demoprojectloginpage.login(
      validCredential.username,
      validCredential.password
    );

    page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
     expect(dialog.message()).toBe('Product added.');
      await dialog.accept();
    });
  });


test('Select One Product', async({page})=>{
   test.setTimeout(60000)
   await demoprojectaddtocart.addToCartAnyOneProduct()

})

test('Select One Product Under Phones', async({page})=>{
    test.setTimeout(60000)

    await demoprojectaddtocart.addToCartOneProductUnderPhones()
    await demoprojectaddtocart.goToCart()
    await demoprojectaddtocart.placeOrder(name,country,city,creditcard,month,year)
    
  await expect(page.locator("//h2[text()='Thank you for your purchase!']")).toBeVisible()
})
test('Select One Product Under Monitors', async({page})=>{
    test.setTimeout(60000)

    await demoprojectaddtocart.addToCartOneProductUnderMonitors()
    await demoprojectaddtocart.goToCart()
    await demoprojectaddtocart.placeOrder(name,country,city,creditcard,month,year)
  
    await expect(page.locator("//h2[text()='Thank you for your purchase!']")).toBeVisible()

  })
})
