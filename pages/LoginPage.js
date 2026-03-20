// learning about POM pattern: page object model
// OPP: object oriented programming
//object is a pizza, so class is a recipe (a blueprint) to make a pizza. 
// /class  define how the object should behave and what tools it holds. 
//constructor:(like a waiter) is a assembly line worker who put the objects together the moment you decide to build it. 
class LoginPage{
    constructor(page){
        this.page = page; // the waiter (constructor) know which browser tab to work with.
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
    async getErrorMessage(){
        return await this.page.locator('#flash').textContent();
    };
}
module.exports = {LoginPage};
