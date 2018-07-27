module.exports = {
    query: (arg1, arg2, arg3) => {
        if (typeof arg2 === "function") {
            arg3 = arg2
        }
        return arg3(null, { arg1, arg2 });
    }
}
