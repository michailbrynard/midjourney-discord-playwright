import { test } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/discordUser.json'
});

// Can also import this from a json file
const prompts = ['A woman architect']

for (let prompt of prompts) {
  test(`Midjourney Imagine ${prompt}`, async ({ page }) => {
    await page.goto('https://discord.com/app');
    // Next line is sometimes needed if discord has announcements
    //await page.getByRole('button', { name: 'Close' }).click();
    await page.goto('https://discord.com/channels/@me');
    await page.getByRole('treeitem', { name: 'Direct Messages' }).locator('path').click();
    await page.getByRole('link', { name: 'Midjourney Bot (direct message)' }).click();
    await page.getByRole('textbox', { name: 'Message @Midjourney Bot' }).waitFor();
    await page.getByRole('textbox', { name: 'Message @Midjourney Bot' }).type('/imagine');
    await page.getByRole('option', { name: '/imagine prompt Create images with Midjourney' }).getByText('prompt').waitFor();
    await page.getByRole('textbox', { name: 'Message @Midjourney Bot' }).press('Enter');
    await page.getByRole('textbox', { name: 'Message @Midjourney Bot' }).getByText('prompt').waitFor();
    await page.getByRole('textbox', { name: 'Message @Midjourney Bot' }).type(`${prompt}, cyberpunk, hyper realistic, profile picture, splash color background, post atomic style`);
    await page.getByRole('textbox', { name: 'Message @Midjourney Bot' }).press('Enter');
    const re = new RegExp(`Midjourney Bot Verified Bot BOT , ${prompt.slice(0,-2)}`,'i');
    await page.getByRole('article', { name: re}).waitFor();
    await page.getByRole('article', { name: re}).getByRole('button', { name: 'U1'}).click();
    await page.getByRole('article', { name: re}).getByRole('button', { name: 'U2'}).click();
    await page.getByRole('article', { name: re}).getByRole('button', { name: 'U3'}).click();
    await page.getByRole('article', { name: re}).getByRole('button', { name: 'U4'}).click();
    //1 minute timeout
    await page.waitForTimeout(1000*60);
  });
}