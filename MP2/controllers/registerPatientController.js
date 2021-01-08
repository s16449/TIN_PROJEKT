exports.registerNewPatient = (req, res, next) => {
    res.render('pages/register-new-patient', { navLocation: 'login' });
}