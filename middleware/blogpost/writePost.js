module.exports = function (req, res, next) {
    res.locals.template = "post/create";
    return next();
};
