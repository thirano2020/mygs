//function GETRESULT(input){
//  if(input.map){
//    return input.map(GETRESULT);
//  }else{
//    return input >= 80 ? 'PASS':'FAIL';
//  }
////  if(input >= 80)
////  {
////    return 'pass';
////  }
////  else
////  {
////     return 'fail';
////  }
//}

function initsheet(){
 var sheet = SpreadsheetApp.getActiveSheet();
 var names = ['tabuti','tanuma','murasaki'];
 var i;
 var startTime = new Date();
 var scores = [];
  
// if (Browser.msgBox('シートの初期化', '実行していいですか？', Browser.Buttons.OK_CANCEL) === 'cancel'){
//    return;
// }

 sheet.clear();
  
// 1635.0ms
// for (i = 1;i <= 100; i++){
//    sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
//    sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101));
//  }
  
//  183.0ms
  for (i = 1;i <= 10; i++){
    scores.push([
      names[Math.floor(Math.random() * names.length)],
      Math.floor(Math.random() * 101)
      ])
  }
    
  sheet.getRange(1, 1, 10, 2).setValues(scores);
  
//  sheet.getRange(1, 1).setValue('hajime');
//  sheet.getRange(1, 2).setValue(58).setBackground('tomato');
  Logger.log(new Date - startTime)
}

function showResults(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var scores = [];
  var i;
  var results = [];
    
  scores = sheet.getRange(1, 2, sheet.getLastRow(), 1).getValues();
  
  for (i = 0; i < scores.length; i++){
    results.push([scores[i] >= 80 ? 'PASS':'FAIL']);
  }
//  sheet.getRange(1, 3, results.length, 1).setValue"s"(results);
  sheet.getRange(1, 3, results.length, 1).setValues(results);  
}
  
function onOpen(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var items = [
    {name:'初期化', functionName:'initsheet'},
    null,
    {name:'判定', functionName:'showResults'}
  ];
  
  spreadsheet.addMenu('スコア管理', items);
}
