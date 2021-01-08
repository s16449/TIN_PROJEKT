exports.showPhotos = (req, res, next) => {
    res.render('pages/pet-photos', { navLocation: 'petPhotos' });
}