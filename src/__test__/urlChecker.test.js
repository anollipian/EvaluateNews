// Import the js file to test
import { urlSubmit } from "../src/client/js/urlChecker"


// In each test file, the general flow of the test block should be:

//     Import the js file to test
//     Define the input for the function. Note that, to keep it simple, we will not validate the input being provided to the test cases.
//     Define the expected output
//     Check if the function produces the expected output


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the url submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the urlSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(urlSubmit).toBeDefined();
})});