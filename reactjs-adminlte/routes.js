function initialize(app) {
	// These are the API end points that you can write.
	// Setting up an event listener for GET request to '/'
  app.get('/', (req, res) => {
    console.log('request to / received');
    res.render('dashboard.html');
  });

  app.get('/starter.html', (req, res) => {
    res.render('starter.html');
  });

  app.get('/index.html', (req, res) => {
    res.render('index.html');
  });

  app.get('/index2.html', (req, res) => {
    res.render('index2.html');
  });

  app.get('/widgets.html', (req, res) => {
    res.render('widgets.html');
  });

  app.get('/buttons.html', (req, res) => {
    res.render('buttons.html');
  });

  app.get('/UI/general.html', (req, res) => {
    res.render('general.html');
  });

  app.get('/timeline.html', (req, res) => {
    res.render('timeline.html');
  });
}

exports.initialize = initialize;
