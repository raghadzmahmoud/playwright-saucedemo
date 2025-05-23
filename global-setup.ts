import { chromium, FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL!);
  await page.fill('[data-test="username"]', process.env.SAUCE_USERNAME!);
  await page.fill('[data-test="password"]', process.env.SAUCE_PASSWORD!);
  await page.click('[data-test="login-button"]');
  await page.waitForURL('**/inventory.html');
  await page.context().storageState({ path: 'storage/loginState.json' });
  await browser.close();
}

export default globalSetup;
