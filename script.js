document.addEventListener("DOMContentLoaded", function() {
    console.log("Justin Roman Website Loaded");

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Header Scroll Effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Contact Form Submission (Follow Up Boss)
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const fname = contactForm.querySelector("input[name='fname']").value.trim();
        const lname = contactForm.querySelector("input[name='lname']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const phone = contactForm.querySelector("input[name='phone']").value.trim();
        const message = contactForm.querySelector("textarea[name='message']").value.trim();

        if (!fname || !lname || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        fetch("https://api.followupboss.com/v1/events", {
            method: "POST",
            headers: {
                "Authorization": "Basic YOUR_FUB_API_KEY", // Replace with your API key
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source: "Justin Roman Website",
                type: "Website Inquiry",
                person: {
                    firstName: fname,
                    lastName: lname,
                    emails: [{ value: email }],
                    phones: phone ? [{ value: phone }] : []
                },
                description: message
            })
        })
        .then(response => response.ok ? response.json() : Promise.reject("Error"))
        .then(() => {
            alert(`Thank you, ${fname}! I’ll get back to you soon.`);
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Submission failed. Please try again.");
        });
    });

    // Placeholder for Testimonials Slider (Static for now)
    const testimonials = document.querySelector(".testimonials-slider");
    let index = 0;
    setInterval(() => {
        testimonials.children[index].style.display = "none";
        index = (index + 1) % testimonials.children.length;
        testimonials.children[index].style.display = "block";
    }, 5000);
});
