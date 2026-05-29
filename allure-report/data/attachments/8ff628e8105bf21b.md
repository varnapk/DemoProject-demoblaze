# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoprojectlogin.spec.js >> Login Suite >> Login using Invalid Username and Valid Password
- Location: tests\demoprojectlogin.spec.js:29:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1 | export class DemoProjectGeneral {
  2 |   constructor(page) {
  3 |     this.page = page;
  4 |     this.url='https://www.demoblaze.com/'
  5 |   }
  6 |   async goto(url) {
> 7 |     await this.page.goto(this.url);
    |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  8 |   }
  9 | }
```