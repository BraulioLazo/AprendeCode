

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

