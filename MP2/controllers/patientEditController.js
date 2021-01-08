exports.edit = (req, res, next) => {
    res.render('pages/patient-edit', { navLocation: 'login' });
}