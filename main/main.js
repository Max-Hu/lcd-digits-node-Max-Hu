"use strict";
function splitNumber(numberStr){
  return numberStr.split('');
}

function getElement(numberArray,dictionary){
  let charNumbers = [];
  numberArray.forEach(function(element){
    charNumbers.push(dictionary[parseInt(element)]);
  });
  return charNumbers;
}

function printCharNumbers(charNumbers){
  let outputChar = '';
  for (let i = 0; i < 3; i++){
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
  let fixture = require('../main/fixtures.js');
  let numberArr = splitNumber(input);
  let charArr = getElement(numberArr,fixture.loadDictionary());
  printCharNumbers(charArr);
}

exports.printLDCStr = printLDCStr;
exports.splitNumber = splitNumber;
exports.getElement = getElement;
exports.printCharNumbers = printCharNumbers;
