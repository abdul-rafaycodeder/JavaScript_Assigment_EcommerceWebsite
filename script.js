const menuItems = document.querySelectorAll(".menu-item");
const dropdown = document.getElementById("dropdown");
const content = document.getElementById("dropdown-content");

let hideTimeout;

menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
        dropdown.style.display = "block";

        var menu = item.dataset.menu;

        if (menu === "home") {
            content.innerHTML = `
                <a class="anker" href="#main-itemss"><div class="box">Main Items</div> </a>
                <a class="anker" href="#T-shirts-main"> <div class="box">T shirt</div></a>
                <a class="anker" href="#Trending"> <div class="box">Trending Items</div></a>
            `;
        }

        if (menu === "Women") {
            content.innerHTML = `
                <div class="box">T shirt</div>
                <div class="box">Shoes</div>
                <div class="box">Parse</div>
            `;
        }

        if (menu === "Men") {
            content.innerHTML = `
                  
                <a class="anker" href=""><div class="box">Shoes</div></a>
                <a class="anker" href=""><div class="box">Wallet</div></a>
                <a class="anker" href=""><div class="box">Watches</div></a>
                <a class="anker" href=""><div class="box">Muffler</div></a>
                <a class="anker" href=""><div class="box">Overcoat</div></a>
                <a class="anker" href=""><div class="box">Jackets</div></a>
                <a class="anker" href=""><div class="box">Puffer</div></a>

            `;
        }

        if (menu === "Kids Items") {
            content.innerHTML = `
                <a class="anker" href=""><div class="box">Latest</div></a>
                <a class="anker" href=""><div class="box">Jackets</div></a>
                <a class="anker" href=""><div class="box">Coats</div></a>
                <a class="anker" href=""><div class="box">Shoes</div></a>

               
            `;
        }

        if (menu === "portfolio") {
            content.innerHTML = `
                
            `;
        }
    });

    item.addEventListener("mouseleave", () => {
        hideWithDelay();
    });
});

dropdown.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
});

dropdown.addEventListener("mouseleave", () => {
    hideWithDelay();
});

function hideWithDelay() {
    hideTimeout = setTimeout(() => {
        dropdown.style.display = "none";
    }, 200); // smooth professional delay
}


// <!-- ------------------------------Main styleing---------------------------- -->


//  <!-- ---------carousel------- -->


const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

/* Dot Click */
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});

/* Auto Play */
setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
}, 4000);


// <!-- -------------------Cards--------------------- -->


// // First card
// var card5 = document.getElementById('card5');
// const card4Img = document.getElementById('card4-img');

// card5.addEventListener('mouseover', () => {
//     card4Img.src = './images/image4.png'; // New image on hover
// });

// card5.addEventListener('mouseout', () => {
//     card4Img.src = './images/image5.png'; // Original image on mouseout
// });

const images = document.querySelectorAll('.card1 img');

images.forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
        img.src = "./images/image5.png";
    });

    img.addEventListener('mouseleave', () => {
        img.src = "./images/image6.png";
    });
});


// <!-- -------------------video cards--------------- -->


const videos = document.querySelectorAll('.video-card video');

videos.forEach(video => {

    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

});


// <!-- ------------------T shirts-------------- -->

// first
function changeImage() {
    var image = document.getElementById("image");

    image.src = "./images/t2.png";
}

function originalImage() {
    var image = document.getElementById("image");

    image.src = "./images/T3.png";
}

// second
function changeImage2() {
    var image = document.getElementById("image2");

    image.src = "./images/t4.png";

}

function originalImage2() {
    var image = document.getElementById("image2");

    image.src = "./images/t2.png";
}

// 3th

function changeImage3() {
    var image = document.getElementById("image3");

    image.src = "./images/t2.png";
}

function originalImage3() {
    var image = document.getElementById("image3");

    image.src = "./images/t3.png";
}

// 4th

function changeImage4() {
    var image = document.getElementById("image4");

    image.src = "./images/t3.png";
}

function originalImage4() {
    var image = document.getElementById("image4");

    image.src = "./images/t4.png";
}
// <!-- ----------------------Trending--------------------- -->


// - //

const headers = document.querySelectorAll('.policy-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const wrapper = header.parentElement;
        const toggle = header.querySelector('.toggle');

        wrapper.classList.toggle('active');

        toggle.textContent = wrapper.classList.contains('active') ? '−' : '+';
    });
});


// footer


gsap.registerPlugin(ScrollTrigger);

/* =========================
   GLOBAL SMOOTH FEEL
========================= */
gsap.defaults({
    ease: "power3.out",
    duration: 1
});

/* =========================
   NAVBAR LOAD ANIMATION
========================= */
gsap.from(".top-nav a, .top-nav span, .fav-icon", {
    opacity: 1,
    stagger: 5
});

gsap.from(".logo", {
    scale: 30,
    opacity: 1
});

gsap.from(".menu .nav-item", {
    y: -10,
    opacity: 1,
    stagger: 0.1
});

/* =========================
   DROPDOWN GSAP (professional)
========================= */
gsap.set(".dropdown", { y: -20, opacity: 0 });

menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(".dropdown", {
            display: "block",
            y: 0,
            opacity: 1,
            duration: 0.4
        });
    });
});

dropdown.addEventListener("mouseleave", () => {
    gsap.to(".dropdown", {
        y: -20,
        opacity: 0,
        duration: 0.3,
        onComplete: () => dropdown.style.display = "none"
    });
});

/* =========================
   CAROUSEL ANIMATION
========================= */
gsap.from(".carousel", {
    scrollTrigger: {
        trigger: ".carousel",
        start: "top 80%"
    },
    scale: 0.9,
    opacity: 0
});

/* =========================
   CARDS STAGGER (ALL SECTIONS)
========================= */
gsap.utils.toArray(".card, .card1").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 60,
        opacity: 0
    });
});

/* =========================
   VIDEO CARD HOVER SMOOTH
========================= */
document.querySelectorAll(".video-card, .video-card1").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.08, duration: 0.4 });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.4 });
    });
});

/* =========================
   SECTION HEADINGS REVEAL
========================= */
gsap.utils.toArray(
    "#Most-Loved-Products h2, #Top-Wishes h2, #Trending-main h2, #Style-in-Motion h1"
).forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%"
        },
        y: 40,
        opacity: 0
    });
});

/* =========================
   MARQUEE SMOOTH FLOAT
========================= */
gsap.to(".marquee", {
    x: "-50%",
    duration: 20,
    ease: "linear",
    repeat: -1
});

/* =========================
   POLICY ACCORDION ANIMATION
========================= */
document.querySelectorAll(".policy-wrapper").forEach(wrapper => {
    const content = wrapper.querySelector(".policy-content");

    ScrollTrigger.create({
        trigger: wrapper,
        start: "top 90%",
        onEnter: () => {
            gsap.from(wrapper, {
                opacity: 0,
                y: 30,
                duration: 0.6
            });
        }
    });
});

/* =========================
   FOOTER REVEAL
========================= */
gsap.from(".newsletter-container, footer", {
    scrollTrigger: {
        trigger: ".newsletter",
        start: "top 85%"
    },
    y: 80,
    opacity: 0,
    stagger: 0.2
});

// input


const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();

    if (value.includes('trending')) {
        document.getElementById('Trending-main').scrollIntoView({ behavior: 'smooth' });
    } else if (value.includes('main items')) {
        document.getElementById('main-itemss').scrollIntoView({ behavior: 'smooth' });
    } else if (value.includes('t shirts')) {
        document.getElementById('T-shirts-main').scrollIntoView({ behavior: 'smooth' });
    } 
});
