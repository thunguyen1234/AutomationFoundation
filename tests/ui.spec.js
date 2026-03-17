const {test, expect} = require('@playwright/test');

// test('my first UI test', async({page}) => {
//     console.log('1. open browser and navigate to the web')
// await page.goto('https://example.com');
// console.log('2. verify the page title')
// await expect(page).toHaveTitle('Example Domain')
// console.log('3. test passed, page loaded successfully! ')
// })

// test('UI test 2 - Logging into a website ', async ({page}) =>{
//     console.log('1. navigate to the login page...');
//     await page.goto('https://the-internet.herokuapp.com/login');
//     console.log('2. filling in the username..')
//     // # find by id
//     await page.locator('#username').fill('tomsmith')
//     console.log('3. filling in the password..')
//     await page.locator('#password').fill('SuperSecretPassword!')
//     console.log('4. clicking login button..')
//     //getByRole
//     await page.getByRole('button', {name: 'Login'}).click();
//     console.log('5. verify the success message appear...');
//     await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
// })
//npx playwright codegen https://the-internet.herokuapp.com/login
test('test 3', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});