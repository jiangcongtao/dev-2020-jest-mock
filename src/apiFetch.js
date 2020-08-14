const fetch = require("node-fetch");
const { foo } = require("./libFoo")

function getPost() {
    return fetch("https://httpbin.org/post", {
            method: "post",
            body: JSON.stringify({ a: 1 }),
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((json) => json);
}

function useFoo() {
    return foo("Hello Foo");
}

module.exports = { getPost, useFoo }