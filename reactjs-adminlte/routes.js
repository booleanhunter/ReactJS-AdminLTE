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

	//Setting up an event listener for GET request to '/aditi/feed' 
	app.get('/aditi/feed', function(req, res){
		console.log('request to /aditi/feed received');

		var feedData = [{  
            "post_date":"Jun 20",
            "post_id":"post_01",
            "display_name":"greg",
            "location_name": "Mumbai",
            "channel_name": "Arts",
            "post_content":"xyz abc def",
            "upvotes":1,
            id: 0
        },
        {  
            "post_date":"Jun 20",
            "post_id":"post_02",
            "display_name":"ash",
            "location_name": "Mumbai",
            "channel_name": "Music",
            "post_content":"xyz abc def",
            "upvotes":2,
            id: 15
        },
        {  
            "post_date":"Jun 19",
            "post_id":"post_03",
            "display_name":"adi",
            "location_name": "Bangalore",
            "channel_name": "Lifestyle",
            "post_content":"xyz abc def",
            "upvotes":3,
            id: -1
        }];

        //This will send response back to client and will send in JSON format
        res.json({ 
        	feed: feedData
        }); //You can also use res.send
	});

	//setting up event listener for POST requests to /settings/password/save
	app.post('/settings/password/save', function(req, res){
		console.log('request to /settings/password/save');

		var oldPassword = '12345', message;
        console.log(req.body);
        console.log('server pw is '+ oldPassword);
		if(req.body.password === oldPassword){
			message = 'Password correct';
		}else{
			message = 'Passwords do not match';
		}
		res.json({
			message: message
		});
	})
}

exports.initialize = initialize;