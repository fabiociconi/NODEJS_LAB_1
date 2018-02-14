exports.render = function (req, res) {
    res.render('index',
        {
            title: 'Login Page',
            error: false
        });
};
exports.login = function (req, res) {

    var username = req.body.username;
    var password = req.body.password;
    var session = req.session;

    //put into the session
    session.username = username;

    if (session.username) {
        console.log("In index function - User name = " + session.username);
        res.redirect("/feedback");
        return;
    }
    else {
        res.render('index',
            {
                title: 'Login Page',
                error: true,
                error_msg: 'You should type a username'
            });
    }
};