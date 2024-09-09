import { test, expect } from '@playwright/test';
import exp from 'constants';

test('User session persists after page reload', async ({ page }) => {
  let user = 'user@example.com';
  let pass = '123';
  let url = 'http://localhost:3000';
  let urlLogin = `${url}/login`;
  await page.goto(urlLogin);

  // Expect a title "to contain" a substring.
  await expect(page.locator('h2')).toHaveText(/Login/);
  await page.getByPlaceholder('Email').fill(user);
  await page.getByPlaceholder('Password').fill(pass);
  await page.getByRole('button', { name: 'Login' }).click();


  //check that the login is fine

  await expect(page.locator('h1')).toHaveText('Proyecto Web Básico');

  // Reload page
  await page.reload();

  // Check that the sesion remains
  await expect(page).toHaveURL(`${url}/user-panel`);
  await expect(page.locator('h1')).toHaveText('Proyecto Web Básico');

});
