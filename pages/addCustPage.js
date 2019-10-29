//import { element, by } from "protractor";
//import { Module } from "module";

var addCustomer = function(){

    var Fname = element(by.xpath("//input[@placeholder='First Name']"))
    var Lname = element(by.xpath("//input[@placeholder='Last Name']"))
    var Pcode = element(by.xpath("//input[@placeholder='Post Code']"))
    var addcustBtn =  element(by.xpath("//button[@type='submit']"))

    this.FirstName = function(fname){
        Fname.sendKeys(fname)
    }

    this.LastName = function(lname){
        Lname.sendKeys(lname)
    }

    this.Postcode = function(pcode){
        Pcode.sendKeys(pcode)
    }

    this.addCustomerBtn = function(){
        addcustBtn.click()

        browser.switchTo().alert().accept();
          
        
    }









}
module.exports = new addCustomer()