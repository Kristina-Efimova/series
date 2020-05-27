let slides = document.querySelectorAll('#slides .slide');

let currentSlide = 0;

function previousSlide() {
    const SLIDES_TO_SEE = 3;
    const FIRST_SLIDE_POSITION = 0;

    if (currentSlide === FIRST_SLIDE_POSITION) {
        for (let x = 0; x < slides.length; x++) {
            slides[currentSlide].className = 'slide showing';
            currentSlide++;
        }
        currentSlide = slides.length - 1;
    }

    for (let y = FIRST_SLIDE_POSITION; y < SLIDES_TO_SEE; y++) {
        slides[currentSlide].className = 'slide';
        currentSlide--;
    }

    if (currentSlide === -1) {
        currentSlide++;
    }

    return currentSlide;


}

function nextSlide() {
    const SLIDES_TO_SEE = 3;
    const FIRST_SLIDE_POSITION = 0;

    if (currentSlide === 5 || currentSlide === 2 || currentSlide === -1) {
        currentSlide++;
    }

    for (let x = FIRST_SLIDE_POSITION; x < SLIDES_TO_SEE; x++) {
        slides[currentSlide].className = 'slide showing';
        if (currentSlide === (slides.length - SLIDES_TO_SEE)) {
            currentSlide = FIRST_SLIDE_POSITION;
            for (let y = FIRST_SLIDE_POSITION; y < slides.length; y++) {
                slides[currentSlide].className = 'slide';
                currentSlide++;
            }
            return currentSlide = FIRST_SLIDE_POSITION;

        }
        currentSlide++;
    }

}

let right = document.getElementById('right');
let left = document.getElementById('left');

right.onclick = function () {
    nextSlide();
};
left.onclick = function () {
    previousSlide();
};
