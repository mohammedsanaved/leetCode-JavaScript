var createCounter = function(n) {
    let counter = n;
    return function() {
        let secondCount = counter
        counter++;
        return secondCount;

        
    };
};
