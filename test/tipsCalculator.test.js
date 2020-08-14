const { calculateTip } = require("../src/tipCalculator");

test("Should calcuate total with tip", () => {
    const total = calculateTip(10, 0.4);

    if (total !== 14) {
        throw Error("Total tip should be 14. Got " + total);
    }
});

test("Should calcuate total with tip with jest expect", () => {
    const total = calculateTip(10, 0.4);
    expect(total).toBe(14);
});

test("Should calcuate total with default tip", () => {
    const total = calculateTip(10);
    expect(total).toBe(12.5);
});