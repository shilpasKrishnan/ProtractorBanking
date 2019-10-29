//let winston = require('winston');

var depositSuccess = function(){
   var msg = element(by.xpath("//span[@class='error ng-binding']"))
   var transButton = element(by.xpath("//button[contains(text(),'Transactions')]"))
    /*this.msgDisplay = function(){

        browser.sleep(3000)
   expect(msg.getText()).toBe('Deposit Successful')
    //logger.("Deposit successfully done")
    }*/
    this.msgDisplay = function(){
        console.log("Entered deposit success page")
        expect(msg.getText()).toEqual("Deposit Successful");
         browser.sleep(2000)
        return this;
         
        }
    this.clickTrans = function(){
        transButton.click();
        return require("./TransactionsPage")

    }
}
module.exports = new depositSuccess()