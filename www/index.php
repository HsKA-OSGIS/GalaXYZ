<?php
	//php goes here
	

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset = "UTF-8"/>
		<meta name = "viewport" content="width=device-width, initial-scale=1"/>
		<title>GalaXYZ</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="lib/jquery.min.js"></script>
		<link rel="stylesheet" href="lib/leaflet/leaflet.css" />
		<script src="lib/leaflet/leaflet.js"></script>
		<script type="text/javascript" src="lib/leaflet/leafletembed.js"></script>
		<link rel="stylesheet" href="lib/stylesheet.css">
		
		<!--- style created in lib/stylesheet -->
		<style>
        				
		</style> 
				
	</head>
	
	<body>
		<div class="row">
			<div class="col-sm-12" style="border-bottom: 1px solid black;">
				<h1>GalaXYZ Routing</h1>
			</div>
		</div>
		<div id="map-container" class="row">
			<!-- Div occupied by map -->
			<div id='map' style=""></div>
			<!-- menu html -->
			<div id="menu">
				<div id="panel" style="float: right; width: 300px;">
					<h2 style="margin-top: 0px; border-bottom: 1px solid lightgrey">Connect to DB</h2>
					<button type="button" class="btn btn-default" onclick="sendAjax()">Click Me!</button>
					<br><br><p>*open console (F12)</p>
					<p>This button executes a SQL query, returning geometry of a polygon</p>
					<p id="btn_result"></p>
				</div>
				<button id="btn_panel" type="button" class="btn btn-default" onclick="panelDisplay()">
					<span class = "glyphicon glyphicon-menu-hamburger"></span>
				</button>
					
				
			</div>
		</div>
		
		<script type="text/javascript">

			var panelDisp = 0; // indicator for panel displayed
			initmap(); // initialises the leaflet map from leafletembed.js

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
				console.log(coordArray[0][0][0]); // lon of a single coord
				console.log(coordArray[0][0][1]); // lat of a single coord
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


		</script>

		
	
	</body>