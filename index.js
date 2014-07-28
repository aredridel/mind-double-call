module.exports = function mindDoubleCalls(cb) {
    var calls = 0;
    var stack;
    return function () {
        if (calls++) {
           console.warn("double call at ", (new Error()).stack, 'prior was', stack);
        } else {
            stack = (new Error()).stack;
        }
        return cb.apply(this, arguments);
    };
};
