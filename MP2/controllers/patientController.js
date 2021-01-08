exports.showMe = (req, res, next) => {
    res.render('pages/patient', { navLocation: 'patient'});
}