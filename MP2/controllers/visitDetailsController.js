exports.showVisit = (req, res, next) => {
    res.render('pages/visit-details', { navLocation: 'login' });
}