function sendTask(e) {
  MailApp.sendEmail('taka1991feb@icloud.com','タスクが追加されました',e.namedValues['Task']);
}

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  
  template.title = 'MyTaskApp';
  template.tasks = getTasks();
  
//  return HtmlService.createHtmlOutput('<h1>My Task</h1>');
  return template.evaluate();
}

function getTasks(){
  var sheet = SpreadsheetApp.getActiveSheet();
  return sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
}

function sendReport(){
  var to = 'taka1991feb@icloud.com';
  var subject = 'タスク一覧';
  var url = 'https://script.google.com/macros/s/AKfycbyLT8tE5x77n1Sj2tt2rMZv0sqqWF21MfCBjdgT2TrikJyw9Zg/exec';
  var body = getTasks().join('\n') + '\n\n' + url;
  
  MailApp.sendEmail(to, subject, body);
}
