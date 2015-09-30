categoryArray = [];
categoryArrayWithValues = [];
categoryCountArray = [];
searchStringWithCount = [];
initialCategoryObject =[];
conversationData = [];
wid= 2;
fileObj = "" ;
convoTimeoutID = 0;
previousSelectionCategory = {};

base_url = "http://127.0.0.1:8000"

function readNavbarStructure()
{
   /* reads a json file which contains all categories and its data and displays respective dropdown buttons */
    json = returnJSON(base_url+"/search/",null);
    initialCategoryObject = json;
    categories = Object.keys(json);
    
    
    for(i in categories)
    {
        if(categories[i] != "time") //neglect the category named "time"
        {
            // insert dropdown menus for each category
            insertCount = 0;
            for(categoryName in json[categories[i]])
            {

                  $navbarButton = $( "<div id=" + categoryName.replace("_"," ") + " class=\"col-md-"+wid+"\" style=\"margin-left:auto; margin-right:auto;\"><label> "+categoryName.replace("_"," ")+" </label>&nbsp&nbsp<a name=\"clear\" style=\"cursor:pointer;\" class=\"clearDropdown\"></a><br/><div class=\"fademeout\"><select data-placeholder=\"Select\" class=\"chosen-select\" id=\""+categoryName+"\" style=\" max-width:100%; min-width:100%;\"> <option value=\"Select\"></option></select></div><span class=\"buttonGlyph\"><a class=\"btn btn-info clearDropdown\">Clear</a></span></div>" );
                  //$navbarButton = $( "<div class=\"col-md-"+wid+"\" style=\"margin-left:auto; margin-right:auto;\"><label> "+categoryName+" </label>&nbsp&nbsp<a name=\"clear\" style=\"cursor:pointer;\" class=\"clearDropdown\"><span class=\"glyphicon glyphicon-refresh\"></span></a><br/><div class=\"fademeout\"><select data-placeholder=\"Select\" class=\"chosen-select\" id=\""+categoryName+"\" style=\" max-width:100%; min-width:100%;\"> <option value=\"Select\"></option></select></div> </div>" );
                  
                  if(insertCount != 0)
                  {
                    
                    $navbarButton.hide();
                  }
                  if(Object.keys(json[categories[i]]).length > 1)
                  {
                    if(categoryName.split("_")[1] == "id")
                        $navbarButton.find("span.buttonGlyph").append("<a id="+ categoryName+" class=\"btn btn-default pull-right toggleSearch\"><text style='font-size:12px'>Search by name</text></a>");
                    if(categoryName.split("_")[1] == "name")
                        $navbarButton.find("span.buttonGlyph").append("<a id="+ categoryName+" class=\"btn btn-default pull-right toggleSearch\">Search by id</a>");
                  
                  }
                  $('#contains-custom-header').append($navbarButton);
                  categoryArray.push(categoryName);
                  categoryCountArray[categoryName] = 0;
                  categoryArrayWithValues[categoryName] = json[categories[i]][categoryName];
                  insertCount += 1;
            }
            

        }
        
    }
    if(json["time"]["show"] == true)
    {
        //this button is for time selection
        $navbarButton = $( '<button type="button" class="btn btn-info pull-right" data-toggle="modal" data-target="#myModal">Time filter</button>');
        $('#contains-custom-header').append($navbarButton);
    }
    
    updateDropdownMenus();    // call this function to put data inside dropdown menus
    $(".chosen-select").chosen(); //should be the last thing to enable dropdown
    //addShowMore();
    $goButton = $("<a class=\"btn btn-default pull-right submitSelections\" href=\"#\" style=\"top:50%; display:none\">Submit</a>");
    $('#contains-custom-header').append($goButton);
    
    
    

}

