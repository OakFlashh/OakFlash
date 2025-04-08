document.addEventListener("DOMContentLoaded", function () {
let isFaded = false;
let isAnimating = false;

const fadeElements = [
    document.querySelector(".slide"),
    document.querySelector(".loadcover"),
    document.querySelector(".img1"),
    document.querySelector(".img2"),
    document.querySelector(".img3"),
    document.querySelector(".img4"),
    document.querySelector(".img5"),
    document.querySelector(".img6"),
    document.querySelector(".img7"),
    document.querySelector(".img8"),
    document.querySelector(".introBottom"),
    document.querySelector(".shadowBelow"),
    document.querySelector(".photo-illust"),
];


const fadeOutButtons = document.querySelectorAll(".slide, .loadcover");
const fadeInButtons = document.querySelectorAll(".logo");


fadeElements.forEach(element => {
    if (element) {
        element.style.opacity = "1";
        element.style.transition = "opacity 1s ease-in-out";
    }
});

function fadeOut() {
    if (!isFaded && !isAnimating) {
        isAnimating = true;

        fadeElements.forEach(element => {
            if (element) {
                element.style.opacity = "0";
                element.style.pointerEvents = "none"; 
            }
        });

        isFaded = true;

        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    }
}

function fadeIn() {
    if (isFaded && !isAnimating) {
        isAnimating = true;

        setTimeout(() => {
        fadeElements.forEach(element => {
            if (element) {
                element.style.opacity = "1";
                element.style.pointerEvents = "auto";
            }
        });
    }, 3000); 
        isFaded = false;

        setTimeout(() => {
            isAnimating = false;
        }, 1000); 
    }
}

fadeOutButtons.forEach(button => {
    button.addEventListener("click", fadeOut);
});

fadeInButtons.forEach(button => {
    button.addEventListener("click", fadeIn);
});
});