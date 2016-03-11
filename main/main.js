
function splitNumber(numberStr){
  return numberStr.split('');
}

function getElement(numberArray,dictionary){
  var charNumbers = [];
  numberArray.forEach(function(element){
    charNumbers.push(dictionary[parseInt(element)]);
  });
  return charNumbers;
}

function printCharNumbers(charNumbers){
  var outputChar = '';
  for (var i = 0; i < 3; i++){
    charNumbers.forEach(function(number,index){
      outputChar += number[i];
      if (index != charNumbers.length-1){
        outputChar += ' ';
      }else {
        outputChar += '\n';
      }
    });
  }
  console.log(outputChar.substr(0,outputChar.length-1));
}

function printLDCStr(input){
  var fixture = require('../main/fixtures.js');
  var numberArr = splitNumber(input);
  var charArr = getElement(numberArr,fixture.loadDictionary());
  printCharNumbers(charArr);
}

exports.printLDCStr = printLDCStr;
exports.splitNumber = splitNumber;
exports.getElement = getElement;
exports.printCharNumbers = printCharNumbers;
