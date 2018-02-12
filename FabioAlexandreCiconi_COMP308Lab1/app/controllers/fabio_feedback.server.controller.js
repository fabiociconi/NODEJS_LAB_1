
exports.showThanks = function (req, res) {


    //make a reference to the session object
    //var session = req.session;
    //store the username in session object
    //session.username = req.body.username;
    console.log("username in session: ");
    res.redirect('/thankyou');
    //res.end('done');


};