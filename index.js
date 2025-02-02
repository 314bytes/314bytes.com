let slideIndex = 1

function openSlideshow(index) {
    slideIndex = index
    const slideshow = document.getElementById('slideshow')
    slideshow.classList.add('open')
    showSlides(index)
}

function showSlides(index) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (index > slides.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    const slideNumber = document.getElementById('slide-number')
    slideNumber.innerHTML = `${slideIndex}/8`
}

function closeSlideshow() {
    const slideshow = document.getElementById('slideshow')
    slideshow.classList.remove('open')
}

function goToNextSlide() {
    showSlides(slideIndex += 1)
}

function goToPreviousSlide() {
    showSlides(slideIndex -= 1)
}