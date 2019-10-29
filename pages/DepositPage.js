
var depositPage = function(){

    var amount = element(by.model('amount'))
    var amtDepositBtn = element(by.xpath("//button[@type='submit']"))


    this.EnterAmount = function(amt){
        amount.sendKeys(amt);

    }

    this.sbtBtn = function(){
        browser.sleep(2000)
        amtDepositBtn.click()
        browser.sleep(2000)

        return require ('./depositSuccessPage')
    }



}
module.exports = new depositPage()