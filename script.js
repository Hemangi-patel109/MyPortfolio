const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const aboutSection = document.querySelector(".about-section");
const aboutBox = document.querySelector(".about-box");
const aboutTitle = document.querySelector(".head1");
const aboutPara = document.querySelector(".about-box p");

function animateAboutSection() {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 100) {
        aboutBox.classList.add("about-animate");
        aboutTitle.classList.add("about-title-animate");
        aboutPara.classList.add("about-para-animate");
        window.removeEventListener("scroll", animateAboutSection);
    }
}

window.addEventListener("scroll", animateAboutSection);
ndow.addEventListener("scroll", animateAboutSection);
