
    var URL = 'http://www.omdbapi.com/';
    var IMGURL = "http://img.omdbapi.com/";


function MovieApp(){
    this.URL = 'http://www.omdbapi.com/';
    this.IMGURL = "http://img.omdbapi.com/";
    this.$theForm = $('[data-movie="search"]');
    this.test = 'it worked';
    this.listOfMovies = [];
    this.searchDataFromForm = {};
}

MovieApp.prototype.listOfMovies = function(){
    this.listOfMovies.push(movie);
    console.log(this.listOfMovies);
// this.listOfMovies.push(this.grabAndFormatForm)
//     console.log(this.listOfMovies);
}

MovieApp.prototype.grabAndFormatForm = function(){
    this.$theForm.serializeArray().forEach(function(key){
        this.searchDataFromForm[key.name] = key.value;
        // console.log(this.$theForm.serializeArray());
    }.bind(this));
    
    
}

MovieApp.prototype.getRequestToServer = function(URL, Data){
    return $.get(this.URL, data);
}

MovieApp.prototype.searchAPI() = function(){
    var searchString = this.grabAndFormatForm['search'];
    
}

function searchAPI(formObject){
    var searchString = formObject['search'];
    var data = {
        "apikey": "1ca32dee",
        "s": searchString

    };
    return data;
 

}

MovieApp.prototype.submit = function(event){
    event.preventDefault();
    this.grabAndFormatForm();
    this.searchAPI();
    // this.searchData = this.$theForm
    // this.grabAndFormatForm;
    // console.log(this.searchDataFromForm)

}
MovieApp.prototype.init = function(){
        var form = this.$theForm;
        form.on('submit', this.submit.bind(this));
            // console.log(this.grabAndFormatForm);
            // form.searchData = movies.$theForm
            // var searchData = searchAPI(grabAndFormatForm($theForm));
            // console.log(searchData);
            
        //     // getRequestToServer(URL, searchData)
        //     //     .then(listOfMovies);
        //     // $('[data-movie="search"]').trigger('reset');
    // });

    
    //manipulating the value of this within the anonymous function because each time you create a function it gets a new value of "this". 
    //bind is going to pass down our bind

}  





var movies = new MovieApp() 
// movies.init();
document.addEventListener("DOMContentLoaded", function(){movies.init()});
// $(document).ready(movies.init);


function searchAPI(formObject){
    var searchString = formObject['search'];
    var data = {
        "apikey": "1ca32dee",
        "s": searchString

    };
    return data;
 

}



// function grabAndFormatForm(data){
//     var dataObject = {};
//     data.serializeArray().forEach(function(key){
//         dataObject[key.name] = key.value;
//     })
//     console.log(dataObject)
//     return dataObject;
// }

// function getRequestToServer(URL, data){
//     return $.get(URL, data);
// }






//use glphycons for the edit and add buttons.