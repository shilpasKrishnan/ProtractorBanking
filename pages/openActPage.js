
var OpenAct = function(){
    var Userdd = element(by.xpath("//select[@id='userSelect']"))
    var Currency = element(by.xpath("//select[@name='currency']"))
    var process = element(by.buttonText("Process"))

    
        this.openAccountDetails=function(name,cur,msg){
            
                if(name=='Hermoine Granger'){
                    Userdd.$('[value="1"]').click();
                }
                if(name=='Harry Potter'){
                    Userdd.$('[value="2"]').click();
                }
                if(name=='Ron Weasly'){
                    Userdd.$('[value="3"]').click();
                }
                if(name=='Albus Dumbledore'){
                    Userdd.$('[value="4"]').click();
                }
                if(name=='Neville Longbottom'){
                    Userdd.$('[value="5"]').click();
                }
                browser.sleep(2000)
               // Currency.click()
                if(cur=='Dollar'){
                    Currency.$('[value="Dollar"]').click();
                }
                if(cur=='Pound'){
                    Currency.$('[value="Pound"]').click();
                }
                if(cur=='Rupee'){
                    Currency.$('[value="Rupee"]').click();
                }
            browser.sleep(3000);
            process.click();
            browser.sleep(2000);
            var alert=browser.switchTo().alert();
            expect(alert.getText()).toContain(msg);
            alert.accept();
        
        
    }

}
module.exports = new OpenAct()