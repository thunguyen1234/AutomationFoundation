class BasePage{
    // constructor
    constructor(page){
        this.page =page;
    }
    async flashMessage(){
        return await this.page.locator('#flash').textContent();
    }
}
module.exports = {BasePage};