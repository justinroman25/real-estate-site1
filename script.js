document.addEventListener("DOMContentLoaded", function() {
    console.log("Iron Valley Real Estate Prestige Loaded");

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Navbar Scroll Effect (Sticky Enhancement)
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Contact Form Submission to Follow Up Boss
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Gather form data
        const name = contactForm.querySelector("input[name='name']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const phone = contactForm.querySelector("input[name='phone']").value.trim();
        const message = contactForm.querySelector("textarea[name='message']").value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Send to Follow Up Boss (Replace YOUR_FUB_API_KEY with your actual key)
        fetch("https://api.followupboss.com/v1/events", {
            method: "POST",
            headers: {
                "Authorization": "Basic YOUR_FUB_API_KEY", // Base64 encode your API key
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source: "Iron Valley Website",
                type: "Website Inquiry",
                person: {
                    firstName: name,
                    emails: [{ value: email }],
                    phones: phone ? [{ value: phone }] : []
                },
                description: message
            })
        })
        .then(response => {
            if (!response.ok) throw new Error("Failed to send to Follow Up Boss");
            return response.json();
        })
        .then(data => {
            alert(`Thank you, ${name}! We've received your inquiry and will respond soon.`);
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an issue submitting your form. Please try again later.");
        });
    });

    // Lazy Load Listings Section (Showcase IDX Placeholder)
    const listingsSection = document.getElementById("listings");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadListingsPlaceholder();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(listingsSection);

    // Placeholder function for listings (replace with Showcase IDX in WordPress)
    function loadListingsPlaceholder() {
        const listingsContainer = document.getElementById("idx-listings");
        const placeholderContent = `
            <div class="listing-card">
                <h3>Luxury Estate</h3>
                <p>$1,500,000 - 5 Beds, 4 Baths</p>
            </div>
            <div class="listing-card">
                <h3>Coastal Condo</h3>
                <p>$850,000 - 3 Beds, 2 Baths</p>
            </div>
        `;
        listingsContainer.innerHTML = placeholderContent;
    }

    // YouTube Video Play/Pause Toggle (Optional)
    const youtubeIframe = document.querySelector(".youtube-container iframe");
    if (youtubeIframe) {
        document.querySelector(".youtube-link").addEventListener("click", function(e) {
            // Optional: Add play/pause logic if needed via YouTube API
            console.log("Navigating to YouTube channel");
        });
    }
});