$(function(){
$("a.submitSelections").click(function(){
    blurStart();
    $("div#bellCurveElement").empty();
    $("div#timeSeriesElement").empty();
    $("div.legend").children("ul#legend-list").empty();
    $("#tagCloudContainer").jQCloud('destroy');
    $("div#convoItemsContainer").empty();
    $("div.lineGraph").show();
    $("div.tagCloudChart").show();
    $("div.bellCurveGraph").show();
    $("div.conversationChart").show();
    fromTime = $("#fromTime").val();
    toTime = $("#toTime").val();
    fromTime = "09/29/2015 18:20"; // Tue Sep 29 18:20:12 2015
    toTime = "09/29/2015 18:23"; //Tue Sep 29 18:23:45 2015
    
    selectedCategories = Object.keys(previousSelectionCategory);
    unselected = $(categoryArray).not(selectedCategories).get();
    
    
    
    
    
    
    requestData = {
            "selected" : previousSelectionCategory,
            "latest" : selectedCategories[selectedCategories.length - 1],
            
        };
        if(fromTime != "")
            requestData["from"] = fromTime;

        if(toTime != "")
            requestData["to"] = toTime;

        
        json = returnJSON(base_url+"/read/",requestData);
        

    // draw first graph
    var timeSeriesData = json.firstGraph;
    drawTimeSeriesGraph(timeSeriesData);

    //draw second graph
    var tagCloudData = json.secondGraph;
    drawTagCloudChart(tagCloudData);

    //draw third graph

    var bellCurveData = json.thirdGraph;
    drawBellCurveGraph(bellCurveData);

    // draw fourth graph
    var convoData = json.fourthGraph;

    if (convoData["show"] == true)
    {
        conversationData = json.fourthGraph; // keep data backup
        fieldsForConvoList = Object.keys(json.fourthGraph);
        readConvoListValues(convoData);
    }

    else
    {
        $("div.conversationChart").hide();
    }

    blurEnd();
});
$("div.chosen-container").click(function(){
    
    if($(this).children("div.chosen-drop").children("ul.chosen-results").find("li").last().attr("id") != "showMoreCategoryOptions")
    addShowMore();
});



});

function addShowMore()
{
    for(categoryName in categoryArray){
        //alert($('select#'+categoryArray[categoryName]).attr("id"));
        if($('select#'+categoryArray[categoryName]).siblings("div.chosen-container").children("div.chosen-drop").children("ul.chosen-results").find("li").last().attr("id") != "showMoreCategoryOptions")
        {

                
            $showMore = $('select#'+categoryArray[categoryName]).siblings("div.chosen-container").children("div.chosen-drop").children("ul.chosen-results").first();
            //alert($showMore.attr("class"));
            //$selectOption = $("<option class = \"showMore\" id=\"showMore\" value=\"show_more\">show more...</option>");
            $selectOption = $("<a style='text-decoration:none' onclick=\"showMoreOrShowMoreSearch('" + categoryArray[categoryName] + "')\" ><li id='showMoreCategoryOptions' class=\"no-results\">Show More ...</li></a>");
            $showMore.append($selectOption);
        }
    }

}

function updateDropdownMenus() 
{
    //this function is used to put data inside dropdown menus
    for(categoryName in categoryArrayWithValues){
            $('select#'+categoryName).empty();
            $('select#'+categoryName).append("<option></option>");
            for(value in categoryArrayWithValues[categoryName])
            {
                val = categoryArrayWithValues[categoryName][value];
                 $selectOption = $("<option value=\""+val+"\">"+val+"</option>");
                 $('select#'+categoryName).append($selectOption);
            }
            /*
            <li class="no-results">No results match "<span>szdf</span>"</li>
            */
            
    }
    

}

