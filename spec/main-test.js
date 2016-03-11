
describe('Main Task: print lcd', function() {
  var main = require('../main/main');
  var input;
  var output;

  beforeEach(function () {

    input = '110';

    output =
      '... ... ._.\n' +
      '..| ..| |.|\n' +
      '..| ..| |_|';

  });

  it('should print correct number by char', function () {
    spyOn(console, 'log');

    main.printLDCStr(input);
    expect(console.log).toHaveBeenCalledWith(output);

  });
});
describe('Task 1: split number', function() {
  var main = require('../main/main');
  var input;
  var output;

  beforeEach(function () {

    input = '910';

    output = ['9','1','0'];

  });

  it('should get a split array', function () {
    var result = main.splitNumber(input);
    expect(result).toEqual(output);
  });

});

describe('Task 2: get char list from dictionary', function() {

  var main = require('../main/main');
  var fixture = require('../main/fixtures.js');
  var compare;
  var numberarray;
  var dictionary;

  beforeEach(function () {

    dictionary = fixture.loadDictionary();
    numberarray = ['9','1','0'];
    compare = [['._.','|_|','..|'],['...','..|','..|'],['._.','|.|','|_|']]
  });

  it('should get a split array', function () {
    var result = main.getElement(numberarray,dictionary);
    expect(result).toEqual(compare);
  });

});

describe('Task 3: print number with char', function() {

  var main = require('../main/main');
  var output;
  var charNumbers;

  beforeEach(function () {

    output =
      '._. ... ._.\n' +
      '|_| ..| |.|\n' +
      '..| ..| |_|';
    charNumbers = [['._.','|_|','..|'],['...','..|','..|'],['._.','|.|','|_|']]
  });

  it('should get a split array', function () {
    spyOn(console, 'log');
    main.printCharNumbers(charNumbers);
    expect(console.log).toHaveBeenCalledWith(output);
  });

});
