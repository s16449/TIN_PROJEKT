exports.showPatientList = (req, res, next) =>
{
    res.render('pages/patients/patient-list', {navLocation: "pat"});
}

exports.showPatientForm = (req, res, next) =>
{
    res.render('pages/patients/patient-form', {navLocation: "pat"});
}


exports.showPatientDetails = (req, res, next) =>
{
    res.render('pages/patients/patient-details', {navLocation: "pat"});
}