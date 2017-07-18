var MAIN_IMAGE_SELECTOR = '[data-image-role="target"]'
var SIDE_IMAGE_LINK_SELECTOR = '[data-image-role="trigger"]'
var WHERE_TO_PUT_TITLE_TEXT = '[data-image-text="title"]'

function getURLFromThumbnail(thumbnail){
    return thumbnail.getAttribute('data-image-url');
}


function getTextFromThumbnail(thumbnail){
    console.log(thumbnail.getAttribute("data-image-title"));
    return thumbnail.getAttribute("data-image-title");
}

function setMainImage(imageURL, imgText){
    var mainImage = document.querySelector(MAIN_IMAGE_SELECTOR);
    mainImage.style.backgroundImage = "url(" + imageURL + ")"
    // console.log('this is working');

    var locationMainImageText = document.querySelector(WHERE_TO_PUT_TITLE_TEXT);
    $(".cover-image-text h1").text(imgText);
 

}

function setMainImageFromDetail(thumbnail){
    setMainImage(getURLFromThumbnail(thumbnail), getTextFromThumbnail(thumbnail));
}

function addClickEventTothumbnail(thumbnail){
    thumbnail.addEventListener('click', function(event){
        event.preventDefault();
        setMainImageFromDetail(thumbnail);
        
    });
}
function getArrayOfThumbnails(){
    var thumbnails = document.querySelectorAll(SIDE_IMAGE_LINK_SELECTOR)
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initialize(){
    var thumbnailArray = getArrayOfThumbnails();
    thumbnailArray.forEach(addClickEventTothumbnail);
}

initialize();

