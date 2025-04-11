
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
      

    // Mobile Nav Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
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

   
// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Disable submit button
  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.querySelector('.button-text').textContent = 'Sending...';
  
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      formStatus.textContent = 'Message sent successfully!';
      formStatus.style.color = '#4BB543';
      contactForm.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    formStatus.textContent = 'Oops! There was a problem sending your message.';
    formStatus.style.color = '#FF0000';
    console.error('Error:', error);
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('.button-text').textContent = 'Send Message';
    
    // Hide status message after 5 seconds
    setTimeout(() => {
      formStatus.textContent = '';
    }, 5000);
  }
});