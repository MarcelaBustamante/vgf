import { test, expect } from '@playwright/test';
import exp from 'constants';

test('User session persists after page reload', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByTestId('login-title')).toHaveText(/Log in/);
  await page.fill('input[name=email]', 'user@example.com');
  await page.fill('input[name=password]', '123');
  await page.click('button[type=submit]');

  //check that the login is fine
await expect(page.getByRole("button", { name: "Log out" })).toBeVisible();

  // Reload page
  await page.reload();

  // Check that the sesion remains
  await expect(page).toHaveURL('http://localhost:3000/');
  await expect(page.locator('h1')).toHaveText('Welcome to my little app');
  await expect(page.getByRole("button", { name: "Log out" })).toBeVisible();

});
