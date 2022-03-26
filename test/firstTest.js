const assert = require('chai').assert;
const first = require('../first.js');

describe('My first test suit', function (){
    it('first should return hello world', function () {
        assert.equal(first(), 'hello world')
    } )
});