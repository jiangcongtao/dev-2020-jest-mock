const { add } = require("../src/asyncAdd");
test("asyncAdd - Negative numbers should fail", async() => {
    await expect(add(-2, 5)).rejects.toMatch("Numbers must be non-negative");
});

test("asyncAdd - Negative numbers should fail", async() => {
    expect.assertions(1);
    try {
        await add(-2, 5);
    } catch (e) {
        expect(e).toMatch("Numbers must be non-negative");
    }
});

test("asyncAdd - should add two numbers", (done) => {
    add(3, 4).then((sum) => {
        expect(sum).toBe(7);
        done();
    });
});

test("asyncAdd - should add two numbers async/await", async() => {
    const sum = await add(3, 4);
    expect(sum).toBe(7);
});

test("asyncAdd - should add two numbers async/await 2", async() => {
    await expect(add(3, 4)).resolves.toBe(7);
});