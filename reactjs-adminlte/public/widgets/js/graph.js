// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
d3.csv("/js/test_data.csv", function(data) {
  var dataset = data.map(function(partyDetail) {
    return {Party: partyDetail["Party"], 'no_of_seats': + partyDetail['no_of_seats'] }
  });  

  var w = 1500;
  var h = 300;
  var barPadding = 1;

  var svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);


  svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("x", 0)
     .attr("y", 0)
     .attr("width", 25)
     .attr("height", 100) //for 1 bar to be displayed
     .attr("x", function(partyDetail, i) {
      //return  10;
      return i * 1000 / dataset.length; 
  }) //for maintaining a minimum distance between the 2 bars that is displayed

    //.attr("width", w / dataset.length - barPadding)

     .attr("height", function(partyDetail) {
      return partyDetail['no_of_seats'] * 6;
  }) //for returning the value of the dataset and altering the height of the bars in the bar chart accordingly! and we multiply the value of d, 4 times so that the bars are more prominantly
     //visible

     .attr("y", function(partyDetail) {
      return h - partyDetail['no_of_seats'] * 6;  //to display the graph upright, by shifting the origin
  })

  .attr("fill", "teal") //attribute defined to fill in colors in the bar

  .attr("fill", function(partyDetail) {
      return "rgb(0, 0, " + (partyDetail['no_of_seats'] * 10) + ")";
  }); //changing the color of each bar depending upon the data in the dataset

  // var tip = d3.tip()
  // .attr('class', 'd3-tip')
  // .offset([-10, 0])
  // .html(function(d) {
  //   return "<strong>Party: </strong> <span style='color:red'>" + d.Party + "</span><br>"+
  // "<strong>Number of seats: </strong> <span style='color:steelblue'>" + d.no_of_seats + "%</span>";
  // });
  // svg.call(tip);

  // svg.selectAll("text")
  //    .data(dataset)
  //    .enter()
  //    .append("text")
  //     .text(function(d) {
  //         return d.no_of_seats;
  //    })

  //     .attr("x", function(d, i) {
  //         return d['Party']
  //         //return i * (w / dataset.length);
  //    })
  //    .attr("y", function(d) {
  //     console.log(d);
  //         return d['no_of_seats'];
  //    }) //for displaying the number from the dataset on each bar of the bar graph

  // //     .attr("x", function(d, i) {
  // //         return i * (w / dataset.length) + 5;  
  // //    })
  //    .attr("y", function(d) {
  //         return h - (d['no_of_seats'] * 5) + 10;              
  //    }) //for shifting the numbering in the center of each bar of the bar chart

  //     .attr("font-family", "sans-serif")
  //    .attr("font-size", "10px")
  //    .attr("fill", "white") //for giving a font to the number set and giving a font color to make it more visible

  //    .attr("text-anchor", "middle")
  //    .attr("x", function(d, i) {
  //         return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
  //     })
  //     // .attr("y", function(d) {
  //     //     return h - (d * 4) + 14; 
  //     // });//to allign the text in each bar of the bar graph in the center
});

