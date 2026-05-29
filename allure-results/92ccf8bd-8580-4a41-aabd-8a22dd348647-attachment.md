# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoprojectsignup.spec.js >> Demoproject Signup submission
- Location: tests\demoprojectsignup.spec.js:6:5

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
  3  | const credentialsList = require('../utils/demoprojecttestdata.json');
  4  | 
  5  | 
  6  | test('Demoproject Signup submission', async({page}) => {
  7  | const demoprojectsignuppage = new DemoProjectSignupPage(page);
  8  | test.setTimeout(60000);
  9  |     page.on('dialog', async dialog => {
  10 |         expect(dialog.type()).toBe('alert');
> 11 |         expect(dialog.message()).toBe('Sign up successful.');
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  12 |         await dialog.accept();
  13 |     })
  14 |     await demoprojectsignuppage.goto();
  15 |     await demoprojectsignuppage.signinbuttonClick();
  16 |     const usernamevalue= credentialsList.signupcredentials.username
  17 |     const passwordvalue= credentialsList.signupcredentials.password 
  18 |     await demoprojectsignuppage.signupFormFilling(usernamevalue,passwordvalue);
  19 |     await demoprojectsignuppage.signupFormSubmission()
  20 | })
  21 | test('DemoProject Signup Cancel',async({page})=>{
  22 |     test.setTimeout(60000);
  23 |     const demoprojectsignuppage = new DemoProjectSignupPage(page);
  24 |     await demoprojectsignuppage.goto();
  25 |     await demoprojectsignuppage.signinbuttonClick();
  26 |     await demoprojectsignuppage.signupFormCancel()
  27 | 
  28 | })
```