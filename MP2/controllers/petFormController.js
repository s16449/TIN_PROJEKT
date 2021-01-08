exports.AddPetForm = (req, res, next) => {
    res.render('pages/pet-form', { navLocation: 'login'});
}