# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoprojectlogin.spec.js >> Login Suite >> Login using Invalid Username and Invalid Password
- Location: tests\demoprojectlogin.spec.js:67:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | export class DemoProjectLoginPage{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.loginButton=page.locator('#login2')
  5  |         this.loginUsername=page.locator('#loginusername')
  6  |         this.loginPassword=page.locator('#loginpassword')
  7  |         this.loginButton=page.locator("//button[@onclick='logIn()']")
  8  |     }
  9  |     async login(usernameValue,passwordValue){
  10 |         await this.page.locator('#login2').click()
> 11 |         await this.loginUsername.fill(usernameValue)
     |                                  ^ Error: locator.fill: Target page, context or browser has been closed
  12 |         await this.loginPassword.fill(passwordValue)
  13 |         await this.loginButton.click()
  14 |     }
  15 | 
  16 | }
```