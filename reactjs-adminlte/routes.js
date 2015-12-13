function initialize(app){

	//These are the API end points that you can write.

	//Setting up an event listener for GET request to '/' 
	app.get('/', function(req, res){ 
		console.log('request to / received');
        res.render('dashboard.html');		
	});

    app.get('/starter.html', function(req, res){
        res.render('starter.html');
    });

    app.get('/index.html', function(req, res){
        res.render('index.html');
    });

    app.get('/index2.html', function(req, res){
        res.render('index2.html');
    });

    app.get('/widgets.html', function(req, res){
        res.render('widgets.html');
    });

    app.get('/buttons.html', function(req, res){
        res.render('buttons.html');
    });

}

exports.initialize = initialize;