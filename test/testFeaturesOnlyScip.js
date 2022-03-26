//1. Addition
//2. Subtraction
//3. Multiplication
//4. Division
var assert = require('assert');
describe('Only and Scip', function (){

    // it.only('Only this test case is executed 1', function () {
    //     let a = 10;
    //     let b = 10;
    //
    //     let c = a + b;
    //
    //     assert.equal(c, 20);
    // });

    it.skip('Subtraction of two numbers', function () {
        let a = 10;
        let b = 10;

        let c = a - b;

        assert.equal(c, 0);
    });

    // it.only('Only this test case is executed 2', function () {
    //     let a = 10;
    //     let b = 10;
    //
    //     let c = a * b;
    //
    //     assert.equal(c, 100);
    // });

    it('Division of two numbers', function () {
        let a = 10;
        let b = 10;

        let c = a / b;

        assert.equal(c, 1);
    });

    it('This is a test for pending Test Feature');
});
