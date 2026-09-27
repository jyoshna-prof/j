// ================= MOBILE MENU =================

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("active");

    });

});


// ================= RESERVATION FORM =================

const form = document.getElementById("reservationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message = document.getElementById("formMessage");


    // Basic validation

    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    if (phone === "") {
        message.textContent = "Please enter your contact number.";
        return;
    }

    if (phone.length < 10) {
        message.textContent = "Please enter a valid phone number.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email.";
        return;
    }

    if (date === "") {
        message.textContent = "Please select a reservation date.";
        return;
    }

    if (time === "") {
        message.textContent = "Please select a reservation time.";
        return;
    }


    // Success message

    message.textContent =
        "Reservation submitted successfully! We will contact you soon.";
        document.addEventListener("DOMContentLoaded", () => {
    // Find the link pointing to #about in your navbar
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutContent = document.getElementById('aboutContent');

    if (aboutLink && aboutContent) {
        aboutLink.addEventListener('click', (e) => {
            // Keep this if you don't want the page to jump down instantly
            // e.preventDefault(); 
            
            // Switch display from hidden to visible block
            if (aboutContent.style.display === "none") {
                aboutContent.style.display = "block";
                
                // Optional: Smoothly scroll down to the text once revealed
                aboutContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Keep your existing mobile toggle function below this if you have one
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}


    form.reset();

});