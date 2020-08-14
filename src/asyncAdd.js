const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject('Numbers must be non-negative')
            } else {
                resolve(a + b);
            }
        }, 4000);
    });
};

module.exports = { add }