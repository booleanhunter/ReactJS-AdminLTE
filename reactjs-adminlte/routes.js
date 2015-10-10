function initialize(app){

	//These are the API end points that you can write.

	//Setting up an event listener for GET request to '/' 
	app.get('/', function(req, res){ 
		console.log('request to / received');
        res.render('dashboard.html');		
	});

    app.get('/index.html', function(req, res){
        res.render('index.html');
    });

    app.get('/index2.html', function(req, res){
        res.render('index2.html');
    });

    app.get('/graph.html', function(req, res){
        res.render('graph.html');
    });
}

exports.initialize = initialize;