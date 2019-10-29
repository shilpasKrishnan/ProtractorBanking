

var customer = function(){
    var cust = element(by.model('custId'))
   // var item = element.all(by.repeater('cust in Customers').row(index))
    this.cust_name_dd = function(index){
       
      cust.click();
     var item = element.all(by.repeater('cust in Customers').row(index)).click()
     browser.sleep(2000);
     return
    }

    this.loginClick = function(){
        element(by.buttonText('Login')).click();
        return  require('./Harry_userPage.js');
    }


      
      
 };

    

module.exports = new customer();