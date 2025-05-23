import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Feature', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(); 
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);
    await expect(page).toHaveURL(/inventory/);
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await loginPage.login('wrong', 'wrong');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
