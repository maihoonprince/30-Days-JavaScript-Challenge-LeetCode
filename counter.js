var createCounter = function(n) {
    let i = -1;
    return function() {
        ++i;
        return n + i;
    };
};

console.log("Prince");