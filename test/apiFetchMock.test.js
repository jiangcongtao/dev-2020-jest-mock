const fetch = require("node-fetch");
const { getPost, useFoo } = require("../src/apiFetch");
// Note: foo is used by 'useFoo', not by code in test, to mock it, it must be imported here
//       and configure the its implementation or return values per the test objective
const { foo } = require("../src/libFoo");

// This mock the whole 'node-fetch' module
jest.mock("node-fetch"); // mock an external npm module
jest.mock("../src/libFoo"); // mock own module

/**
 * Note: to use jest to test asynchronous functions:
 *  1. Callback:  (done), call done in test code call back
 *  2. Promise: return promise in test code 
 */


test("getPost - Should get the mocked posts", () => {
    const resp = {
        json: () => {
            return { data: 1 };
        },
    };
    // This mock the return value of 'fetch' asynchronous function from 'node-fetch'
    // fetch.mockResolvedValue(resp); // OK

    // or
    fetch.mockImplementation(() => Promise.resolve(resp)); // OK

    return getPost().then((json) => expect(json).toEqual({ data: 1 }));
});

test("useFoo - Should get the mocked foo", () => {
    foo.mockImplementation(() => {
        return "hello";
    }); // OK
    expect(useFoo()).toEqual("hello");
});

test("other - Mock function for multiple calls having different return values", () => {
    const myMockFn = jest
        .fn()
        .mockImplementationOnce((cb) => cb(null, true))
        .mockImplementationOnce((cb) => cb(null, false));

    const mockCallback = jest.fn();

    // First call
    myMockFn(mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(1);
    // The mock function was called at least once with the specified args
    expect(mockCallback).toHaveBeenCalledWith(null, true);

    // Second call
    myMockFn(mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(null, false);

    expect(mockCallback.mock.calls.length).toBe(2);

});

test("other2 - Mock function for multiple calls having different return values", () => {
    const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    const mockCallback = jest.fn();

    expect([myMockFn(), myMockFn(), myMockFn(), myMockFn()]).toEqual(['first call', 'second call', 'default', 'default'])

});