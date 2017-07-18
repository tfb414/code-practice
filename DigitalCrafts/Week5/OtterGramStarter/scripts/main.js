var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
var DETAIL_IMAGE_TITLE = '[data-image-role="title"]'
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

function randomNumberFrom(thumbnailArray){
    return Math.floor((Math.random()*thumbnailArray.length));
}

function getLinkFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-url');
}

function getTitleFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-title');
}

function setDetailImage(imageURL, titleText){
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageURL)

    var detailTitle = document.querySelector(DETAIL_IMAGE_TITLE);
    detailTitle.textContent = titleText;
}

function changeThumbToDetail(thumbnail){
    setDetailImage(getLinkFromThumb(thumbnail), getTitleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
    thumb.addEventListener('click', function(event){
        event.preventDefault();
        changeThumbToDetail(thumb);
    });
}

function getThumbnailsArray(){
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}


function initializeEvents(){
    var thumbnails = getThumbnailsArray();
    changeThumbToDetail(thumbnails[randomNumberFrom(thumbnails)]);
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();