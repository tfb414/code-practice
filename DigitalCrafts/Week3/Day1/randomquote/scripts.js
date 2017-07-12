// var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
// var getQuote = function(data) {
//   $(".quote-text").text(data.quoteText);
//   var quot = data.quoteText;
// };


$(document).ready(function() {
    
    var quotes = ["quote1", "quote2", "quote3"];
    $("#getMessage").click(function(){
        var randomNumber = Math.floor(Math.random() * 3);
        // Only change code below this line.
        $(".message").text(quotes[randomNumber]);
        console.log(quotes);
    });
    
    
});

// $("#quote").click(function() {
//   $.getJSON(url, getQuote, 'jsonp');
// });

// api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en

