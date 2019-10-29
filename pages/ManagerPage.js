var Manager = function(){

    var addCust = element(by.buttonText("Add Customer"))
    var openAct = element(by.buttonText("Open Account"))
    var customers = element(by.buttonText("Customers"))

    this.addCustBtn = function(){
        addCust.click();
        return require("./addCustPage")
    }

    this.openActBtn = function(){
        openAct.click();
        return require("./openActPage")
    }

    this.customersBtn = function(){
        customers.click();
        return require("./custMgrPage")
    }

}
module.exports = new Manager()