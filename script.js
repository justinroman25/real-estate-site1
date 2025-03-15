document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded");

    // Smooth scrolling for navbar links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact Form Submission (Fake Auto Response)
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
    });
});
