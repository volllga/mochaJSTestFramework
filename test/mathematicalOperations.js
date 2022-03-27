//1. Addition
//2. Subtraction
//3. Multiplication
//4. Division
var assert = require('assert');
describe('Mathematical Operations - Test Suite', function (){

    let a = 10;
    let b = 10;

    it('Addition of two numbers', function () {

        let c = a + b;

        assert.equal(c, 20);

    });

    it('Subtraction of two numbers', function () {

        let c = a - b;

        assert.equal(c, 0);
    });

    it('Multiplication of two numbers', function () {

        let c = a * b;

        assert.equal(c, 100);
    });

    it('Division of two numbers', function () {

        let c = a / b;

        assert.equal(c, 1);
    });
});
