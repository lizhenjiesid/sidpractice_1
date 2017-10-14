// JavaScript Document
var intput ;
function fajax(){
"use strict";	
$.ajax({ 
	
    type: 'GET', 
    url: 'https://jsonplaceholder.typicode.com/posts?userId=' + document.getElementById("userinput").value, 
    
    dataType: 'json',
    success: function (data) { 
		document.getElementById("321").innerHTML = "this is id = " + document.getElementById("userinput").value;
        $.each(data, function(index, element) {
            //$("#jsontTable").append($("<p>").html(element.id) );
			
			var divRow = $("<div>").addClass("divTableRow");
			var divCellId = $("<div>").addClass("divTableCell").html(element.id);
			var DivCellBody = $("<div>").addClass("divTableCell").html(element.body);
			var divCellTitle = $("<div>").addClass("divTableCell").html(element.title);
			divRow.append(divCellId,divCellTitle,DivCellBody);
			$(".divTableBody").append(divRow);
            });
       }
   });
}
function myrefresh()
 {    "use strict";	
      window.location.reload();
 }
