# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoprojectsignup.spec.js >> Signup Suite >> Demoproject Signup submission
- Location: tests\demoprojectsignup.spec.js:18:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { DemoProjectSignupPage } from '../Pages/DemoProjectSignupPage';
  3  | import { DemoProjectGeneral } from '../Pages/DemoProjectGeneral';
  4  | const credentialsList = require('../utils/demoprojecttestdata.json');
  5  | 
  6  | test.describe('Signup Suite', () => {
  7  | let demoprojectgeneral
  8  | let demoprojectsignuppage
  9  | test.beforeEach(async ({ page }) => {
  10 | 
  11 |     const url=credentialsList.siteUrl.url
  12 |     demoprojectgeneral= new DemoProjectGeneral(page)
  13 |     await demoprojectgeneral.goto(url);
  14 |     demoprojectsignuppage = new DemoProjectSignupPage(page);
  15 |     await demoprojectsignuppage.signinbuttonClick();
  16 |     
  17 | })
  18 | test('Demoproject Signup submission', async({page}) => {
  19 | test.setTimeout(60000);
  20 |     page.on('dialog', async dialog => {
  21 |         expect(dialog.type()).toBe('alert');
> 22 |         expect(dialog.message()).toBe('Sign up successful.');
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  23 |         await dialog.accept();
  24 |     })
  25 |    
  26 | 
  27 |     //const demoprojectsignuppage = new DemoProjectSignupPage(page);
  28 |     //await demoprojectsignuppage.signinbuttonClick();
  29 |     const usernamevalue= credentialsList.signupcredentials.username
  30 |     const passwordvalue= credentialsList.signupcredentials.password 
  31 |     await demoprojectsignuppage.signupFormFilling(usernamevalue,passwordvalue);
  32 |     await demoprojectsignuppage.signupFormSubmission()
  33 | })
  34 | test('DemoProject Signup Cancel',async({page})=>{
  35 |     test.setTimeout(60000);
  36 |     const demoprojectsignuppage = new DemoProjectSignupPage(page);
  37 |     const url=credentialsList.siteUrl.url
  38 |     const demoprojectgeneral= new DemoProjectGeneral(page)
  39 |     await demoprojectgeneral.goto(url);
  40 |     await demoprojectsignuppage.signinbuttonClick();
  41 |     await demoprojectsignuppage.signupFormCancel()
  42 | 
  43 | })
  44 | })
```