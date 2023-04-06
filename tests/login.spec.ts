import { test } from '@playwright/test';

test('test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://discord.com/login');
  await page.getByLabel('Email or Phone Number*').click();
  await page.getByLabel('Email or Phone Number*').fill(process.env.DISCORD_EMAIL as string);
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill(process.env.DISCORD_PASSWORD as string);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForURL('https://discord.com/app');
  await context.storageState({ path: 'playwright/.auth/discordUser.json' });
});