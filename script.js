document.addEventListener("DOMContentLoaded", function() {
    console.log("Justin Roman - Iron Valley Real Estate Prestige Loaded");

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Sticky Header Effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Contact Form Submission to Follow Up Boss
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = contactForm.querySelector("input[name='name']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const phone = contactForm.querySelector("input[name='phone']").value.trim();
        const message = contactForm.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !message) {
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
                "Authorization": "Basic YOUR_FUB_API_KEY", // Replace with your key
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source: "Justin Roman Website",
                type: "Website Inquiry",
                person: {
                    firstName: name,
                    emails: [{ value: email }],
                    phones: phone ? [{ value: phone }] : []
                },
                description: message
            })
        })
        .then(response => response.ok ? response.json() : Promise.reject("Network error"))
        .then(data => {
            alert(`Thank you, ${name}! Justin will get back to you soon.`);
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an issue submitting your form. Please try again.");
        });
    });

    // Lazy Load Listings Placeholder
    const listingsSection = document.getElementById("listings");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById("idx-listings").innerHTML = `
                    <div class="listing-card"><h3>Luxury Villa</h3><p>$1,200,000 - 4 Beds, 3 Baths</p></div>
                    <div class="listing-card"><h3>Modern Condo</h3><p>$650,000 - 2 Beds, 2 Baths</p></div>
                `;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(listingsSection);
});
