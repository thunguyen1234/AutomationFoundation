// learning about POM pattern: page object model
// OPP: object oriented programming
//object is a pizza, so class is a recipe (a blueprint) to make a pizza. 
// /class  define how the object should behave and what tools it holds. 
//constructor:(like a waiter) is a assembly line worker who put the objects together the moment you decide to build it. 
const {BasePage} = require('../pages/BasePage');
class LoginPage extends BasePage{
    constructor(page){
        //MUST call super(page) first. this run the BasePage constructor. 
       super(page);
        // we define all the locators here. IN ONE PLACE. 
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', {name: 'Login'});
       
}
// This is an Action Method. The Waiter's specific skill.
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
  
  
}
module.exports = {LoginPage};
