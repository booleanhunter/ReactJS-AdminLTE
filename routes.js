function initialize(app) {
  app.get('/login', (req, res) => {
    res.render('login.html');
  });
  app.get('/', (req, res) => {
    res.render('index.html');
  });
}

exports.initialize = initialize;
