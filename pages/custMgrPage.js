
var Customer_mgr = function(){
    var search = element(by.model("searchCustomer"))
    var DeleteCust = element(by.xpath("//button[@ng-click='deleteCust(cust)']"))
    this.searchSendKeys = function(name){
        search.sendKeys(name)

    }

    this.DeleteCustomer = function(){
        DeleteCust.click()
    }


}
module.exports = new Customer_mgr()