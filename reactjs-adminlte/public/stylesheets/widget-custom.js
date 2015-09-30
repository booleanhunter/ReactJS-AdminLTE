/*Global vars declaration*/
var startTimestamp = new Date("October 13, 2014 11:13:00");
var endTimestamp = new Date("October 13, 2014 11:13:00");
var interval=0, intervalStr=''; //set deafult to 30 mins
var format = d3.time.format("%Y-%m-%d %X");





function setDivision(inter,interStr){
  interval=inter;
  intervalStr= interStr;
}


// to toggle the shortcut dropdown in responsive sidebar 
$(document).ready(function () {
        $('li a.tree-toggler').click(function () { // li.tree-toggler
            $(this).parent().children('ul.tree').toggle(300); 
        });
        $('div #intervalSetter li a').click(function(){
            $(this).parent().parent().children().removeClass("pressed");
            $(this).parent().parent().children().addClass("change");
            $(this).parent().removeClass("change");
            $(this).parent().addClass("pressed");
        });

        $('#lineChartElement').addEmptyAxes();
        $('#barGraphElement').addEmptyAxes();
        // toggle button for responsive sidebar
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    });

//function to add empty graph axes to an element
//used as $('#my_div').addEmptyAxes();
//return this; --> makes it chainable
(function( $ ){
   $.fn.addEmptyAxes = function() {
      var emptyAxes = c3.generate({
          data: {
              columns: [
                  ['data1', null, null,null,null,null,null]
              ]
          },
          legend:{
              show: false
          }
      });
      this.empty();
      this.append(emptyAxes.element);
      return this;
   }; 
})( jQuery );

//custom function ends


