// Contact Form
function openForm() {
    document.getElementById("contactForm").style.display = "block";
}
function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Optional: auto-slideshow
setInterval(() => {
    plusSlides(1);
}, 5000); // slides change every 5 seconds

// Close contact form when clicking outside
document.addEventListener("click", function(event){
    if (!event.target.closest(".form-popup") && !event.target.closest(".contact") && !event.target.closest(".Pop_Up_Button")) {
        closeForm();
    }
});