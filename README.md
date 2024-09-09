# vgf
unit, integration and E2E tests
## Intro

This is a ultra-minimal-guide on how to use the E2E tests to ensure that the project is working correctly.

We are using https://jestjs.io/ to implement unit test, https://playwright.dev/  and https://docs.cypress.io/ to implement E2E tests, the goal is ensure that the most used/common use-cases are working correctly.

## Run App

```bash
npm install
```

```bash
npm start
```

## Cypress project

### run cypress
```bash
cd cypress
npx cypress open
```

## Playwright
### run playwright headless mode
```bash
cd playwright
npx playwright test
````

### run playwright headed mode
```bash
cd playwright
npx playwright test --headed
````
