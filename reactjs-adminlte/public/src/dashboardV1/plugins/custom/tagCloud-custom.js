// disable popup of piechart when 'close' button is pressed
function disablePopup()
{

     $('.popupModal').toggleClass('active');

}

function drawTagCloudChart(tagCloudData) { 
tuples = [];
tagToCategory = [];
tagToWeight = [];
        //timeIntervalArray.sort(function(a,b){ return a-b ; });

        // sort timeIntervalArray array 
       
       
        for (var key in tagCloudData)
        { 
            tuples.push([key, tagCloudData[key].weight]);
            tagToCategory[tagCloudData[key].text] = tagCloudData[key].categoryCount;
            tagToWeight[tagCloudData[key].text] = tagCloudData[key].weight;
        }
        
                tuples.sort(function(a, b) {
                    a = a[1];
                    b = b[1];

                    return a > b ? -1 : (a < b ? 1 : 0);
                });
                
        
                // sort timeIntervalArrayInTimeFormat array
                scoreAvgArray = [];
                for (var i = 0; i < tuples.length; i++) {
                        scoreAvgArray[i] = tagCloudData[Number(tuples[i][0])].scoreAvg;
                }
               
tagCloudColors = [];
for(i=0;i<scoreAvgArray.length;i++)
{
  
  if(scoreAvgArray[i] >= -1 && scoreAvgArray[i] <= 1)
    tagCloudColors.push("#0000C8");
  if(scoreAvgArray[i] > 1)
    tagCloudColors.push("#00C800");
  if(scoreAvgArray[i] < -1)
    tagCloudColors.push("#C80000");
}
 




step = tagCloudData.length;

  $("#tagCloudContainer").jQCloud(tagCloudData,{
    steps : step,
    shape: 'rectangular',
    autoResize: true,
    removeOverflowing : false,
    //classPattern: null,
    fontSize: {
    from: 0.06,
    to: 0.02
  },
  delay : 10,
    classPattern: null,
    colors: function(i){
      return tagCloudColors[i-1];
      },
    
    afterCloudRender: function() {
      changeColorsOfTags();
      tag = $("#tagCloudContainer").children("span").first();
      tagCount = $("#tagCloudContainer").children("span");
      for(i=0;i<tagCount.length;i++)
      {
        tag.on("click",function(){
          $('.popupModal').toggleClass('active');
          modal = document.getElementById("donutFrameContainer");
          tagName = $(this).text();
          data = "";
          data = tagName + "$";
          data += "VP" + "," + tagToCategory[tagName]["VP"] +"$";
          data += "P" + "," + tagToCategory[tagName]["P"] +"$";
          data += "VNe" + "," + tagToCategory[tagName]["VNe"] +"$";
          data += "Ne" + "," + tagToCategory[tagName]["Ne"] +"$";
          data += "N" + "," + tagToCategory[tagName]["N"] +"$";
          data += tagToWeight[tagName];
          //data += 
          //data = "tagG$VP,17$P,11$VNe,15$Ne,11$N,5$";
          modal.innerHTML = '<iframe src="/vocdonut/' + data + '" style="border:none; width:500px; height:350px;"></iframe>';
          
        });

        tag.on("mouseover",function() {
          expandedSmall = true;
          size = Number($(this).css("font-size").split("px")[0]) ;
          
          if(size <= 20)
          {
            expandedSmall = false;
            $(this).css({"font-size": size * 1.5});
          }
          else
          {
            expandedSmall = true;
            $(this).css({"font-size": size * 1.05});
          }
        });
        tag.on("mouseout",function() {
          size = Number($(this).css("font-size").split("px")[0]) ;
          if(expandedSmall)
          {
            $(this).css({"font-size": Math.floor(size/1.05)});
          }
          else
          {
            $(this).css({"font-size": Math.floor(size/1.5)});
          }
          
        });

        tag = tag.next();
      }
      
      

    }
  });

  function changeColorsOfTags()
  {
    counter = 0;
    $("div#tagCloudContainer").children("span").each(function(){
        $(this).css("color",tagCloudColors[counter]);
        counter += 1;
    });
  }
}
