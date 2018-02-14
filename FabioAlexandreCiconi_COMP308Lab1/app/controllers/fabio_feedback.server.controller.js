exports.save = function (req, res) {
    console.log("username in session: ");
    res.render('thankyou', {
        title: 'THANK YOU!!!!!!',
        params: req.body
    });
};
exports.render = function (req, res) {

    var session = req.session;

    //store username in session object
    var username = session.username;

    if (username) {
        res.render('fabio_feedback', {
            title: 'Feedback page',
            username: username
        });
    }
    else {
        res.redirect('/');
    }
    console.log("GET request - User name = " + session.username);
};