function readSearchBarData(searchedCategory,searchString)
{
    /* this function is called when a search string is entered in a search bar of category dropdown menus and there's no data to display
        this sends an ajax request of the form  
        requestData = {
            "selected" : previousSelectionCategory,
            "unselected" : [unselected],
            "search" : searchDetails
        };
        
        the result from this request is updated in category dropdown menus
        */

    selectedCategories = Object.keys(previousSelectionCategory);
    //unselected = $(categoryArray).not(selectedCategories).get();
    searchDetails = {};
    searchDetails[searchedCategory] = searchString;
    requestData = {
            "selected" : previousSelectionCategory,
            "search" : searchDetails
        };
        

        json = returnJSON(base_url+"/search/regex/",requestData);
        

    categories = (Object.keys(json.values)); 
    
    id = 0;
    for(i=0; i<categories.length; i++){
        $('select#'+categories[i]).empty();
        $('select#'+categories[i]).append("<option></option>");
        $('select#'+categories[i]).siblings("div.chosen-container").find("ul.chosen-results").empty();
        for(k=0;k<json.values[categories[i]].length;k++)
        {
           
            $selectOption = $("<option value=\""+json.values[categories[i]][k]+"\">"+json.values[categories[i]][k]+"</option>");
            $('select#'+categories[i]).append($selectOption);
            //id = $('select#'+categories[i]).siblings("div.chosen-container").find("ul.chosen-results").children("li").last().attr("data-option-array-index");
           // dupOption = '<li class="active-result" data-option-array-index="' + (Number(id)) + '">' + json[categories[i]][k] + '</li>';
           // $('select#'+categories[i]).siblings("div.chosen-container").find("ul.chosen-results").append(dupOption);
           // id +=1;
        }
        
        

        //$(".chosen-select").chosen();
    }
    $(".chosen-select").trigger("chosen:updated");  // to update the dropdown lists
    addShowMore();
    $("select#" + searchedCategory).siblings("div.chosen-container").find("div.chosen-search").children("input").val(searchString); 
}

function showMoreOrShowMoreSearch(clickedObj)
{
    
    $('select#'+clickedObj).siblings("div.chosen-container").children("div.chosen-drop").children("ul.chosen-results").find("li").last().text("Loading ...");
    searchString = null;
    idOfClickedShowMore = clickedObj;
    searchString = $("select#" + idOfClickedShowMore).siblings("div.chosen-container").find("div.chosen-search").children("input").val(); 
    key = Object.keys(searchStringWithCount);
    
    if(searchString != "")
        {
            //searchString = Object.keys(searchStringWithCount[key[0]]);
            
            
            
            
            if(Object.keys(searchStringWithCount[key[0]]) != searchString || key[0] != idOfClickedShowMore)
            {
                searchStringWithCount.length = 0;
                temp=[];
                temp[searchString] = 0;
                searchStringWithCount[searchedCategory] = temp;
            }
            count = searchStringWithCount[key[0]][searchString];
           
            searchStringWithCount[key[0]][searchString] += 1;
           
            readShowMoreSearch(idOfClickedShowMore,count,searchString);
           
            
            
        }
    else
    {
        categoryCountArray[idOfClickedShowMore] += 1;
        readShowMoreCategory(idOfClickedShowMore,categoryCountArray[idOfClickedShowMore]);
        
        
    }
}

function readShowMoreCategory(param,count)
{
    /* this function is called when a show more button is pressed in one of the category dropdown menus
        this sends an ajax request of the form  
        requestData = {
                "count" : count,
                "param" : param
            };
        
        the result from this request is updated in category dropdown menus
        */
       
        requestData = {
                "count" : count,
                "param" : param,
                "selected": previousSelectionCategory
            };
            

            json = returnJSON(base_url+"/search/showMore/",requestData);
            if(Object.keys(json.values).length == 0)
            {
                setTimeout(function(){
                    $(".chosen-select").trigger("chosen:updated");  // to update the dropdown lists
                    //addShowMore();
                },1000);
                //$('select#'+param).siblings("div.chosen-container").children("div.chosen-drop").children("ul.chosen-results").find("li").last().remove();
                return;
            }
            
        categories = (Object.keys(json.values)); 
        
        

        for(i=0; i<categories.length; i++){
          //  $('select#'+categories[i]).empty();
           // $('select#'+categories[i]).append("<option></option>");
            for(k=0;k<json.values[categories[i]].length;k++)
            {
               
                $selectOption = $("<option value=\""+json.values[categories[i]][k]+"\">"+json.values[categories[i]][k]+"</option>");
                $('select#'+categories[i]).children("option").first().after($selectOption);
              //  id = $('select#'+categories[i]).siblings("div.chosen-container").find("ul.chosen-results").children("li").last().attr("data-option-array-index");
             //   dupOption = '<li class="active-result" data-option-array-index="' + (Number(id)+1) + '">' + json[categories[i]][k] + '</li>';
              //  $('select#'+categories[i]).siblings("div.chosen-container").find("ul.chosen-results").children("a").before(dupOption);
                //<li class="active-result" data-option-array-index="100">98</li>
            }
            
           
            
        }
        setTimeout(function(){
            $(".chosen-select").trigger("chosen:updated");  // to update the dropdown lists
            addShowMore();
        },1000);
    }

