/** * @jest-environment jsdom */
//import { fillData } from "../src/client/js/urlChecker"
const fillData = require('../client/js/urlChecker')

describe("Testing the url submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the fillData() function", () => {
           expect(fillData).toBeDefined();
})});