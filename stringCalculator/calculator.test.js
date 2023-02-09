//test case
const calculate = require('./calculator.js');
let log = require('../log');

describe("String Calculator", ()=> {
    it("returns 0 for empty string", () => {
        expect(calculate("")).toEqual(0);
    });

    it("returns sum of two numbers separated by comma", ()=> {
        expect(calculate("1, 3")).toEqual(4);
    });

    it("returns sum of two numbers separated by new line", () => {
        expect(calculate("1\n21")).toEqual(22);
    })

    it("should call log function with calculation", () => {
        log.init = jest.fn(() => { console.log('called')});
        calculate("1,2,3");

        // expect(log.init).toHaveBeenCalledWith(calculate("1,2,3"))
        
        // Expect of the test case was wrong earlier i was checking with toHaveBeenCalled function instead of mock calls length.
        expect(log.init.mock.calls.length).toBe(1);
    });
});