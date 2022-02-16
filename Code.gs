function doGet(e){
    return HtmlService.createHtmlOutputFromFile('formPage');
}

function AddRecord(name, contact, email, qualification, course, question){
    var url = ''; //your Google Sheet Link
    var ss =SpreadsheetApp.openByUrl(url);
    var webAppSheet = SpreadsheetApp.getActiveSheet();
    webAppSheet.appendRow([name, contact, email, qualification, course, question, new Date()]);

}