exports.addNewVisit = (req, res, next) => {
    res.render('pages/add-new-visit', { navLocation: 'login' });
}