function readShowMoreSearch(param,count,searchString)
{
        /* this function is called when a search string is entered in a search bar of category dropdown menu and show more button is pressed
        this sends an ajax request of the form  
            requestData = {
            "count" : count
            <param_name> : param_name 
        };
            
            the result from this request is updated in category dropdown menus
            */
        searchString = $("select#" + param).siblings("div.chosen-container").find("div.chosen-search").children("input").val(); // event.target.val() gives the search string
        
        requestData = {
            "count" : count,
            "param":{},
            "selected":previousSelectionCategory
        };
        requestData["param"][param] = searchString ;
        
        json = returnJSON(base_url+"/search/showMoreRegex/",requestData);
        
    categories = (Object.keys(json.values)); 
    
    for(i=0; i<categories.length; i++){
      
        for(k=0;k<json.values[categories[i]].length;k++)
        {

            
            $selectOption = $("<option value=\""+json.values[categories[i]][k]+"\">"+json.values[categories[i]][k]+"</option>");
            $('select#'+categories[i]).children("option").first().after($selectOption);
           // id = $('select#'+categories[i]).siblings("div.chosen-container").find("ul.chosen-results").children("li").last().attr("data-option-array-index");
           // dupOption = '<li class="active-result" data-option-array-index="' + (Number(id)+1) + '">' + json[categories[i]][k] + '</li>';
           // $('select#'+categories[i]).siblings("div.chosen-container").find("ul.chosen-results").children("a").before(dupOption);
           // 
            //<li class="active-result" data-option-array-index="100">98</li>
        }
        
       
        
    }
    setTimeout(function(){
            $(".chosen-select").trigger("chosen:updated");  // to update the dropdown lists
            addShowMore();
            $("select#" + param).siblings("div.chosen-container").find("div.chosen-search").children("input").val(searchString); 
        },1000);
}

function readCategory(categorySelected,valueSelected){
        
        /* this function is called when an option is selected from a dropdown menu
        this sends an ajax request of the form  
            requestData = {
            "selected" : previousSelectionCategory,
            "unselected" : [unselected]
        };
            
            the result from this request is updated in category dropdown menus
            */
        selectedCategories = Object.keys(previousSelectionCategory);
        unselected = $(categoryArray).not(selectedCategories).get();
        requestData = {
            "selected" : previousSelectionCategory,
            "unselected" : unselected
        };
        
        json = returnJSON(base_url+"/search/getValues/",requestData);
    
    categories = (Object.keys(json.values)); 
    
    for(i=0; i<categories.length; i++){
        $('select#'+categories[i]).empty();
        $('select#'+categories[i]).append("<option></option>");
        for(k=0;k<json.values[categories[i]].length;k++)
        {
           
            $selectOption = $("<option value=\""+json.values[categories[i]][k]+"\">"+json.values[categories[i]][k]+"</option>");
            $('select#'+categories[i]).append($selectOption);
        }
        
        
        
    }
    $(".chosen-select").trigger("chosen:updated");  // to update the dropdown lists
}

function readShowMoreConvo(conversationId,fields){
    /* this function is called when show more button is pressed in the conversation list (without a search query)
        this sends an ajax request of the form  
            requestData = {
            "selected" : previousSelectionCategory,
            "convId" : convoId
        };
        */
    requestData = {
            "selected" : previousSelectionCategory,
            "convId" : Number(conversationId),
            "send" : fields
        };
        
        json = returnJSON(base_url+"/search/showMore4/",requestData);
       
    
    
    for(k in fieldsForConvoList)
    {
        
        if(fieldsForConvoList[k] == "show" || fieldsForConvoList[k].length == 0)
        {
            continue;
        }
        conversationData[fieldsForConvoList[k]] = conversationData[fieldsForConvoList[k]].concat(json.values[fieldsForConvoList[k]]);
    }
    
    readConvoListValues(json.values);
}


