exports.showContact = (req, res, next) => {
    res.render('pages/contact', { navLocation: 'contact' });
}