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
var UserPage = require('./pages/Harry_userPage')
var CustomerPage = require('./pages/customerPage')
var data = require('./Data/data.json')
describe("Testcase1",function(){
    it('login page',function(){
        console.log("testcase")
        var url = exceldata.readdata('A1');
        browser.get(url)
        expect(browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        logger.info("launching the url")
    })
    it('Verify currency type',function(){

        var cust =  login.custbtn()
        logger.info("Customer Button is clicked")
        cust.cust_name_dd(data.index);
        logger.info("Harry Potter is selected")
        var user = CustomerPage.loginClick()
        //logger.info("Inside user HarryPotter page")
        user.acctnumvalidation(data.acctno1,data.acctno2,data.acctno3)
        logger.info("validation is done for account 1004,1005,1006")
        browser.sleep(3000)

    })

    it('initial Transaction',function(){
       
        var transaction = UserPage.transButton();
        logger.info("inside transaction page")
        var backbtn = transaction.backButton();
        logger.info("Returned to Harrypotter user page")

    })
     
    it('Deposit Money',function(){
        var deposit = UserPage.depositButton()
        logger.info("Deposit button is clicked")
        deposit.EnterAmount(data.amt)
        logger.info("amount entered in amount to be deposited field")
        var success = deposit.sbtBtn()
        logger.info("amount submitted")
        success.msgDisplay()
    })

    it('Transaction After Deposit',function(){
        var trandaction2 = UserPage.transButton()
        logger.info("Clicking on Transaction page")
        browser.sleep(2000)
        trandaction2.validateTracsactionAmnt("2000","Credit")
        logger.info("Amount Validated")
        var user2 = trandaction2.backButton()
        logger.info("returning to page")
    })

    it('Withdraw Error',function(){
        var withdraw = UserPage.withdrawlButton()
        logger.info("clicking on Withdrawl page")
        withdraw.amtwithdraw(data.withdrawamt)
        logger.info("Amount entered withdrawl field")
        var err = withdraw.WdsubmitBtn()
        logger.info("withdrawl button is clicked")
         err.errmsg("Transaction Failed. You can not withdraw amount more than the balance.")
        logger.info("Error msg is displayed")
    })

    it('Withdraw success',function(){
        var withdraw2 = UserPage.withdrawlButton()
        logger.info("clicking on Withdrawl page")
        withdraw2.amtwithdraw("1000")
        logger.info("valid amount entered in withdrawl field")
       var successmsg =  withdraw2.WdsubmitBtn()
       browser.sleep(3000)
       logger.info("withdrawl button is clicked")
        successmsg.errmsg("Transaction successful")
        browser.sleep(3000)
        logger.info("Transaction successful")

    })
    it('Transaction After withdraw',function(){
        var transaction3 = UserPage.transButton()
        browser.sleep(3000)
        logger.info("Transaction page is clicked")
        transaction3.validateTracsactionAmnt("1000","Debit")
   // });

    /*it('Transaction Reset',function(){
        var transaction = UserPage.transButton()
        browser.sleep(3000)
        logger.info("Transaction page is clicked")*/
        transaction3.ResetClick()


    })
});