function readShowMoreConvoSearch(conversationId, convoSearchString, fields){
    /* this function is called when show more button is pressed in the conversation list (with a search query)
        this sends an ajax request of the form  
            requestData = {
            "selected" : previousSelectionCategory,
            "search" : searchDetails,
            "parameters" : searchParameters,
            "convId" : convoId

        };
        */
    requestData = {
            "selected" : previousSelectionCategory,
            "search" : convoSearchString,
            "parameters" : fields,
            "convId" : conversationId
        };
        
        json = returnJSON(base_url+"/search/regexShowMore4/",requestData);
        
    
    
    for(k in fieldsForConvoList)
    {
        
        if(fieldsForConvoList[k] == "show" || fieldsForConvoList[k].length == 0)
        {
            continue;
        }
        conversationData[fieldsForConvoList[k]] = conversationData[fieldsForConvoList[k]].concat(json.values[fieldsForConvoList[k]]);
    }
    
    readConvoListValues(json.values);
}

fieldsForConvoList = [];
function readConvoListValues(convoData){
    
    selectedCategoriesWithValues = Object.keys(previousSelectionCategory);

    
    putCusName = "false";
    putEmpName = "false";
    putProdName = "false";
    putDeptName = "false";

    if($("#convoItemsContainer").children("a").last().attr("id") != "showMore")
    {
        $convoLI = $('<a style="padding:5px;" onclick="showMoreConvo(this)" class="list-group-item convoItem showMore" id="showMore"><center>Show more . . .</center></a>');
        $('#convoItemsContainer').append($convoLI);
    }

    if(fieldsForConvoList.indexOf("customer_name") != -1 || selectedCategoriesWithValues.indexOf("customer_name") != -1)
    {
        putCusName = "true";

    }
    if(fieldsForConvoList.indexOf("employee_name") != -1 || selectedCategoriesWithValues.indexOf("employee_name") != -1)
    {
        putEmpName = "true";

    }
    if(fieldsForConvoList.indexOf("product_name") != -1 || selectedCategoriesWithValues.indexOf("product_name") != -1)
    {
        putProdName = "true";

    }
    if(fieldsForConvoList.indexOf("department_name") != -1 || selectedCategoriesWithValues.indexOf("department_name") != -1)
    {
        putDeptName = "true";

    }

    for(k=0; k<convoData.convId.length; k++){

        if(putCusName != "false")
        {
             if(selectedCategoriesWithValues.indexOf("customer_name") != -1)
                cusName = previousSelectionCategory["customer_name"];
            else
                cusName = convoData.customer_name[k];
        }
           
        if(putEmpName != "false")
        {
            if(selectedCategoriesWithValues.indexOf("employee_name") != -1)
                empName = previousSelectionCategory["employee_name"];
            else
                empName = convoData.employee_name[k];
        }

        if(putProdName != "false")
        {
            if(selectedCategoriesWithValues.indexOf("product_name") != -1)
                prodName = previousSelectionCategory["product_name"];
            else
                prodName = convoData.product_name[k];
        }

        if(putDeptName != "false")
        {
            if(selectedCategoriesWithValues.indexOf("department_name") != -1)
                deptName = previousSelectionCategory["department_name"];
            else
                deptName = convoData.department_name[k];
        }
        convoULitem = "";
        convoULitem = '<a style="padding:5px;" onclick="drawConvoGraph(this)" class="list-group-item convoItem" id="'+convoId+'">';
        if(putCusName != "false")
        {
            convoULitem += '<b>Customer</b> : '+ cusName ;
        }

        convoULitem += '<br>  <b>Conversed on</b> : '+convoData.startTime[k] ;

        if(putEmpName != "false")
        {
            convoULitem += '<br>  <b>Conversed with </b> : '+ empName ;
        }

        if(putProdName != "false")
        {
            convoULitem += '<br>  <b>About product  </b> : '+ prodName ;
        }

        if(putDeptName != "false")
        {
            convoULitem += '<br>  <b>Department </b> : '+ deptName ;
        }
        /*
        $convoULitem = $('<a style="padding:5px;" class="list-group-item convoItem" id="'+convoId+'">'
                            +'<b>Customer</b> : '+ cusName
                            +'<br>  <b>Conversed on</b> : '+convoData.startTime[k]
                            +'<br>  <b>Conversed with </b> : '+ empName
                            +'<br>  <b>About product  </b> : '+ prodName
                            +'<br>  <b>Department </b> : '+ deptName
                          +'</a>');*/
        $('#convoItemsContainer').children("a#showMore").before(convoULitem);
        //$('#convoItemsContainer').append(convoULitem);
        idToConvoId.push(convoData.convId[k]);
        convoId += 1;
    }
    
}


