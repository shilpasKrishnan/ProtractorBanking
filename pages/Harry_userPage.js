
var userPage = function(){

    var acctno = element(by.model('accountNo'))
    var transaction = element(by.buttonText('Transactions'))
    var deposit = element(by.buttonText('Deposit'))
    var withdrawl = element(by.buttonText('Withdrawl'))
   
    this.acctnumvalidation = function(a,b,c){
        acctno.click()
        
       var acctno1004 =  element(by.cssContainingText('option', a)).click();{
           var dollar = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/strong[3]'))
            expect(dollar.getText()).toEqual("Dollar")
       }
       var acctno1005 =  element(by.cssContainingText('option', b)).click();{
        var pound = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/strong[3]'))
        expect(pound.getText()).toEqual("Pound")
        
       }
       var acctno1006 =  element(by.cssContainingText('option', c)).click();{
        var Rupee = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/strong[3]'))
        expect(Rupee.getText()).toEqual("Rupee")
        
       }
    }


    this.transButton = function(){
        transaction.click()
        return require('./TransactionsPage');
    }

    this.depositButton = function(){
        deposit.click()
        
        return require ('./DepositPage');

    }

    this.withdrawlButton = function(){
        withdrawl.click()
        return require('./WithdrawlPage');
    }


}
module.exports = new userPage();