
name = "";
function drawBellCurveGraph(bellCurveData)
{
    
    selectedCategories = Object.keys(previousSelectionCategory);
    selectedCategory = selectedCategories[selectedCategories.length - 1];
    overallMean = bellCurveData.overall.mean;
    overallStdDev = bellCurveData.overall.stdev;
    
    
    for(key in bellCurveData)
    {
        if(key == "overall")
            continue;
        name = key;
        indMean = bellCurveData[key].mean;
        indStdDev = bellCurveData[key].stdev;
    }
    
    
    
    var averageData = [];
    var categoryData = [];
    xAvgValues = [];
    xIndValues = [];
    yAvgValues = [];
    yIndValues = [];
    getData(); // popuate data 
    //getCategoryData();
    // line chart based on http://bl.ocks.org/mbostock/3883245
    divWidth = Number($("div.bellCurveGraph").width());
    divHeight = Number($("div.bellCurveGraph").height());
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    },
    width = divWidth - margin.left - margin.right,
    height = divHeight - margin.top - margin.bottom;

    var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) {
        return x(d.x);
    })
    .y(function(d) {
        return y(d.y);
    });

var svg = d3.select("div#bellCurveElement").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class","masterTooltip")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    maxXAvg = Math.max.apply(null, xAvgValues);
    maxXInd = Math.max.apply(null, xIndValues);
    maxYAvg = Math.max.apply(null, yAvgValues);
    maxYInd = Math.max.apply(null, yIndValues);

    minXAvg = Math.min.apply(null, xAvgValues);
    minXInd = Math.min.apply(null, xIndValues);
    minYAvg = Math.min.apply(null, yAvgValues);
    minYInd = Math.min.apply(null, yIndValues);

    
    
    
    
    
    
    
    

    maxX = 0;
    maxY = 0;
    minX = 0;
    minY = 0;
    if(maxXAvg > maxXInd)
        maxX = maxXAvg;
    else
        maxX = maxXInd;

    if(maxYAvg > maxYInd)
        maxY = maxYAvg;
    else
        maxY = maxYInd;

    if(minXAvg < minXInd)
        minX = minXAvg;
    else
        minX = minXInd;

    if(minYAvg < minYInd)
        minY = minYAvg;
    else
        minY = minYInd;

    
    
    
    

    x.domain([minX,maxX]);
    y.domain([minY,maxY]);

/*
x.domain(d3.extent(averageData, function(d) {
    return d.x;
}));
y.domain(d3.extent(averageData, function(d) {
    return d.y;
}));
*/
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);


svg.append("path")
    .datum(averageData)
    .attr("class", "lineOverall")
    .style("stroke-dasharray", ("3, 3"))
    .attr("d", line);
/*
x.domain(d3.extent(categoryData, function(d) {
    return d.x;
}));
y.domain(d3.extent(categoryData, function(d) {
    return d.y;
}));
*/


svg.append("path")
    .datum(categoryData)
    .attr("class", "lineIndividual")
    .attr('stroke-width', function(d) { return 0.5; })
    .attr("d", line);
/*
var lineData = [ { "x": 50,   "y": 1000},  { "x": 0.5,  "y": 0}];

var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");

svg.append("path")
  .attr('d', lineFunction(lineData))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
*/

/*
svg.append("line")          // attach a line
    .style("stroke", "steelblue")  // colour the line
    .attr("x1", 100)     // x position of the first end of the line
    .attr("y1", 50)      // y position of the first end of the line
    .attr("x2", 300)     // x position of the second end of the line
    .attr("y2", 150);    // y position of the second end of the line
    */
function getData() {

// loop to populate data array with 
// probabily - quantile pairs
for (var i = 0; i < 1000; i++) {
    xAxisValue = normal() // calc random draw from normal dist
    xA = xAxisValue*overallStdDev + overallMean;
    yAxisAverageValue = gaussianData(xA,overallMean,overallStdDev) // calc prob of rand draw
    xI = xAxisValue*indStdDev + indMean;
    yAxisIndValue = gaussianData(xI,indMean,indStdDev) // calc prob of rand draw
    el1 = {
        "x": xA,
        "y": yAxisAverageValue
    }
    el2 = {
        "x": xI,
        "y": yAxisIndValue
    }
    xAvgValues.push(xA);
    xIndValues.push(xI);
    yAvgValues.push(yAxisAverageValue);
    yIndValues.push(yAxisIndValue);
    averageData.push(el1);
    categoryData.push(el2);
};

// need to sort for plotting
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
averageData.sort(function(x, y) {
    return x.x - y.x;
}); 


categoryData.sort(function(x, y) {
    return x.x - y.x;
}); 
}

// from http://bl.ocks.org/mbostock/4349187
// Sample from a normal distribution with mean 0, stddev 1.
function normal() {
    var x = 0,
        y = 0,
        rds, c;
    do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        rds = x * x + y * y;
    } while (rds == 0 || rds > 1);
    c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
    return x * c; // throw away extra sample y * c
}

//taken from Jason Davies science library
// https://github.com/jasondavies/science.js/
function gaussianData(x,meanDev,StdDev) {
    var gaussianConstant = 1 / Math.sqrt(2 * Math.PI),
        mean = meanDev,
        sigma = StdDev;

    x = (x - mean) / sigma;
    return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
};
overallLegendList = '<li class="line" id="overall">';
overallLegendList += '<a style="display: inline; color:white; text-decoration:none; "> ✔ </a>';
overallLegendList += '<div class="swatch" style="background-color:steelblue; "> </div>';
overallLegendList += '<span class="label" id="overall">Overall : <br>Mean sentiment value : ' + overallMean.toFixed(5) + '<br>Standard deviation : ' + overallStdDev.toFixed(5) + '</span>';
overallLegendList += '</li>';

$("div.legend").children("ul").append(overallLegendList);
                                         
individualLegendList = '<li class="line" id="individual">';
individualLegendList += '<a style="display: inline; color:white; text-decoration:none; "> ✔ </a>';
individualLegendList += '<div class="swatch" style="background-color:red; "> </div>';
individualLegendList += '<span class="label" id="overall">' + selectedCategory + ' - ' + name + ' <br>mean sentiment value : ' + indMean.toFixed(5) + '<br>Standard deviation : ' + indStdDev.toFixed(5) + '</span>';
individualLegendList += '</li>';
                                        
$("div.legend").children("ul").append(individualLegendList);                                        

                                    
$("div#bellCurveElement").children("svg").on("mouseover",function(){
$("div.legend").show();

});

$("div#bellCurveElement").children("svg").on("mouseout",function(){
    $("div.legend").hide();

});

$("div.legend").on("mouseover",function(){
    $("div.legend").show();
});

$("div.legend").find("li#overall").click(function(){
    $(this).children("a").toggle();
    $("path.lineOverall").toggle();

});

$("div.legend").find("li#individual").click(function(){
    $(this).children("a").toggle();
    $("path.lineIndividual").toggle();

});
}