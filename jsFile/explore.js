//1. =========================================menu section=================== 

const menuOpen = document.querySelector("#open");
const menuClose = document.querySelector("#close");
const responsiveNav = document.querySelector("#responsiveNav");

menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    
    responsiveNav.style.top = "0";
});
menuClose.addEventListener("click", () => {
      menuOpen.style.display = "block";
    menuClose.style.display = "none";
   
    responsiveNav.style.top = "-100%";
});



// 2. ========================modal ========================

function openModal(modalNumber) {
  const modal = document.getElementById('modal' + modalNumber);
  modal.style.display = 'flex'; // Shows the modal
};


function closeModal(modalNumber) {

  const modal = document.getElementById('modal' + modalNumber);
  modal.style.display = 'none'; // Hides the modal
};

// Close the modal when user clicks outside of it
window.onclick = function(event) {
  for (let i = 1; i <= 3; i++) {
    const modal = document.getElementById('modal' + i);
    // If the user clicks directly on the modal background (not inside content)
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
};


//3. =====================search function============= 
const searchIcon = document.querySelector(".search-icon");
const searchBody = document.querySelector("#searchBody");
const searchClose = document.querySelector(".src-close");

searchIcon.addEventListener("click", () =>{
    searchBody.style.display = "flex";

});
searchClose.addEventListener("click", () => {
     searchBody.style.display = "none";
});


//4. ==================slider hero function================


const heroNxtBtn = document.querySelector("#heroNext");
const heroPrvBtn = document.querySelector("#heroPrev");
const heroSliderImg = document.querySelectorAll(".bg-slider-img");
const dot = document.querySelectorAll(".dot");
const heroSlider = document.querySelector(".slider-container"); // Use a single element for event listener

let counter = 0;
let length = heroSliderImg.length;
let defaultInterval;

// Next button
heroNxtBtn.addEventListener("click", nextSlider);

function nextSlider() {
    heroSliderImg[counter].style.animation = "next1 1s ease-in forwards";
    counter = (counter >= length - 1) ? 0 : counter + 1;
    heroSliderImg[counter].style.animation = "next2 1s ease-in forwards";
    dotIndecator();
}

// Prev button
heroPrvBtn.addEventListener("click", prevSlider);

function prevSlider() {
    heroSliderImg[counter].style.animation = "prev1 1s ease-in forwards";
    counter = (counter === 0) ? length - 1 : counter - 1;
    heroSliderImg[counter].style.animation = "prev2 1s ease-in forwards";
    dotIndecator();
}

// Update dot indicator
function dotIndecator() {
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[counter].classList.add('active');
}

// Auto slide
function autoRun() {
    defaultInterval = setInterval(() => {
        nextSlider();
    }, 8000);
}
autoRun();

// Stop on mouseover
heroSlider.addEventListener('mouseover', () => {
    clearInterval(defaultInterval);
});

// Resume on mouseout
heroSlider.addEventListener('mouseout', autoRun);

// Manual dot/image control
function changeImage(a) {
    let imageId = parseInt(a.getAttribute('attr'));

    if (imageId === counter) return;

    heroSliderImg[counter].style.animation = imageId > counter ? "next1 1s ease-in forwards" : "prev1s ease-in forwards";
    counter = imageId;
    heroSliderImg[counter].style.animation = imageId > counter ? "next2 1s ease-in forwards" : "prev1s ease-in forwards";

    dotIndecator();
};



//5. ===============history two================
const historyTwo = document.querySelector('.history-two');
const sliderTwoPrev = document.querySelector('#hLeft-btn');
const sliderTwoNext = document.querySelector('#hRight-btn');


sliderTwoNext.addEventListener('click', () => {
    historyTwo.style.scrollBehaviour = "smooth";
    historyTwo.scrollLeft += 1280;
    
});
sliderTwoPrev.addEventListener('click', () => {
    historyTwo.style.scrollBehaviour = "smooth";
    historyTwo.scrollLeft -= 1280;
    
});

//6. ==================================section one===================================
const buttonsOne = document.querySelectorAll(".btn_one");
const contentOne = document.querySelectorAll(".slideOne-content");


function filterSelectionOne(category) {
    // Show all if category is 'all', otherwise filter by category
    contentOne.forEach((a) => {
      if (category === "all" || a.classList.contains(category)) {
        a.classList.add('active-one');
        
      } else {
        a.classList.remove('active-one');
        
      }
    });
  }  
  filterSelectionOne("all");


buttonsOne.forEach((btn) => {
    btn.addEventListener("click", function () {
      
      buttonsOne.forEach((btn) => {
        btn.classList.remove('active-one')
      });
     
      btn.classList.add('active-one');
      
    });
  });