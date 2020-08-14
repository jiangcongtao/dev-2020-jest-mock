// test("[WRONG WAY]Asynchronous code test demo [should fail but pass]", () => {
//     setTimeout(() => {
//         expect(1).toBe(2);
//     }, 15000);
// });

test("[CORRECT WAY]Asynchronous code test demo", (done) => {
    setTimeout(() => {
        // expect(1).toBe(2);
        expect(1).toBe(1);
        done(); // call done() to notify jest that asychronous call is completed
    }, 1000);
});