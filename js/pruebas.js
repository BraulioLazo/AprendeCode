function toggleNavigationMenu() {
    const menuIcon = document.querySelector(".menu-icon");
    const menuLines = document.querySelectorAll(".menu-icon__line");
    const navigationLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        menuLines.forEach((line, index) => {
            const animationClasses = [
                "menu-icon__line--rotate-one",
                "menu-icon__line--disappear",
                "menu-icon__line--rotate-three",
            ];

            line.classList.toggle(animationClasses[index]);
        });

        navigationLinks.classList.toggle("menu-open");
        navigationLinks.style.transform = navigationLinks.classList.contains("menu-open") ? "translateX(0)" : "translateX(-101%)";
    });
}

toggleNavigationMenu();


const adjustNavOnResize = () => {
    const navLinksElement = document.querySelector(".nav-links");
    const windowWidth = window.innerWidth;

    if (windowWidth > 1024) {
        navLinksElement.style.transform = "translateX(0)";
    } else {
        navLinksElement.style.transform = "translateX(-101%)";
    }
};

window.addEventListener('resize', adjustNavOnResize);

