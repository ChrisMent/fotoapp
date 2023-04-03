//! Onload Funktionen

function init() {
    includeHTML();
    loadImages();


}

//! Header und Footer in index.html laden

async function includeHTML() {
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = "Page not found";
        }
    }
}



//! Manuelle Bilderauswahl und Darstellung

let allImages = [

    'photos/alexander-grey.jpg',
    'photos/carson-arias.jpg',
    'photos/chris-lawton.jpg',
    'photos/david-kovalenko.jpg',
    'photos/diego.jpg',
    'photos/finn-hackshaw.jpg',
    'photos/hans-peter-gauster.jpg',
    'photos/ian-dooley.jpg',
    'photos/jonas.jpg',
    'photos/mike-dorner.jpg',
    'photos/park-troopers.jpg'

]

function loadImages() {
    for (let i = 0; i < allImages.length; i++) {
        document.getElementById('all-images').innerHTML +=
            `
    <div onclick="openImg(${i})" class="image-box">
        <img class="image-box" src="${allImages[i]}" alt="Gallery - Image (${i})">
    </div>
        
        `

    }

}


function openImg(i) {
    // Get the image's src attribute
    const imgSrc = document.querySelectorAll('.image-box img')[i].src;
    const imgAlt = document.querySelectorAll('.image-box img')[i].alt;

    // Get the modal and the image element
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');

    // Set the image source and display the modal
    modalImage.src = imgSrc;
    caption.innerHTML = imgAlt;
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    document.querySelector('.close').onclick = function () {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside of the modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}