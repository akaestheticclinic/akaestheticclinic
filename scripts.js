
    // Mobile Menu Toggle
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        navLinks.classList.toggle('active');
        // Animate menu toggle icon
        menuToggle.classList.toggle('active');
    }
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        });
    });
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Form Submission Handler
    document.getElementById('consultationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Collect form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };
        // Simulated form submission (replace with actual backend logic)
        try {
            // Here you would typically send data to a backend service
            console.log('Form Submission Data:', data);
            // Show success message
            alert('Thank you for your consultation request! We will contact you soon.');
            // Reset form
            this.reset();
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error submitting your request. Please try again.');
        }
    });
    // Scroll Header Animation
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 5%';
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 5%';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }
    });
    
    
    // When the page loads, attach click event to the 'BOOK NOW' button
    document.querySelectorAll('.offer').forEach(button => {
        button.addEventListener('click', function() {
            // Get the service title (the h3 text inside the card)
            let serviceTitle = this.closest('.service-card').querySelector('h3').innerText;

            // Create the WhatsApp message with the service title
            let message = `Hello, I am interested in the service: ${serviceTitle}.`;

            // Set the WhatsApp link with the message
            let phoneNumber = '923348663444'; // Replace with the actual phone number
            let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Redirect to WhatsApp
            window.location.href = url;
        });
    });
    

    
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }

  function updateClinicStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hours = now.getHours();
    const statusElement = document.getElementById('clinic-status');

    if (day === 0) {
      statusElement.innerHTML = '<i class="fas fa-times-circle"></i> Closed Today';
      statusElement.style.color = 'red';
    } else if (hours >= 11 && hours < 19) {
      statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Open Now';
      statusElement.style.color = 'var(--secondary-color)';
    } else {
      statusElement.innerHTML = '<i class="fas fa-times-circle"></i> Closed Now';
      statusElement.style.color = 'red';
    }
  }

  // Update clinic status on page load
  updateClinicStatus();
