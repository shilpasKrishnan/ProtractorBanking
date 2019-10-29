
let winston = require('winston');


 var transactionPage = function(){
    var back = element(by.buttonText('Back'))
    var amountValidation = element(by.xpath("//td[contains(text(),'2000')]"))
    var transTable=element.all(by.repeater('transactions | orderBy:sortType:sortReverse | sDate:startDate:end'));
    var transReset = element(by.buttonText("Reset"));

    this.backButton = function(){
        console.log('transaction page is empty')
    back.click()
    return require('./Harry_userPage.js')
    }

    this.amtVld = function(amount){
        if(expect(amountValidation.getText()).toBe(amount)){
            //logger.log(amount + " present ")
            console.log("Account has " + amount)
        }

    }
    this.validateTracsactionAmnt=function(amnt,type){
		browser.sleep(5000);
		transTable.then(function(text){
			var i=text.length-1;
			expect(text[i].getText()).toContain(amnt);
			expect(text[i].getText()).toContain(type);
		})
    }
    this.ResetClick = function(){
        transReset.click()
        browser.sleep(2000)
       //expect(transTable.isPresent()).toBe(false);
    }
}
module.exports = new transactionPage();