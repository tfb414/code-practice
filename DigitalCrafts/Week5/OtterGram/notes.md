var theCaption = document.getElementsByTagName("p")[0];
theCaption.textContent = "hey there"

theCaption.setAttribute("data-derp", "awesome")
document.querySelectorAll("[data-derp='awesome']");
document.querySelector("[data-derp='awesome']");

//write a function "getData(data-derp[awesome])"


var body = document.querySelector('body'); //selects the first thing
var theContainer = document.querySelectorAll(".container"); //selects everything



//collections of things like class names
//you can search for certain things
//don't lock together your CSS and your javascript together. use data attributes instead.

<a href="otter.jpg" data-target="trigger">click here for otters!</a>

<div class = "container" data-target="top-level-container">
    -stuff goes here-
</div>

//selector for data attribute

var aNewDiv = document.createElement('div');
var anAnchor = document.createElement('a');

anAnchor.setAtrtibute('href', '#');
anAnchor.textContent = 'click here for goodness'

aNewDiv.appendChild(anAnchor);
document.body.appendChild(aNewDiv);

document.body.removeChild(aNewDiv)

var navs = [
    {
        href: "www.google.com",
        text: "search on google"
    },
    {
        href: "www.tim.com",
        text: "click here"
    }
]

varNavContainer = document.querySelector(".nav-container") //you should be using data targets instead of this
navs.forEach(function (nav)){
    var navElement = document.createElement("a");
    navElement.setAttribute('href, nav.href');
    navElement.textContent = nav.text;
    navcontainer.appendChild(navElement);
}

// changing class names
//look up class list api you can also toggle

var nav = document.querySelectorAll('.navContainer a')[0];
nav.classList.add("active");

//removing
var nav = document.querySelectorAll('.navContainer a');
navs.forEach(function(nav){
    nav.classList.remove('active');
});


//events


//recommended structure

    // constants
    // variables
    // helper functions
    // main function

var detail_image_selector = '[data-image-role="target"]'

function setDetails(imageURL, titleText){
    var detailImage = document.querySelector(detail_image_selectors);
    detailImage.setAttribute('src', imgUrl);

    var detailTitle = document.querySelector(DetaiL-Title_select)
    detailImage.setSttribute("src", imageURL);
}

//write 3 functions to make changes. The first to get the URL, the other to get the title
//then do setdetails from thum to and use"setDetails"

//function that adds events to each thumbnail. just call the "set details form thum which puts together all three of thsoe together"

//you put that information in the img then you can write javascript that grabs it and sets it up


//main function

function initlaizeEvents(){
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler)
}