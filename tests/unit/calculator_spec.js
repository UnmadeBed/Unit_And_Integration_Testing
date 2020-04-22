var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 5);
  })

  it('it should subtract numbers', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 3);
  })

  it('it should multiply numbers', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 15);
  })

  it ('it should divide numbers', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 3);
  })

  it('it should cancatenate multiple number button clicks', function (){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 1234);
  })

  it('it should chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 9);
  })

  it('it should clear running total', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(calculator.previousTotal, 3);
    assert.equal(calculator.runningTotal, 0);

  })

});
