const menuItems = document.querySelectorAll(".menu-item");
const dropdown = document.getElementById("dropdown");
const content = document.getElementById("dropdown-content");

let hideTimeout;

menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
        dropdown.style.display = "block";

        var menu = item.dataset.menu;
        var menu = item.dataset.menu;

        if (menu === "home") {
            content.innerHTML = `
                <a class="anker" href=""><div class="box">Main Items</div> </a>
                <a class="anker" href=""> <div class="box">T shirt</div></a>
                <a class="anker" href=""> <div class="box">Trending Items</div></a>
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


