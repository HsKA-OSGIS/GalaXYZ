
function sendAjax(){
	// calls an AJAX query to the file ajax_dbquery
	$.ajax({url: "ajax_dbquery.php", success: function(result){
		//passes result to handleAjax function
		handleAjax(result);
	}});
}

// handles the result of the db ajax query
function handleAjax(result){
	console.log(result);
	var newResult = JSON.parse(result); // convert string to json object
	var coordArray = newResult.coordinates; // set coordinates to array
	console.log(coordArray[0][0]); // lon of a single coord
	console.log(coordArray[0][1]); // lat of a single coord
}

function panelDisplay(){
	// shows and hides the panel
	var panel = $('#panel');
	if(panelDisp == 0){
		panel.show();
		panelDisp = 1
	} else {
		panel.hide();
		panelDisp = 0;
	}
	
}

function panel_addNogo(id){

	nogoCount += 1;
	//string containing the HTML to be appended when a nogo is added
	addPoly = '<div class="row nogoitem" id="nogoitem'+id+'">\
				<div class="col-xs-2" style="padding-left: 0px; padding-top: 5px;">\
					<span class="glyphicon glyphicon-stop" style="font-size: 2.0em;"></span>\
				</div>\
				<div class="col-xs-9" >\
					<div class="row">\
						<p class="objTitle" onclick="testfunc('+id+')">\
							<b>Polygon '+id+'</b>\
						</p>\
					</div>\
					<div class="row">\
						<input id="desc'+id+'" type="text" class="form-control" placeholder="Add description"\
						style="margin-bottom: 5px;" onfocus="toggleSave(0,'+id+')"></input>\
					</div>\
				</div>\
				<div class="col-xs-1" style="padding:0px; padding-top: 10px;">\
					<span class="glyphicon glyphicon-trash" title="Delete feature" onclick="panel_delNogo('+id+')"></span>\
					<span id="saveglyph'+id+'" class="glyphicon glyphicon-ok" \
					title="Save description" onclick="saveDesc('+id+')"></span>\
				</div>\
			</div>';
	//prepends the nogo area to the nogo HTML list
	$("#managenogo").prepend(addPoly);
}



function panel_delNogo(id){
	//removes html element from the nogo list				
	$('#nogoitem'+id).remove();
}

function toggleSave(ind,id){
	if (ind == 0){
		$('#saveglyph'+id).show();	
	} else {
		$('#saveglyph'+id).hide();	
	}	
}
function saveDesc(id){
	desc = $('#desc'+id).val();
	toggleSave(1,id);
	$('#desc'+id).replaceWith('<p id="desc'+id+'">'+desc+'</p>');

	var index = nogo_Poly.map(function(el) {
	  return el.id;
	}).indexOf(id);

	nogo_Poly[index]['desc'] = desc;
	console.log(nogo_Poly[index]);
}
function getnogo(){
	var x = getAllNogoAreas();
	console.log(getAllNogoAreas().polygon);
	console.log(nogo_Poly);
}
