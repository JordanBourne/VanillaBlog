module.exports = function (req, res, next) {
    res.render(res.locals.template, res.locals.options);
};
