var trnsFail = function(){

    var errormsg = element(by.xpath("//span[@class='error ng-binding']"))
    var transButton = element(by.xpath("//button[contains(text(),'Transactions')]"))

    this.errmsg = function(message){
        expect(errormsg.getText()).toBe(message)
        return require("./WithdrawlPage")
    }

    this.clickTransaction = function(){
        transButton.click();
        return require("./TransactionsPage")

    }
    
}
module.exports = new trnsFail();