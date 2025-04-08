document.addEventListener("DOMContentLoaded", function () {
let movedLeft = false;
let isAnimating = false;

const movingElements = [
    document.querySelector(".quadrantOne"),
    document.querySelector(".a0"),
    document.querySelector(".a1"),
    document.querySelector(".a2"),
    document.querySelector(".a3"),
    document.querySelector(".a4"),
    document.querySelector(".a5"),
    document.querySelector(".a6"),
    document.querySelector(".a7"),
    document.querySelector(".quadrantThree"),
    document.querySelector(".c1"),
    document.querySelector(".c2"),
    document.querySelector(".c3"),
    document.querySelector(".c4"),
    document.querySelector(".c5"),
    document.querySelector(".c6"),
    document.querySelector(".c7"),
    document.querySelector(".c8"),
    document.querySelector(".messageblock"),
];

const movingRightElements = [
    document.querySelector(".quadrantTwo"),
    document.querySelector(".b0"),
    document.querySelector(".b1"),
    document.querySelector(".b2"),
    document.querySelector(".b3"),
    document.querySelector(".b4"),
    document.querySelector(".b5"),
    document.querySelector(".b6"),
    document.querySelector(".b7"),
    document.querySelector(".b8"),
    document.querySelector(".b9"),
    document.querySelector(".b10"),
    document.querySelector(".quadrantFour"),
    document.querySelector(".d2"),
    document.querySelector(".quadrantFourContainer")
];

const movingDownElements = [
    document.querySelector(".cornerC"),
    document.querySelector(".cornerD"),
    document.querySelector(".bottom")

];

const movingUpElements = [
    document.querySelector(".bodyCover")
    

];

const galleryButtons = document.querySelectorAll(
".slideshow, .slide, .slide-active"
);

const siahgallery = document.querySelector(".logo");

[...movingElements, ...movingRightElements, ...movingDownElements, ...movingUpElements].forEach(element => {
    if (element) {
        element.style.transform = "translate(0, 0)";
        element.style.transition = "transform 2s ease-in-out";
    }
});

function moveElements() {
    if (!movedLeft && !isAnimating) {
        isAnimating = true;

        setTimeout(() => {
        movingElements.forEach(element => {
            if (element) element.style.transform = "translateX(-50vw)";
        });
    }, 1600); 
        
        setTimeout(() => {
        movingRightElements.forEach(element => {
            if (element) element.style.transform = "translateX(50vw)";
        });
    }, 1600); 

        setTimeout(() => {
        movingDownElements.forEach(element => {
            if (element) element.style.transform = "translateY(1206vh)";
        });
    }, 2800); 

        setTimeout(() => {
            movingUpElements.forEach(element => {
                if (element) element.style.transform = "translateY(-100vh)";
            });
        }, 0); 

        movedLeft = true;
        galleryButtons.forEach(btn => (btn.style.pointerEvents = "none"));
        siahgallery.style.pointerEvents = "auto";

        setTimeout(() => {
            isAnimating = false;
        }, 2000);
    }
}

function resetElements() {
    if (movedLeft && !isAnimating) {
        isAnimating = true;

        setTimeout(() => {
        movingElements.forEach(element => {
            if (element) element.style.transform = "translateX(0)";
        });
        }, 2000);

        setTimeout(() => {
        movingRightElements.forEach(element => {
            if (element) element.style.transform = "translateX(0)";
        });
        }, 2000);

        movingDownElements.forEach(element => {
            if (element) element.style.transform = "translateY(0)";
        });

        
        movingUpElements.forEach(element => {
            if (element) element.style.transform = "translateY(0)";
        });

        movedLeft = false;
        galleryButtons.forEach(btn => (btn.style.pointerEvents = "auto"));
        siahgallery.style.pointerEvents = "none";

        setTimeout(() => {
            isAnimating = false;
        }, 2000);
    }
}

galleryButtons.forEach(button => {
    button.addEventListener("click", moveElements);
});

siahgallery.addEventListener("click", resetElements);
});


document.addEventListener("DOMContentLoaded", function () {
let movedLeft = false;
let isAnimating = false;

const movingRightElementsNew = [
    document.querySelector(".photoGallery"),
    document.querySelector(".photoGalleryCover"),
];

function moveNewMovingElements() {
    movingRightElementsNew.forEach(element => {
        if (element) {
            element.style.transform = "translateX(-3000px)";
            element.style.transition = "none";
        }
    });
}

function resetNewMovingElements() {
    movingRightElementsNew.forEach(element => {
        if (element) {
            element.style.transform = "translateX(0)";
            element.style.transition = "none";
        }
    });
}

document.querySelector(".illust-toggle").addEventListener("click", moveNewMovingElements);
document.querySelector(".photo-toggle").addEventListener("click", resetNewMovingElements);
});
