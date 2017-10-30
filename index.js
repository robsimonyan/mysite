var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

var rotateImages = document.querySelectorAll('.description img');
for(var i = 0; i < rotateImages.length; i++){
    rotateImages[i].style.transform = 'rotate(-180deg)';
}

function scrolled() {
    for(var i = 0; i < rotateImages.length; i++){
        rotateImages[i].style.transform = 'rotate('+(-180 + window.pageYOffset/2 + i*15)+'deg)';
    }
}

var scr = document.getElementsByClassName('scroll')[0];
scr.style.opacity = "0";


window.addEventListener('scroll', scrumb);
window.addEventListener('scroll', scrolled);
scr.addEventListener('click', function () {
    window.scrollTo({"left": "0", "top" : "0", "behavior" : "smooth"});
});

function scrumb() {
    var foot = document.querySelector('.foot').offsetTop;
    if(window.pageYOffset >0){
        scr.style.opacity = "1";
    }else{
        scr.style.opacity = "0";
    }

    if(window.pageYOffset > foot - 636){
        scr.style.borderColor = "white";
        scr.style.background = 'white';
    }else{
        scr.style.borderColor = "";
        scr.style.background = "";
    }
}

var collapse = document.querySelector('.collapse');
var header = document.querySelector('header');

collapse.addEventListener('click', function () {
    header.classList.toggle('clicked');
    collapse.classList.toggle('changed');
});

var d = document.querySelector(".map");

var options = {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(d, options);

function success(position) {
    var loc = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);
    map.setCenter(loc);
    var label = new google.maps.InfoWindow();
    label.setContent("You are here!");
    label.setPosition(loc);
    label.open(map);
}

function initMap() {
    var options = {
        zoom: 8,
        center: {lat: 40.151864, lng: 44.483192}
    };
    var map = new google.maps.Map(d, options);
}

function error() {
    initMap();
}

params = {
    enableHighAccuracy: true,
    timeout: 10000
};

navigator
    .geolocation
    .getCurrentPosition(success, error, params);



// var geocoder = new google.maps.Geocoder();
// geocoder.geocode({
//     "address": inputAddress
// }, function(results) {
//     console.log(results[0].geometry.location); //LatLng
// });







