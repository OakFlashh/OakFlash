function changeImage(element) {
  const originalImageSrc = "images/LOGO.png"; 
  const newImageSrc = "images/LOGO-2.png"; 
  const duration = 100; 

  const img = element.querySelector("img");


  img.src = newImageSrc;


  setTimeout(() => {
      img.src = originalImageSrc;
  }, duration);
}

const slides = document.querySelectorAll('.slide');
const muteBG = document.querySelector('.muteBG');
let currentIndex = 0;
const initialDelay = 4000;
const slideInterval = 10000;
let slideshowIntervalId;
let isSlideshowPaused = false;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setTimeout(() => {
  showSlide(currentIndex);
  slideshowIntervalId = setInterval(nextSlide, slideInterval);
}, initialDelay);

if (muteBG) {
  muteBG.addEventListener('click', () => {
    if (isSlideshowPaused) {

      slideshowIntervalId = setInterval(nextSlide, slideInterval);
      isSlideshowPaused = false;
      console.log('Slideshow resumed.');

    } else {

      clearInterval(slideshowIntervalId);
      isSlideshowPaused = true;
      console.log('Slideshow paused.');

    }
  });
} else {
  console.error("Error: .muteBG element not found.");
}

  function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Manila' };
    document.getElementById('clock').textContent = new Intl.DateTimeFormat('en-GB', options).format(now);
}
setInterval(updateClock, 1000);
updateClock(); 


function updateCalendar() {
const now = new Date();
const options = { 
weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric', 
timeZone: 'Asia/Manila' 
};
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);

let [day, date] = formattedDate.split(', ');

if (day === 'Wednesday') {
day = 'WED';
}
if (day === 'Thursday') {
  day = 'THURS';
  }
  if (day === 'Saturday') {
    day = 'SAT';
    }
    if (day === 'Tuesday') {
      day = 'TUES';
      }

document.getElementById('calendar').textContent = `${day} | ${date}`;
}
updateCalendar();

document.addEventListener("DOMContentLoaded", function() {
  const photoButton = document.querySelector(".photo-button");
  const illustButton = document.querySelector(".illust-button");
  const revertTimeout = 130; 

  if (photoButton) {
    photoButton.addEventListener("click", function() {
      const originalImageSrc = "images/camera.png"; 
      const newImageSrc = "images/camera-2.png";  
      const img = this.querySelector("img");

      if (img) {
        img.src = newImageSrc;
        setTimeout(() => {
          img.src = originalImageSrc;
        }, revertTimeout);
      }
    });
  }

  if (illustButton) {
    illustButton.addEventListener("click", function() {
      const originalImageSrc = "images/paint.png"; 
      const newImageSrc = "images/paint-2.png"; 
      const img = this.querySelector("img");

      if (img) {
        img.src = newImageSrc;
        setTimeout(() => {
          img.src = originalImageSrc;
        }, revertTimeout);
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const photoButton = document.querySelector(".photo-button");
  const illustButton = document.querySelector(".illust-button");
  const photoIllustDiv = document.querySelector(".photo-illust");

  if (photoButton && photoIllustDiv) {
    photoButton.addEventListener("click", function() {
      photoIllustDiv.textContent = "photos";

      const originalImageSrc = "images/camera.png";
      const newImageSrc = "images/camera-2.png";
      const img = this.querySelector("img");
      if (img) {
        img.src = newImageSrc;
        setTimeout(() => {
          img.src = originalImageSrc;
        }, 200);
      }
    });
  }

  if (illustButton && photoIllustDiv) {
    illustButton.addEventListener("click", function() {
      photoIllustDiv.textContent = "illustrations";

      const originalImageSrc = "images/paint.png";
      const newImageSrc = "images/paint-2.png";
      const img = this.querySelector("img");
      if (img) {
        img.src = newImageSrc;
        setTimeout(() => {
          img.src = originalImageSrc;
        }, 200); 
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const emailElement = document.querySelector('.email');
  const lineElement = document.querySelector('.line');

  if (emailElement && lineElement) {
    emailElement.addEventListener('mouseenter', function() {
      lineElement.style.height = '11vw'; 
    });

    emailElement.addEventListener('mouseleave', function() {
      lineElement.style.height = '10vw'; 
    });
  }
});


  function enableBodyScroll() {
    document.body.style.overflowY = "auto"; 
  }


  function disableBodyScroll() {
    document.body.style.overflowY = "hidden"; 
  }

  
  const imageClasses = [".img1", ".img2", ".img3", ".img4", ".img5", ".img6", ".img7", ".img8"];
  imageClasses.forEach(className => {
    const imgElement = document.querySelector(className);
    if (imgElement) {
      imgElement.addEventListener("click", () => {
        setTimeout(enableBodyScroll, 2800); 
      });
    }
  });


  const logoElement = document.querySelector(".logo");
  if (logoElement) {
    logoElement.addEventListener("click", disableBodyScroll);
  }

  const photoContainer = document.querySelector('.photoContainer');
  const photoBackground = document.querySelector('.photoBackground');
  const illustButton = document.querySelector('.illust-button');
  const photoButton = document.querySelector('.photo-button');
  const originalPhotoContainerLeft = photoContainer ? getComputedStyle(photoContainer).left : '0px';
  const originalPhotoBackgroundLeft = photoBackground ? getComputedStyle(photoBackground).left : '0px';

  if (illustButton && photoContainer && photoBackground) {
    illustButton.addEventListener('click', () => {
      photoContainer.style.transition = 'left 0s';
      photoContainer.style.left = '-150vw';
      photoBackground.style.transition = 'left 0s';
      photoBackground.style.left = '-150vw';
    });
  }

  if (photoButton && photoContainer && photoBackground) {
    photoButton.addEventListener('click', () => {
      photoContainer.style.transition = 'left 0.3s ease-in-out';
      photoContainer.style.left = originalPhotoContainerLeft;
      photoBackground.style.transition = 'left 0.3s ease-in-out';
      photoBackground.style.left = originalPhotoBackgroundLeft;
    });
  }


        const mut2eButton = document.getElementById('muteButton');
        const volumeOnImageSrc = 'images/volume.png'; 
        const volumeOffImageSrc = 'images/volume-2.png';   
        
        if (mut2eButton) {
          mut2eButton.addEventListener('click', () => {
            const imgElement = mut2eButton.querySelector('img');
            if (imgElement) {
              if (imgElement.src.endsWith(volumeOnImageSrc)) {
                imgElement.src = volumeOffImageSrc;
              } else {
                imgElement.src = volumeOnImageSrc;
              }
            }
          });
        }



