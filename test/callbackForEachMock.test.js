const { forEach } = require("../src/callbackForEach");

test("foEach - Mock function callback", () => {
    // Using a mock function
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});

test("foEach - Mock function return value", () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter((num) => filterTestFn(num));

    expect(result).toStrictEqual([11]);

    // The mock function is called twice
    expect(filterTestFn.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(filterTestFn.mock.calls[0][0]).toBe(11);

    // The first argument of the second call to the function was 1
    expect(filterTestFn.mock.calls[1][0]).toBe(12);
});