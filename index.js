

const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");


/* =========================
   MOBILE MENU
========================= */

if (menuBtn && closeBtn && mobileNav) {

    menuBtn.addEventListener("click", () => {
        mobileNav.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });

}


/* =========================
   hover menu
========================= */


const menuLinks = document.querySelectorAll("[data-menu]");
const menuPanels = document.querySelectorAll("[data-menu-panel]");

let closeTimer;

function showMenu(menuName) {
    clearTimeout(closeTimer);

    menuPanels.forEach((panel) => {
        panel.classList.remove("show-menu", "hover-menu");
    });

    const panel = document.querySelector(
        `[data-menu-panel="${menuName}"]`
    );

    if (panel) {
        panel.classList.add("hover-menu", "show-menu");
    }
}

function closeMenu() {
    closeTimer = setTimeout(() => {
        menuPanels.forEach((panel) => {
            panel.classList.remove("show-menu", "hover-menu");
        });
    }, 200);
}

menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        showMenu(link.dataset.menu);
    });

    link.addEventListener("mouseleave", () => {
        closeMenu();
    });
});

menuPanels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
    });

    panel.addEventListener("mouseleave", () => {
        closeMenu();
    });
});


/* =========================
   REUSABLE CAROUSEL FUNCTION
========================= */

const setupCarousel = (containerId, leftId, rightId, scrollAmount) => {

    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftId);
    const rightBtn = document.getElementById(rightId);

    // Check whether all carousel elements exist
    if (!container || !leftBtn || !rightBtn) {
        console.error("Carousel elements not found:", containerId);
        return;
    }

    // Update the visibility of the arrow buttons
    const updateButtons = () => {

        const maxScroll = container.scrollWidth - container.clientWidth;

        leftBtn.disabled = container.scrollLeft <= 1;

        rightBtn.disabled = container.scrollLeft >= maxScroll - 1;

    };

    // Scroll to the left
    leftBtn.addEventListener("click", () => {

        container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });

    // Scroll to the right
    rightBtn.addEventListener("click", () => {

        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });

    // Update buttons while scrolling
    container.addEventListener("scroll", updateButtons);

    // Update buttons when the window is resized
    window.addEventListener("resize", updateButtons);

    // Set the initial button states
    updateButtons();

};


/* =========================
   INITIALIZE EACH CAROUSEL
========================= */

// Store Hero Carousel
setupCarousel(
    "storeContainer","storeLeft","storeRight",300 );

// Store Latest Carousel
setupCarousel("latestContainer","latestLeft","latestRight",430 );

// Store Accessories Carousel
setupCarousel( "accessContainer","accessLeft","accessRight",430 );

// Store difference Carousel
setupCarousel("diffContainer","diffLeft","diffRight",400 );

// Store help Carousel
setupCarousel("helpContainer","helpLeft", "helpRight",430);

// Store loud Carousel
setupCarousel("loudContainer","loudLeft", "loudRight",430);

// Store loud Carousel
setupCarousel("expContainer","expLeft", "expRight",430);

