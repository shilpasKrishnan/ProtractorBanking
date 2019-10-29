let winston = require('winston');
let XLSX = require('xlsx');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: './reports/winstonBasicLog.log', level: 'info' }),
    ]
  });


  // this will give logs into console
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));

var exceldata = require('./data_driven_spec')
var login = require('./pages/loginPage')
var Manager = require('./pages/ManagerPage')
var data = require('./Data/data.json')
describe("Banking Manager Testcases",function(){
    it("Login Page",function(){
        console.log("testcase")
        var url = exceldata.readdata('A1');
        browser.get(url)
        logger.info("launching the url")
    })

    it("Manager Login",function(){
        var loginmr = login.bnkmgrbtn()
        logger.info("Manager button is clicked")

     })

     it("Add Customer",function(){
         var addCust = Manager.addCustBtn()
         logger.info("Add Customer Button is Clicked")
        addCust.FirstName(exceldata.readdata('A2'))
        logger.info("First name added")
        browser.sleep(3000)
        addCust.LastName(exceldata.readdata('A3'))
        browser.sleep(3000)
        logger.info("Last name added")
        addCust.Postcode(exceldata.readdata('A4'))
        browser.sleep(3000)
        logger.info("Post Code added")
        addCust.addCustomerBtn()
        browser.sleep(3000)
       

     })

     it("To Open Account for Dollar",function(){
         var opnAcct = Manager.openActBtn()
         logger.info("Open Account Button is clicked")
         opnAcct.openAccountDetails(data.Name1,data.Currency1,data.Msg1)


     })

     it("To Open Account for Pound",function(){
        var opnAcct = Manager.openActBtn()
        logger.info("Open Account Button is clicked")
        opnAcct.openAccountDetails(data.Name2,data.Currency2,data.Msg1)


    })

    it("To Open Account for Rupees",function(){
        var opnAcct = Manager.openActBtn()
        logger.info("Open Account Button is clicked")
        opnAcct.openAccountDetails(data.Name3,data.Currency3,data.Msg1)


    })

    it("Delete customer",function(){
        var delCust = Manager.customersBtn()
        logger.info("Iside Customers Page")
        delCust.searchSendKeys(data.delCustName)
        browser.sleep(2000)
        logger.info("Customer details found")
        delCust.DeleteCustomer()





    })
    



})
