// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {add} from '../mathUtils.js'

const test = QUnit.test;


test('4 plus 5 should be 9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 4;
    const argument2 = 5;
    const expected = 9;    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(argument1 + argument2);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
