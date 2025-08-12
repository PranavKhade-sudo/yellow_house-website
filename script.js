// Smooth Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const positionFromTop = el.getBoundingClientRect().top;
            if (positionFromTop < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Navbar Color Change on Scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "#111";
    } else {
        nav.style.background = "#222";
    }
});