function drawConvoGraph(ele)
{
    /* when a conversation is clicked on, this function is called. It displays a poppup using iframe. the 'convoId' is passed as an argument to the html page of the iframe */
    if($('#wrapper').hasClass("toggled").toString() == "false"){
            $('#wrapper').toggleClass("toggled");
        }
            $('.popupModalConvo').toggleClass('active');
            modal = document.getElementById("convoFrameContainer");
            data = idToConvoId[$(ele).attr("id")];
            //alert(data);
            modal.innerHTML = "";
            
            modal.innerHTML = '<iframe src="/spline/' + data + '" style="border:none; width:100%; height:350px;"></iframe>';
}

function showMoreConvo(el)
{
    maxConvoId = Math.max.apply(null, idToConvoId);
            
            searchConvoStr = $('#textSearcher').children("input.form-control").val();
            fields ="";
            if(searchConvoStr=='')
            {
                fields = fieldsForConvoList.slice();
                index = fields.indexOf("convId");
                fields.splice(index,1);
                index = fields.indexOf("show");
                fields.splice(index,1);      
                
                readShowMoreConvo(maxConvoId,fields);
            }
                
            else
                
            {
                fields = fieldsForConvoList.slice();
                index = fields.indexOf("convId");
                fields.splice(index,1);
                index = fields.indexOf("show");
                fields.splice(index,1);      
                
                index = fields.indexOf("startTime");
                fields.splice(index,1);
                //id = idToConvoId[$("div#convoItemsContainer").children("a.convoItem").last().attr("id")];
                readShowMoreConvoSearch(maxConvoId,searchConvoStr,fields);
            }
}
    $(function(){
        
        $("input.form-control").keyup(function () {
            clearTimeout(convoTimeoutID);
            found = "false"; // indicates whether a match for the entered string is found or not
            var filter = $(this).val().toLowerCase(); //save keyword to search
            //var convoData = returnJSON('graphs.json').fourthGraph;
            // $("a.convoItem").show();
            $("a.convoItem").hide();
            $("a#showMore").show();
            var i= 0;
            
            $("a.convoItem").each(function(){ //for each list item
                if($(this).attr('id') != "showMore")
                {
                    i = Number($(this).attr('id')); //fetch DOM id of the conversation
                    
                    /*
                    if( ( (((conversationData.employee_name[i]).toString()).toLowerCase()).indexOf(filter) > -1) || ( ((conversationData.product_name[i]).toLowerCase()).indexOf(filter) > -1) || ( ((conversationData.customer_name[i]).toLowerCase()).indexOf(filter) > -1) || ( ((conversationData.department_name[i]).toLowerCase()).indexOf(filter) > -1) ){
                        //
                        $(this).show();
                    }
                    */
                    for(k in fieldsForConvoList)
                    {
                       
                        if(fieldsForConvoList[k] == "show" || fieldsForConvoList[k] == "convId" || fieldsForConvoList[k] == "startTime")
                        {

                            continue;
                        }

                        
                        if((((conversationData[fieldsForConvoList[k]][i]).toString()).toLowerCase()).indexOf(filter) > -1)
                        {
                            found = "true";
                            $(this).show();

                        }
                    }
                    
                }
                
            });

            convoTimeoutID = setTimeout(function(){
                if(found == "false")
                    $("div#convoItemsContainer").children("a#showMore").trigger("click");
            },1000);

            /* if the focus is not on the search bar, don't send the request */
            searchBar.blur(function(){
                clearTimeout(convoTimeoutID);

            });
        });

    });


