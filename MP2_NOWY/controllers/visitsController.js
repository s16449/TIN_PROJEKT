exports.showVisitList = (req, res, next) =>
{
    res.render('pages/visits/visit-list', {navLocation: "vis"});
}

exports.showVisitForm = (req, res, next) =>
{
    res.render('pages/visits/visit-form', {navLocation: "vis"});
}


exports.showVisitDetails = (req, res, next) =>
{
    res.render('pages/visits/visit-details', {navLocation: "vis"});
}