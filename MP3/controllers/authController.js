const doctorRepository = require('../repository/sequelize/DoctorRepository');


const authUtil = require('../util/authUtils');

exports.showPage = (req, res, next) => {
    res.render('pages/login/login-form', {
        navLocation: 'login',
       
    });
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    doctorRepository.findByEmail(email)
        .then(doc => {
            if(!doc) {
                res.render('pages/login/login-form', {
                    navLocation: 'login',
                    formAction: '/login/login',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            } else if(authUtil.comparePasswords(password, doc.password) === true) {
                req.session.loggedUser = doc;
                res.redirect('/');
            } else {
                res.render('pages/login/login-form', {
                    navLocation: 'login',
                    formAction: '/login/login',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            }
        })
        .catch(err => {
            console.log(err);

        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}

