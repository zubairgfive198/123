// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("header nav ul");
    navMenu.addEventListener("mouseover", function() {
        this.classList.add("active");
    });
    navMenu.addEventListener("mouseout", function() {
        this.classList.remove("active");
    });
});

// Add event listener to portfolio items
document.addEventListener("DOMContentLoaded", function() {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            this.classList.add("active");
        });
        item.addEventListener("mouseout", function() {
            this.classList.remove("active");
        });
    });
});