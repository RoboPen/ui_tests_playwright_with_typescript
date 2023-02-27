# Practice Playwright with Typescript

## Links
- test site https://letcode.in/test  

## Commands
- check `NodeJS` version  
`node -v`
- new project with Playwright  
`npm init playwright@latest`
- record tests for given site  
`npx playwright codegen https://letcode.in/test`
- run tests without browser GUI  
`npx playwright test`
- run tests with browser GUI  
`npx playwright test --headed`
- run specific test file
`npx playwright test file_name.ts`
- run test with the title
`npx playwright test -g "title"`
- run tests with specific tag
`npx playwright test -g "@tagname"`
- run on specific browser
`npx playwright test --project=chromium`
- view report  
`npx playwright show-report`

## Playwright Config modifications
- config file `playwright.config.ts`
- disable browsers, i.e. Firefox  
    ```javascript
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    ```
## Playwright snippets
- test:
```javascript
    test('test description', async ({ page }) => {
  
    });
  ```
- describe:
```javascript
    test.describe('group description', async ({ page }) => {
  
    });
  ```
