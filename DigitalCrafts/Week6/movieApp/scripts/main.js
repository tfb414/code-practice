console.log("derp");
var URL = 'http://www.omdbapi.com/';
var IMGURL = "http://img.omdbapi.com/";


var $theForm = $('[data-movie="search"]');
    // console.log($theForm);
    
    $(document).ready(function() {
        
        $theForm.on('submit', function(event){
            event.preventDefault();
            var searchData = searchAPI(grabAndFormatForm($theForm));
            // console.log(searchData);
            
            getRequestToServer(URL, searchData)
                .then(listOfMovies);
            $('[data-movie="search"]').trigger('reset');
        });
    });


function searchAPI(formObject){
    var searchString = formObject['search'];
    var data = {
        "apikey": "1ca32dee",
        "s": searchString

    };
    return data;
 

}

function listOfMovies(movie){
    var listOfMovies = []
    listOfMovies.push(movie);
    console.log(listOfMovies);
    return listOfMovies
}

function grabAndFormatForm(data){
    var dataObject = {};
    data.serializeArray().forEach(function(key){
        dataObject[key.name] = key.value;
    })
    console.log(dataObject)
    return dataObject;
}

function getRequestToServer(URL, data){
    return $.get(URL, data);
}





//use glphycons for the edit and add buttons.