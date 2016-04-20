function initialize(app) {
  app.get('/login', (req, res) => {
    res.render('login.html');
  });
}

exports.initialize = initialize;
