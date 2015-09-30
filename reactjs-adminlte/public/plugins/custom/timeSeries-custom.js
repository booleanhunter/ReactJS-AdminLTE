function drawTimeSeriesGraph(timeSeriesData)
{

  /*Declare some variables that'll be used*/
  //bring in the data from ext file, in a global variable; do this in the start!
  
      scoreAvg = timeSeriesData.score;
      timestamp = timeSeriesData.time;
      name = "Sentiment Value";
      scoreAvg.splice(0,0,name);
      timeArray =[];

      /* convert time form yyyy:mm:ddThh:mm:ss to required format */
      for(i in timestamp)
      {
        timeArray.push(timestamp[i].split("T")[1])
      }
      valuesArray = [];

      /* get 10 tick numbers which are spread across the length of the timestamp array*/
      if(timestamp.length < 10)
      {
        for(i=0;i<(timestamp.length);i++)
        {
        
          valuesArray.push(i);
        }
      }
      else
      {
        timestampCount = Math.floor(timestamp.length / 10) ;
        for(i=0;i<(timestamp.length) - 1;i++)
        {
          if((i%timestampCount) == 0)
            valuesArray.push(i);
        }
      }
    var timeSeries = c3.generate({
      data: {
        columns:[ scoreAvg ]
        ,
      },

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
              categories: timeArray,
              label: 'Time intervals',
              tick: {
                  values: valuesArray
                      
                  }

              }
      },
      
      // configure the legend
      legend: {
                show: false
           },
      
       // configure the tooltip    
      tooltip: {
              format: {
                  title: function (d) { return timestamp[d]; },
                  
      //            value: d3.format(',') // apply this format to both y and y2
              }
          }

    });

    $("#timeSeriesElement").empty();
    $("#timeSeriesElement").append(timeSeries.element);
}