timeoutID = 0; // ID of the setTimeout function
$(document).ready(function(){
   searchBarObject = $("div.chosen-container.chosen-container-single").children("div.chosen-drop");
   searchBar = searchBarObject.children("div.chosen-search").children("input");
   /* send ajax request after a second after user stops typing in the search field */
   searchBar.keyup(function(event){
       
       clearTimeout(timeoutID);
       
       
           timeoutID = setTimeout(function(){

                
               //function call to ajax request should be put here
               searchString = $(event.target).val(); // event.target.val() gives the search string
               searchedCategory = $(event.target).parents("div.chosen-container").siblings("select.chosen-select").attr("id");
               searchStringWithCount.length = 0;
               temp=[];
               temp[searchString] = 0;
               searchStringWithCount[searchedCategory] = temp;
               chosenResult = $('select#'+searchedCategory).siblings("div.chosen-container").find("ul.chosen-results");
               
               if(chosenResult.children("li").first().attr("class") == "no-results")
                {
                 
                    readSearchBarData(searchedCategory , searchString);   
                }
                addShowMore();
                
           },1000);
               
   });

   /* if the focus is not on the search bar, don't send the request */
   searchBar.blur(function(){
       clearTimeout(timeoutID);

   });


});


$(function(){
    $('#switchSearch').click(function(){
        if($('#timeSearcher').hasClass("inactiveSearcher")){
            $('#timeSearcher').removeClass("inactiveSearcher");
            $('#textSearcher').addClass("inactiveSearcher");
            $('#switchSearch').text("By Text");
        }
        else{
            $('#textSearcher').removeClass("inactiveSearcher");
            $('#timeSearcher').addClass("inactiveSearcher");
            $('#switchSearch').text("By Day-span");
        }
    });

    /*onclick the toggle button in category selection*/
    $("a.toggleSearch").click(function(){
        idOfClickedElement = $(this).attr("id");
        category = idOfClickedElement.split("_")[0];
        type = idOfClickedElement.split("_")[1]; // name or id
        
        idOfCategoryDivElements = $("#contains-custom-header").children("div").first();
        idOfCategoryDivLength = $("#contains-custom-header").children("div").length;
        width = "143px";
        for(i=0;i<idOfCategoryDivLength;i++)
        {
            if(i==0)
            {
               width = idOfCategoryDivElements.find("div.chosen-container").css("width");
            }
            if(idOfCategoryDivElements.attr("id") == category)
            {
                idOfCategoryDivElements.toggle();
                idOfCategoryDivElements.find("div.chosen-container").css("width",width);
            }
            idOfCategoryDivElements = idOfCategoryDivElements.next();
        }
        /*
        for(categoryName in initialCategoryObject[category])
        {
            if(idOfClickedElement == categoryName)
                continue;
            else
            {

                $navbarButton = $( "<div class=\"col-md-"+wid+"\" style=\"margin-left:auto; margin-right:auto;\"><label> "+categoryName.replace("_"," ")+" </label>&nbsp&nbsp<a name=\"clear\" style=\"cursor:pointer;\" class=\"clearDropdown\"></a><br/><div class=\"fademeout\"><select data-placeholder=\"Select\" class=\"chosen-select\" id=\""+categoryName+"\" style=\" max-width:100%; min-width:100%;\"> <option value=\"Select\"></option></select></div><span class=\"buttonGlyph\"><a class=\"btn btn-info clearDropdown\">Clear</a><a id="+ categoryName+" class=\"btn btn-default pull-right toggleSearch\">Toggle Search</a></span></div>" );                
                actualDiv = $(this).parents("div.col-md-" + wid);
                actualDiv.replaceWith($navbarButton);
                $(".chosen-select").chosen(); //should be the last thing to enable dropdown

            }
        }
        */
    });

    /* onclick the clear(or enable) button of category selection buttons*/
    $("a.clearDropdown").click(function(){

       selectedCategories = Object.keys(previousSelectionCategory);
       len = selectedCategories.length; //get the length of the previousSelectionCategory array
       idOfClickedElement = $(this).parent().siblings("div.fademeout").children("select.chosen-select").attr("id");
       if(len > 0)
       {
           
           duplicateDiv = $(this).parent().siblings("div.fademeout").find("div.faded_" + idOfClickedElement);
           if(duplicateDiv.length > 0)
           {
               
               index = selectedCategories.indexOf(String(idOfClickedElement)); // index of the clicked category in previousSelectionCategory array
               for(i=index;i<len;i++)
              // while((previousSelectionCategory.length - 1) >= index)
               {
                   selectObject = $("select.chosen-select#"+selectedCategories[i]);
                   selectObject.parent().fadeTo(100,1);    // fade back the original div to 1
                   $("div.faded_" + selectedCategories[i]).remove();    // remove the dummy div
                   $("a.toggleSearch#" + selectedCategories[i]).removeAttr("disabled"); // enable the toggle search button
                   //previousSelectionCategory.pop();
                   //put default text in dropdowns
                   selectObject.siblings("div.chosen-container").children("a.chosen-single").addClass("chosen-default"); 
                   selectObject.siblings("div.chosen-container").children("a.chosen-single").children("span").text("Select");
                   delete previousSelectionCategory[selectedCategories[i]];
               }
              // removeLen = previousSelectionCategory.length - index ; 
              // previousSelectionCategory.splice(index,removeLen);
               
           }
           else if(selectedCategories[len-1] == idOfClickedElement)
           {

               //idOfClickedElement = $(this).parent().siblings("div.fademeout").children("select.chosen-select").attr("id");
               selectObject = $(this).parents("div#fademeout").children("select.chosen-select");
                selectObject.siblings("div.chosen-container").children("a.chosen-single").addClass("chosen-default"); 
                selectObject.siblings("div.chosen-container").children("a.chosen-single").children("span").text("Select");
                delete previousSelectionCategory[idOfClickedElement];
                

           }
           selectedCategories = Object.keys(previousSelectionCategory);
           len = selectedCategories.length; //get the length of the previousSelectionCategory array
           if(len == 0)
           {
               updateDropdownMenus();
               $(".chosen-select").trigger("chosen:updated");  // to update the dropdown lists
           }
           else
           {
               readCategory();
           }
       }     
   });

    

    /* this function is called when a value is selected in one of the category selection buttons */
    $("select.chosen-select").on('change',function(){
        blurStart();

        selectedCategories = Object.keys(previousSelectionCategory);
        unselected = $(categoryArray).not(selectedCategories).get();
        for(i in unselected)
        {
            categoryCountArray[unselected[i]] = 0;
        }
        
        len = selectedCategories.length; //get the length of the previousSelectionCategory array

        idOfSelectedValue = $(this).attr("id");  //get the id of the dropdown menu element
        valueOfSelectedCategory = $(this).val();
        if(idOfSelectedValue.split("_")[1] == "id")
        {
            alterName = idOfSelectedValue.split("_")[0] + "_name";
            if(selectedCategories.indexOf(alterName) != -1)
            {
                delete previousSelectionCategory[alterName];
                selectedCategories = Object.keys(previousSelectionCategory);
            }
        }

        if(idOfSelectedValue.split("_")[1] == "name")
        {
            alterId = idOfSelectedValue.split("_")[0] + "_id";
            if(selectedCategories.indexOf(alterId) != -1)
            {
                delete previousSelectionCategory[alterId];
                selectedCategories = Object.keys(previousSelectionCategory);
            }
        }
        previousSelectionCategory[idOfSelectedValue] = valueOfSelectedCategory; // add the selectedcategory and it's value to the array
        if(len != 0)
        {
            if(selectedCategories.indexOf(idOfSelectedValue) == -1)
            {
                previousSelection = $("select.chosen-select#" + selectedCategories[len-1]).parent();

                previousSelection.fadeTo('slow',.4);    //fade out the dropdown menu 

                // add a dummy div on the dropdown menu
                previousSelection.append('<div class="faded_' + selectedCategories[len-1] + '" style="position: absolute;top:20%;left:0;width: 100%;height:45%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');
                //disable the toggle search button
                
                $("a.toggleSearch#" + selectedCategories[len-1]).attr("disabled","disabled");
                
            }
        }
        
        // previousSelectionCategory.push({idOfSelectedValue : valueOfSelectedCategory});
        
        if(Object.keys(previousSelectionCategory).length > 0)
        {
            $("a.submitSelections").show();
        }

            readCategory(idOfSelectedValue,valueOfSelectedCategory);

            blurEnd();
    });

        
    
        

    
    
    });


/* bell curve code begins */

//setting up empty data array
