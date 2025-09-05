import test, { page, expect } from '@playwright/test'

// test('Assersation demo', async ({ page }) => {
//     await page.goto('https://kitchen.applitools.com/')
//     await page.pause()
//     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
// })

test('Login demo', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByRole('textbox', { name: 'Enter your username' }).click();
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Vaibhav');
    await page.getByRole('textbox', { name: 'Enter your password' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('Gupta');
    await page.getByRole('link', { name: 'Sign in' }).click();


})