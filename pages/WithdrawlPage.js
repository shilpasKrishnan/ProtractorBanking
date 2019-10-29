
var withdraw = function(){

    var amounttoWd = element(by.xpath("//input[@placeholder='amount']"))
    var wdSubmit = element(by.xpath("//button[@type='submit']"))
    var transBtn = element(by.buttonText('Transactions'))

    this.amtwithdraw = function(amount){
        amounttoWd.sendKeys(amount)
    }
    
    this.WdsubmitBtn = function(){
        wdSubmit.click()
        return require('./TransactionFailPage')
    }

    this.transButton = function(){
        transBtn.click()
        return require('./TransactionsPage')
    }

}
module.exports = new withdraw()