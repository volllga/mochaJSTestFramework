const chai = require('chai');

//expect
const expect = chai.expect;

//should BDD style
const should = chai.should();

//assert - TDD style
const assert = chai.assert; //no chaining expressions possible

//expect API examples
let a=1, b=1;
expect(a).to.be.equals(b, " a and b are not equal");
a.should.be.equals(b);
assert.equal(a,b, ' a and b are not equal')

//object/string/boolean
function MyObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

y = new MyObj(); x = new MyObj();
console.log(x);
console.log(y);
expect(x).to.be.an('object');
//expect(x).to.be.equals(y, 'object x not equal to object y');


//to compare objects we have use deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'object x not equal to object y');
x.should.to.be.deep.equals(y, 'object x not equal to object y');
assert.deepEqual(x,y, 'object x not equal to object y');

//chaining expression
//x is an object and x equals y
//keywords: and, with, but ...
expect(x).to.be.an('object').and.to.be.deep.equals(y);
x.should.to.be.an('object').and.to.be.deep.equals(y);

//arrays
let numbers = [2,  45, 65, 21, 4];
expect(numbers).to.be.an('array').that.includes(45);
numbers.should.to.be.an('array').that.includes(45);
assert.isArray(numbers, 'numbers is not an array');



