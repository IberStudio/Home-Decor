// Variables and Consts
const mainHeader = document.querySelector("#main-header");
const navButton = document.querySelector("#nav-toggle");
const pageOvelay = document.querySelector("#page-overlay");
const projectNextButton = document.querySelector("#next-btn-overlay");
const projectScroll = document.querySelector("#project-img");
const scrollAmount = projectScroll.clientWidth;

document.addEventListener('DOMContentLoaded', () => {    
    let lastScrollY = window.scrollY;

    // Scroll Behavior
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        // Normal Scroll
        if (window.scrollY > 0){
            // Main Header
            mainHeader.style.width = "90%";
            mainHeader.style.borderRadius = "10px";
            mainHeader.style.marginTop = "8px";
            mainHeader.style.backgroundColor = "rgba(245, 236, 214, 0.7)";
            // Navbar Child
            document.querySelectorAll('.nav-anchor').forEach(link => {
                link.classList.add('active');
            });
            // Navbar Button
            navButton.style.color = "#626F47";
            // Logo
            document.querySelector('#your-logo').classList.add('active')
        } else {
            // Main Header
            mainHeader.style.width = "100%";
            mainHeader.style.borderRadius = "0px";
            mainHeader.style.marginTop = "0px";
            mainHeader.style.backgroundColor = "rgba(245, 236, 214, 0.0)";
            // Navbar Child
            document.querySelectorAll('.nav-anchor').forEach(link => {
                link.classList.remove('active');
            });
            // Navbar Button
            navButton.style.color = "#F5ECD5";
            // Logo
            document.querySelector('#your-logo').classList.remove('active');
        };
        // Navbar Hide Scroll
        if (currentScrollY > lastScrollY) {
            mainHeader.classList.add('hide');
            mainHeader.querySelector('.nav-bar').classList.remove('show');
        } else {
            mainHeader.querySelector('.nav-bar').classList.remove('show');
            mainHeader.classList.remove('hide');
        };
        lastScrollY = currentScrollY;
    });
    // Button Click
    // Project Click
    projectNextButton.querySelector('#left').addEventListener('click', () => {
        projectScroll.scrollLeft -= scrollAmount;
    });
    projectNextButton.querySelector('#right').addEventListener('click', () => {
        projectScroll.scrollLeft += scrollAmount;
    });
    // ==================== On Click Check =======================
    // Navbar Button
    navButton.addEventListener('click', () => {
        // Toggle
        mainHeader.querySelector('.nav-bar').classList.toggle("show");
        // mainPage.classList.toggle("blur");

    });
    // Control Class
    // setup observer buat pantau class
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.attributeName === "show") {
                console.log("Class berubah jadi:", mainHeader.querySelector('.nav-bar').className);
            }
    }});
    observer.observe(mainHeader.querySelector('.nav-bar'), {
        attributes: true,
        attributeFilter: ['show']
    });
});
// ======================== Function =============================
function openedNavBar(){
    // Condition
    if (mainHeader.querySelector('.nav-bar').classList.contains("show")){
        mainHeader.querySelector('#nav-toggle').innerHTML = "&#10005;";
    } else {
        mainHeader.querySelector('#nav-toggle').innerHTML = "&#9776;";
    };
}

// Call Every ___ Seconds
setInterval(openedNavBar, 100)