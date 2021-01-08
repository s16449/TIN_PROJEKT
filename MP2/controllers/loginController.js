exports.login = (req, res, next) => {
    res.render('pages/login', { navLocation: 'login' });
}