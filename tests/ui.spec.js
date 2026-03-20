const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const {SecurePage} = require('../pages/SecurePage');
const invalidUsersData = require('../data/invalidUsers.json');

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
// test('test 3', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();
// });
// test('test 4: handle a dropdown menu', async ({ page }) => {
//   console.log('1. navigate to the dropdown page...');
//   await page.goto('https://the-internet.herokuapp.com/dropdown');
// console.log('2. select option 2 from the dropdown...');
// await page.locator('#dropdown').selectOption({label:'Option 2'});
// console.log('3. verify option 2 is selected...');
// await expect(page.locator('#dropdown')).toHaveValue('2');
// console.log('4. dropdown test passed! ')
// });
// test('test 5: handle a checkbox', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/checkboxes');
//   const checkbox1 = page.getByRole('checkbox').first();
//   const checkbox2 = page.getByRole('checkbox').nth(1);
//   console.log('1. check the first checkbox...');
//   await checkbox1.check();
//   console.log('2. verify the first checkbox is checked...');
//   await expect(checkbox1).toBeChecked();
//   console.log('3. uncheck the second checkbox...');
//   await checkbox2.uncheck();
//   console.log('4. verify the second checkbox is unchecked...');
//   await expect(checkbox2).not.toBeChecked();
//   console.log('5. checkbox test passed! ')

// });
// test('test 6: handle a new tab', async ({ page, context }) => {
//   //page as a single browser tab, and context as a whole browser windown that hold all the tabs.
//   await page.goto('https://the-internet.herokuapp.com/windows');
//   console.log('1.set a new trap for the new page... ');
//   const newPagePromise = context.waitForEvent('page');
//   console.log('2. click the link to open a new tab... ');
//   await page.getByRole('link', { name: 'Click Here' }).click();
//   console.log('3. catch the new tab... ');
//   const newPage = await newPagePromise;
//   console.log('4. wait for the new page to fully load... ');
//   await newPage.waitForLoadState();
//   console.log('5. verify the new page title... ');
//   await expect(newPage).toHaveTitle('New Window');
//   console.log('new tab test passed!');
// });
// test('level 3: strick POM with multiple pages', async ({ page }) => {
//   console.log('1. navigate to the login page...');
//   await page.goto('https://the-internet.herokuapp.com/login');
// const loginPage = new LoginPage(page);
// const securePage = new SecurePage(page);
// console.log('2. perform the login...');
// await loginPage.login('tomsmith', 'SuperSecretPassword!');
// console.log('3. verify the success message appear...');
// const successMessage = await securePage.getSuccessMessage();
// expect(successMessage).toContain('You logged into a secure area!');
// });
//we group all tests into one describe block
// test.describe('login page scenario', () => {
//   //declare the waiter before all tests, so all tests can see him.
//   let loginPage;
//   let securePage;
//   // this run automatically before each test.
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/login');
//      loginPage = new LoginPage(page);
//      securePage = new SecurePage(page);
//   });
//   //test 1
//   test('successful login', async ({ page }) => {
//       await loginPage.login('tomsmith', 'SuperSecretPassword!');
//   })
//   //test 2
//   test('failed login with wrong password', async ({ page }) => {
//     await loginPage.login('tomsmith', 'wrongpassword');
//     expect(await loginPage.getErrorMessage()).toContain('Your password is invalid!');
//   })
// })
//
test.describe('Data-Driven login scenario from JSON file', () => {
  let loginPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
     loginPage = new LoginPage(page);
  });
  //loop through the imported JSON data
  for(const user of invalidUsersData){
    test(`failed login for username: ${user.username}`, async ({ page }) => {
      await loginPage.login(user.username, user.password);
      expect(await loginPage.flashMessage()).toContain(user.expectedError);
    });
  }
});