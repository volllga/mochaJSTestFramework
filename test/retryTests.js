//1. Addition
//2. Subtraction
//3. Multiplication
//4. Division
var assert = require('assert');
describe('Mathematical Operations - Retry', function (){

    this.retries(4);

    let a = 10;
    let b = 10;

    it('Addition of two numbers', function () {

        let c = a + b;

        assert.equal(c, 20);

    });

    it('Subtraction of two numbers Faild', function () {

        this.retries(2);    //If your test case fail than it will re-execute
                            // the same test case again until the max no of retries reached or test case get passed.
                            // Once your test case get passed it will jump to the next test case.
        let c = a - b;

        assert.equal(c, 1);
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