function updateTimeCustom(milisecs, idOfFieldToRead, idOfFieldToUpdate){
    
     // alert($('#'+idOfFieldToRead).datetimepicker('getDate'));
      var enteredDate = $('#'+idOfFieldToRead).datetimepicker('getDate');
      //alert(Date.parse(enteredDate)+milisecs);
      updateDate = new Date(Date.parse(enteredDate)+milisecs);
      $('#'+idOfFieldToUpdate).datetimepicker('setDate', updateDate);
      
  }
  
  $(function() {
    /*
    $('#todaystarttimepicker').timepicker();
    $('#todayendtimepicker').timepicker();
    $('#yeststarttimepicker').timepicker();
    $('#yestendtimepicker').timepicker();
    $('#otherstartdatetimepicker').datetimepicker();
    $('#otherenddatetimepicker').datetimepicker();
    */
    
    $('.pickDateTime').datetimepicker({
      changeMonth: true,
      changeYear: true
    });
    $(":input#otherstartdatetimepicker").trigger('change');
    $('#otherstartdatetimepicker').change(function(){
      //alert('new date entered');
      if(!$(this).hasClass("changeDayCount"))
      updateTimeCustom(0, 'otherstartdatetimepicker', 'otherenddatetimepicker');

    });
    /*
    $('#otherstartdatetimepicker').datetimepicker({
      altField: "#otherenddatetimepicker",
      altFieldTimeOnly: false
    });
    $('#otherenddatetimepicker').datetimepicker();
    */
  });
  
  
   function generateDataOther(){
    $("div.btn-group.bootstrap-select.show-tick").addClass("open");
    newLegend = $("div#legend");
    newLegend.empty();
    $('#lineChartElement').addEmptyAxes(); 
    $('#barGraphElement').addEmptyAxes();
    if(intervalStr == "" && interval == 0)
    {
      alert("Please select a time interval");
      return;
    }
    if(($('#otherstartdatetimepicker').val()) == "")
    {
      alert("Please select start time and end time");
      return;
    }
    minStart=(new Date($('#otherstartdatetimepicker').val())).getTime();
    maxStart=(new Date($('#otherenddatetimepicker').val())).getTime();
     
	if(maxStart <= minStart)
	{
		alert("End instant must be greater than Start instant. Please re-enter");
		return;
	}
    //alert(minStart + ' ' + maxStart);
    readJsonFile();
   }

  
  function clearGraph() //clear the graph 
  {
    $("div.graph_container").find("svg#visualisation").children("path").remove();
	$("div.graph_container").find("svg#visualisation").children("circle").remove();
	$("div.graph_container").find("svg#visualisation").children("line").remove();
  }

  
  function addTagname(allowedTags)  // add tag names to the dropdown selector
  {
	//$("select.selectpicker").children("optgroup#tagname").remove();
	//$("select.selectpicker").append("<optgroup label='tags'>");
	//$("div.dropdown-menu.open").children("ul.dropdown-menu.inner.selectpicker").append('<li class="dropdown-header" data-original-index="null"><span class="text">tags</span></li>');
	//var inneroption = $("div.dropdown-menu.open").children("ul.dropdown-menu.inner.selectpicker"); // finding the option values of inner tags

    // the tags must be included in 2 places :
    //1. In option tag under select tag 
    //2. In li tag under ul.dropdown-menu.inner tag (Note: these tags appear after the page gets loaded)
		var option=$("select.selectpicker option").first();
		var inneroption = $("ul.dropdown-menu.inner.selectpicker li").first();
		var inneroptioncount = $("ul.dropdown-menu.inner.selectpicker li");

   for(i=0;i<inneroptioncount.length;i++)
	{

			option.text(String(allowedTags[i]));
			option=option.next();
			inneroption.find("span.text").text(String(allowedTags[i]));
			inneroption=inneroption.next();

	}

	for(i=inneroptioncount.length;i<allowedTags.length;i++)
	{
		$("select.selectpicker").children("optgroup").append("<option>"+allowedTags[i]+"</option>"); 
   		var inneroption = $("div.dropdown-menu.open").children("ul.dropdown-menu.inner.selectpicker");
		  inneroption.append('<li data-original-index='+ i + '>' + 
					'<a tabindex="0" class="opt " data-optgroup="1" data-normalized-text="<span class=&quot;text&quot;>' + allowedTags[i] + '</span>"><span class="text">' + allowedTags[i] + '</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
	
	}

	$("select.selectpicker").append("</optgroup>"); 
  }

// fetch the legend of c3 line graph and place it in svg tag under div#legend tag
function replaceLegend()
{
  //detach c3 legend
  var oldLegend = $("div#lineChartElement div.c3 svg").children("g").last().children("g").detach();

  //append the legend to svg tag under div#legend tag
  

  d3.select('div#legend').append('svg').attr('height',oldLegend.length * 18 + 10);
  newLegend = $("div#legend").children("svg");
  newLegend.empty();
  oldLegend.appendTo(newLegend);
  newLegend.children("g").first().remove();

  //remove the c3 legend
  $("div#lineChartElement div.c3 svg").children("g").last().replaceWith("<g></g>");

  // when a tag in the legend is clicked this function gets called
  $(document).ready(function(){
    //add a class "isFaded" to the tags which are disabled in the legend
  $("div#legend").children("svg").children("g").click(function(){
    unTickedTags = [];
    oldClass = $(this).attr("class");
    if((oldClass.indexOf("isFaded")) == -1 )
    {
      $(this).css({"opacity": 0.2});
      $(this).attr("class",oldClass + " isFaded");
    }
    else
    {
      $(this).css({"opacity": 1});
      oldClass = oldClass.replace(" isFaded","");
      $(this).attr("class",oldClass);
    }

    // redraw the bar graph (the bar graph doesn't contain the tag which has been disabled by the user)
    unTicked = $("div#legend").children("svg").children("g").first();
    unTickedLength = $("div#legend").children("svg").children("g");
    for(i=0;i<unTickedLength.length;i++)
    {
      classes = unTicked.attr("class");
      if(classes.indexOf("isFaded") == -1)
        unTickedTags.push(unTicked.text());

      unTicked = unTicked.next();
    }
    
    print_barGraph(unTickedTags);
    
});
});
}


  // readJsonFile function sends a request to database and reads the returned json object

    json = [];
    timeIntervalArray = []; // time array in milliseconds
    timeIntervalArrayInTimeFormat = []; // time array in (yyyy/mm/dd h:m) format (not changed)
    timeIntervalArrayforXAxis = []; // time array in (yyyy/mm/dd h:m) format (this is changed to required format)
    function readJsonFile() 
    {
    
        json = (function () {                                               // sends a request to server and gets a json object
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'Real1day.json',
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();

    
        allowedTags=[];
        allowedTags=(Object.keys(json));                                  // fetch all the tags from json object
        
        

    
        $("div.sidebar_container").css({"display":"block"});                    // display the dropdown for selecting tags
        addTagname(allowedTags);
   
        for(key in json)
        {
            valuesObject = json[key].values;
            for(valueIndex in valuesObject)
            {
                
                time=new Date(valuesObject[valueIndex].time).getTime() ;
                if(timeIntervalArray.indexOf(time) == -1)
                {
                    // contains time in milliseconds
                    timeIntervalArray.push(time);
                    // contains time in yyyy/mm/dd h:m format                            
                    timeIntervalArrayInTimeFormat.push(String((valuesObject[valueIndex].time)).replace("T"," "));
                  
                }
            }
        }

        
    }


    //print_graph function prints line graph

    function print_graph(data_selected)
    { 
        colorPattern = [];
        colHue=0;
        tagScoreAvg = [];
        tuples = [];
        //timeIntervalArray.sort(function(a,b){ return a-b ; });

        // sort timeIntervalArray array 
        for (var key in timeIntervalArray)
        { 
            tuples.push([key, timeIntervalArray[key]]);
            
        }
                tuples.sort(function(a, b) {
                    a = a[1];
                    b = b[1];

                    return a < b ? -1 : (a > b ? 1 : 0);
                });

                // sort timeIntervalArrayInTimeFormat array
                dupArray = [];
                for (var i = 0; i < tuples.length; i++) {
                        dupArray[i] = timeIntervalArrayInTimeFormat[Number(tuples[i][0])];
                        timeIntervalArray[i] = tuples[i][1];
                }
                timeIntervalArrayInTimeFormat = dupArray;

        // copy timeIntervalArrayInTimeFormat array to timeIntervalArrayforXAxis array
        timeIntervalArrayforXAxis = timeIntervalArrayInTimeFormat.slice(0); 

        startTime = (new Date(minStart)); // start time in date format
        endTime = (new Date(maxStart)); // end time in date format
        

        // if selected time interval is 1day or 1week, only date (not time) is shown on x axis

        if(interval == "1day" || interval == "1week")
        {

            if(startTime.getFullYear() != endTime.getFullYear())
            {
                for(i in timeIntervalArrayInTimeFormat)
                {

                    timeIntervalArrayforXAxis[i] = String(timeIntervalArrayInTimeFormat[i].split(" ")[0]);
                }
            }

            else
            {
                for(i in timeIntervalArray)
                {
                    year = String(timeIntervalArrayInTimeFormat[i].split(" ")[0]);
                    timeIntervalArrayforXAxis[i] = String(year.split("-")[1] + "-" + year.split("-")[2]);
                }
                
            }

        }
        

        // if date, month and year of start time is equal to end time then print only time (hh:mm) on x axis
        else if((startTime.getDate() == endTime.getDate()) && (startTime.getMonth() == endTime.getMonth()) && (startTime.getFullYear() == endTime.getFullYear()))
        {
            
            for(i in timeIntervalArray)
            {
                time = String(timeIntervalArrayInTimeFormat[i].split(" ")[1]);
                timeIntervalArrayforXAxis[i] = String(time.split(":")[0] + ":" + time.split(":")[1]);
            }
            
        }
        
        // if date, month of start time is not equal to end time and if year is the same then print date (mm:dd) along with time (hh:mm) on x axis
        else if(((startTime.getDate() != endTime.getDate()) || (startTime.getMonth() != endTime.getMonth()) ) && (startTime.getFullYear() == endTime.getFullYear()) )
        {
            
            for(i in timeIntervalArray)
            {
                year = String(timeIntervalArrayInTimeFormat[i].split(" ")[0]);
                time = String(timeIntervalArrayInTimeFormat[i].split(" ")[1]);
                timeIntervalArrayforXAxis[i] = String(year.split("-")[1] + "-" + year.split("-")[2] + " " + time.split(":")[0] + ":" + time.split(":")[1]);
            }
            
        }

        //if year is not the same then print both date and time on x axis
        else if(startTime.getFullYear() != endTime.getFullYear())
        {
            
            for(i in timeIntervalArray)
            {
                year = String(timeIntervalArrayInTimeFormat[i].split(" ")[0]);
                time = String(timeIntervalArrayInTimeFormat[i].split(" ")[1]);
                timeIntervalArrayforXAxis[i] = String(year + " " + time.split(":")[0] + ":" + time.split(":")[1]);
                

            }
            
        }

        
        // for each selected tag (selected tags is a set of tags selected by user) 
        for(tagIndex in data_selected)
        {
            //set the colourPattern array which is used to give different colors to different lines in line chart
            colHue = colHue+137.5;
            if(colHue>360) 
                colHue=-360+colHue;
            colorPattern.push("hsl(" + colHue + ","+40+(colHue/60)+"%,50%)");
            

            valuesObject = json[String(data_selected[tagIndex])].values;
            //for values of each selected tag
            for(valueIndex in valuesObject)
            {
                if(tagScoreAvg[tagIndex] == "" || tagScoreAvg[tagIndex] == undefined || tagScoreAvg[tagIndex] == null)
                {
                    //fill tagScoreAvg[tagIndex] with null (this is necessary to draw the line chart)
                    tagScoreAvg[tagIndex] = Array.apply(null, Array(timeIntervalArray.length)).map(String.prototype.valueOf,'null');
                    //fill the first position of tagScoreAvg array with the name of the tag
                    tagScoreAvg[tagIndex][0] = [String(data_selected[tagIndex])];
                    
                }
                //fill tagScoreAvg array with the y axis values(sentiment values) to be plotted
                position = timeIntervalArray.indexOf(new Date(valuesObject[valueIndex].time).getTime()) + 1;
                tagScoreAvg[tagIndex][position] = valuesObject[valueIndex].scoreAvg;
            }
        }
            
            // c3 function to generate line chart
            var lineChart = c3.generate({
                data: {
                    // pass the y axis values (tagScoreAvg) to plot line chart
                    columns:                                    
                        tagScoreAvg
                ,
               // onclick: function (d, element) { console.log("onclick", d, element); },
               // onmouseover: function (d) { console.log("onmouseover", d); },
               // onmouseout: function (d) { console.log("onmouseout", d); },
                },
                // pass colorPattern array which contains different color codes for different line graphs
               color: 
                        colorPattern
                 ,
                 // if a point doesn't have a value then connect the previous point to the next point
                line: {
                    connectNull: true
                },
                // to customize x and y axes
                axis: {
                     y: {
                      label: 'Sentiment value',
                         tick: {
                            values: [-10,-5,0,5,10]
                            }
                        },
                     
                     x: {
                        show: true,
                        type: 'category',
                        categories: timeIntervalArrayforXAxis,
                        label: 'Time intervals',
                        tick: {
                            
                          
                            culling: {
                                max: 8 // the number of x axis tick texts will be adjusted to less than this value
                                },
                                
                            }

                        }
                },

                // configure the legend
                legend: {
                        position: 'inset',
                         inset: {
                            anchor: 'bottom-left',
                            x: 5,
                            y: 50,
                          },
                          show: true
                     },

                 // configure the tooltip    
                tooltip: {
                        format: {
                            title: function (d) { return timeIntervalArrayInTimeFormat[d]; },
                            
                //            value: d3.format(',') // apply this format to both y and y2
                        }
                    }
        });
            // place the graph in a div element which has lineChartElement as its id
            $("#lineChartElement").empty();
            $("#lineChartElement").append(lineChart.element);
        
    }


    // disable popup of piechart when 'close' button is pressed
                function disablePopup()
                {
          
                     $('.popupModal').toggleClass('active');
          
                }
                
                function disablePopupConvo()
                {
                       $('.popupModalConvo').toggleClass('active');
                }

          // prints bargraph
          function print_barGraph(selectedTags)
          {
              
              allowedTags=[];
              xAxisTickerLabels=[];
              i=0; 
              
              xAxisTickerLabels[0]='x';
              sentimentCategoryCountArray = [];
              sentimentCategoryCountArray["VP"]=[];
              sentimentCategoryCountArray["P"]=[];
              sentimentCategoryCountArray["VNe"]=[];
              sentimentCategoryCountArray["Ne"]=[];
              sentimentCategoryCountArray["N"]=[];

              /*This works, but is a transpose*/
              indexToTag = [];
              k=0;
              // store the sentiment category count of all categories in sentimentCategoryCountArray array
              for (key in selectedTags)
              {
                  
                      indexToTag[k++] = selectedTags[key];
                         
                      if(sentimentCategoryCountArray["VP"]=="" || sentimentCategoryCountArray["VP"]==undefined || sentimentCategoryCountArray["VP"]==null){
                         
                          sentimentCategoryCountArray["VP"]=["VP"];
                          sentimentCategoryCountArray["P"]=["P"];
                          sentimentCategoryCountArray["VNe"]=["VNe"];
                          sentimentCategoryCountArray["Ne"]=["Ne"];
                          sentimentCategoryCountArray["N"]=["N"]
                      }
                      
                              sentimentCategoryCountArray["VP"].push(json[selectedTags[key]].overallCategoryCount.VP);
                              sentimentCategoryCountArray["P"].push(json[selectedTags[key]].overallCategoryCount.P);
                              sentimentCategoryCountArray["VNe"].push(json[selectedTags[key]].overallCategoryCount.VNe);
                              sentimentCategoryCountArray["Ne"].push(json[selectedTags[key]].overallCategoryCount.Ne);
                              sentimentCategoryCountArray["N"].push(json[selectedTags[key]].overallCategoryCount.N);
                      
                  
                  
              }

              // used to display names of tags on x axis
              xAxisTickerLabels=xAxisTickerLabels.concat(indexToTag);

              // print bargraph
              var barGraph = c3.generate({
              // pass sentimentCategoryCountArray array which contains sentiment category count of all categories
              data: {
                  
                  x: 'x',
                  columns: [
                  xAxisTickerLabels,
                  sentimentCategoryCountArray["VP"],
                  sentimentCategoryCountArray["P"],
                  sentimentCategoryCountArray["N"],
                  sentimentCategoryCountArray["Ne"],
                  sentimentCategoryCountArray["VNe"]
              
                  ],
                  order: null,
                  type: 'bar',
                   groups: [
                 ['VP', 'P', 'VNe', 'Ne']
              ],
          //onclick: function (d, element) {  console.log("onclick"+ d+ element); },

          // when a bar graph is clicked the corresponding pie chart pops up
          onclick: function (d, i) { 
              tag = indexToTag[String(d['x'])];
              $('.popupModal').toggleClass('active');
              modal = document.getElementById("donut_frame");
              // send the tag name and data associated with the tag in the url for chart_donut.html page separated by $ symbol
              data = "";
              data = tag + "$";
              data += sentimentCategoryCountArray["VP"][0] + "," + sentimentCategoryCountArray["VP"][d['x']+1] +"$";
              data += sentimentCategoryCountArray["P"][0] + "," + sentimentCategoryCountArray["P"][d['x']+1] +"$";
              data += sentimentCategoryCountArray["VNe"][0] + "," + sentimentCategoryCountArray["VNe"][d['x']+1] +"$";
              data += sentimentCategoryCountArray["Ne"][0] + "," + sentimentCategoryCountArray["Ne"][d['x']+1] +"$";
              data += sentimentCategoryCountArray["N"][0] + "," + sentimentCategoryCountArray["N"][d['x']+1] +"$";
              // load chart_donut.html page - this opens a popup and displays a pie chart
              modal.innerHTML = '<iframe src="chart_donut.html?tag=' + data + '" style="border:none; width:500px; height:350px;"></iframe>';              
          }
      },
      color: {
              pattern: ['#009E63', '#98C888', '#FFFF9D', '#FF6A40', '#ED2238']
      },
      // configure axes
      axis: {
          x: {
              type: 'category'
          }
      },
      // configure the grid
      grid: {
          y: {
              lines: [{value:0}]
          }
      },
     id: "a" ,
  });

  // display the graph in a div which has barGraphElement as its id
  $("#barGraphElement").empty();
  $("#barGraphElement").append(barGraph.element);

  // for animation
  setTimeout(function () {
      barGraph.groups([['VP', 'P', 'VNe', 'Ne', 'N']])
  }, 1000);
  
  }