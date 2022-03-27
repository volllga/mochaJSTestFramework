//1. Addition
//2. Subtraction
//3. Multiplication
//4. Division
var assert = require('assert');

describe('Mathematical Operations - Timeout', function (){

    this.timeout(5000);

        let a = 10;
        let b = 10;

    it('Addition of two numbers with setTimeout', function (done) {

        setTimeout(done, 3000);

        let c = a + b;

        assert.equal(c, 20);

    });

    it('Subtraction of two numbers with setTimeout with exceed', function (done) {

        this.timeout(500);
        setTimeout(done, 3000);

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
