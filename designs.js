// Select color input
const ColorSelected, pixelCanvas,tableBody;
ColorSelected=$("#colorPicker").val();

// When size is submitted by the user, call makeGrid()

$("#sizePicker").on("submit", function (makeGrid) {
	
	 //Get table
	pixelCanvas=$("#pixelCanvas");
	tableBody=$("<tbody></tbody>");

	const  n, m, td, tr; 

   //getting size of the grid

	n=$("#inputHeight").val(); 
	m=$("#inputWeight").val();

	pixelCanvas.empty();

	// creating the grid

	for( const row=0; row < n; row++){
		tr = $("<tr></tr>");
		
		const col = 0;

	while(col < m){
			td = $("<td></td>");
			tr.append(td);
		col++;
	    }
	tableBody.last().append(tr);

    }
    pixelCanvas.append(tableBody);

    pixelCanvas.on("mousedown mouseover", "td", function(e){

    	// changing target square background color

    	if (e.buttons ===1 ){
    		$(this).css("background-color", $("#colorPicker").val());
    	}
    });
    makeGrid.preventDefault();

    });