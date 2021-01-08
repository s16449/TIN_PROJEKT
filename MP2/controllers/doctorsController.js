const DoctorRepository = require('../repository/sequelize/DoctorRepository');
const PatientRepository = require('../repository/sequelize/PatientRepository');
exports.showDoctorsList = (req, res, next) => {
    DoctorRepository.getDoctors()
        .then(doctors => {
            res.render('pages/doctors', {
                doctors: doctors,
                navLocation: 'docs'
            });
        });

}



// exports.AddPatientForm = (req, res, next) => {
//     res.render('pages/register-new-patient', { navLocation: 'regNewPat' });
// }
exports.showDocDetails = (req, res, next) => {
    res.render('pages/doc-details', { navLocation: 'docs' });
}








