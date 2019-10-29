let XLSX = require('xlsx');

var exdata = function(){

    this.readdata = function(index){
        
        var workbook = XLSX.readFile('./Data/ExcelData.xlsx');
        var sheetName = workbook.SheetNames[0];
        var worksheet1 = workbook.Sheets[sheetName];
        var cellA1 = worksheet1[index];
        var cellValue = cellA1.v;

        console.log('Demo data from Excel ' + cellValue);

        return cellValue;
    };
    
};
module.exports = new exdata()
