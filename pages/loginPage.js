//import { element } from "protractor";

var login = function(){
    var custlogin  =  element(by.buttonText('Customer Login'))
    var bank_manager_login = element(by.buttonText('Bank Manager Login'));

    this.custbtn = function(){
        custlogin.click();
        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/banking/#/customer")
        return require('./customerPage.js')
       
    };

    this.bnkmgrbtn = function(){
        bank_manager_login.click()
        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/banking/#/manager")
        return require('./ManagerPage.js')
        
    }
}
module.exports = new login()
