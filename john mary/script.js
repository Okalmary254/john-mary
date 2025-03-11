
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamic year in footer
  document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} John Mary Nyajura. All rights reserved.`;

//small arrow function
  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    // Show/hide the arrow based on scroll position
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    // Scroll to top when the arrow is clicked
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll
      });
    });
  });

    document.addEventListener("DOMContentLoaded", function () {
      const readMoreButton = document.getElementById("read-more");
        const paragraph = document.querySelector(".mobile-paragraph");
     
        readMoreButton.addEventListener("click", function () {
          paragraph.classList.toggle("expanded");
          readMoreButton.textContent = paragraph.classList.contains("expanded")
            ? "Read Less"
            : "Read More";
      });
    });
      

    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("hamburger");
        const navLinks = document.getElementById("nav-links");
      
        // Toggle navigation menu
        hamburger.addEventListener("click", function () {
          hamburger.classList.toggle("active");
          navLinks.classList.toggle("active");
        });
      
        // Auto-hide navigation bar after 5 seconds when a link is clicked
        const navLinksList = document.querySelectorAll(".nav-links a");
        navLinksList.forEach((link) => {
          link.addEventListener("click", function () {
            // Close the navigation menu
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
      
            // Automatically hide the navigation bar after 5 seconds
            setTimeout(() => {
              navLinks.style.display = "none";
            }, 5000); // 5000 milliseconds = 5 seconds
      
            // Reset the display property after hiding
            setTimeout(() => {
              navLinks.style.display = "flex";
            }, 5001); // Reset immediately after hiding
          });
        });
      });

      function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        const chevron = dropdown.previousElementSibling.querySelector("i");
      
        // Toggle dropdown visibility
        dropdown.classList.toggle("active");
      
        // Rotate chevron icon
        chevron.classList.toggle("fa-chevron-up");
        chevron.classList.toggle("fa-chevron-down");
      }