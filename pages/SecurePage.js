class SecurePage {
    constructor(page){
this.page = page;
this.flashAlert = page.locator('#flash');

    }
    async getSuccessMessage(){
        return await this.flashAlert.textContent();
    }
}
module.exports = {SecurePage};