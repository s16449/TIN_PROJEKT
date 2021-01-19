exports.showDoctorList = (req, res, next) =>
{
    res.render('pages/doctors/doctor-list', {navLocation: "doc"});
}

exports.showDoctorForm = (req, res, next) =>
{
    res.render('pages/doctors/doctor-form', {navLocation: "doc"});
}


exports.showDoctorDetails = (req, res, next) =>
{
    res.render('pages/doctors/doctor-details', {navLocation: "doc"});
}