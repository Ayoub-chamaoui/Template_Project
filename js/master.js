// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg","img06.jpg"] 

setInterval(() => {

    // Get Random number 
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber]+'")';
},5000);
