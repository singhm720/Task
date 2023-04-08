const query = encodeURI("SELECT pickup_datetime, trip_distance FROM 'JSON.csv' LIMIT 2;");
const count = encodeURI("count=true");
debugger;
$.ajax({


    
    type: "GET",
    url: "JSON_DATA.csv",
    // url : "http://127.0.0.1:5500/exp?query=SELECT%20pickup_datetime,%20trip_distance%20FROM%20'JSON_DATA.csv'&limit=5",
    dataType: "text",
    success: function(data) {
        processData(data);
    }
    });
    function processData(allText) {
    debugger
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    get_lines_data(lines)
    }
    const zoomingData = []
    function get_lines_data(lines){
        debugger
        for(var i=0; i< lines.length; i++){
            var data = lines[i];
            zoomingData.push(
                {
                  arg: i, y1: data[0].split("T00:00")[0], y2: data[1]
                }
              );
        }
    return zoomingData
    }
    

  







    
      