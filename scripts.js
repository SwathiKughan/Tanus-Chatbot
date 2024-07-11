document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    // Toggle navbar on click
    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    // Close the navbar when a link is clicked (for mobile view)
    document.querySelectorAll('.nav-link').forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Function to handle screen resizing
    function handleResize() {
        if (window.innerWidth >= 992) { // Bootstrap's lg breakpoint
            navbarCollapse.classList.remove('show');
        }
    }

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
});


document.addEventListener('DOMContentLoaded', function () {
    const textCol = document.querySelector('.col-md-5');
    const imgCol = document.querySelector('.img-col img');

    // Function to handle screen resizing
    function handleResize() {
        if (window.innerWidth < 768) { // Bootstrap's md breakpoint
            textCol.style.padding = '2cm 1cm';
            textCol.style.textAlign = 'center';
            imgCol.style.marginLeft = '0';
            imgCol.style.marginTop = '1cm';
        } else if (window.innerWidth < 576) { // Bootstrap's sm breakpoint
            textCol.style.padding = '1cm 1cm';
        } else {
            textCol.style.padding = '5cm 1cm';
            textCol.style.textAlign = 'left';
            imgCol.style.marginLeft = '1cm';
            imgCol.style.marginTop = '1cm';
        }
    }

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
});

window.addEventListener('resize', function() {
    const testimonialSection = document.querySelector('.testimonial-section');
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (window.innerWidth <= 768) {
        testimonials.forEach(testimonial => {
            testimonial.style.width = '90%';
            testimonial.style.margin = '10px auto';
        });
    } else if (window.innerWidth <= 576) {
        testimonials.forEach(testimonial => {
            testimonial.style.width = '100%';
            testimonial.style.margin = '10px auto';
        });
    } else {
        testimonials.forEach(testimonial => {
            testimonial.style.width = '300px';
            testimonial.style.margin = '10px';
        });
    }
});



let currentActiveLink = null;

function changeImage(id) {
    const image = document.getElementById("case-study-image");
    const links = document.querySelectorAll('.case-study-link');
    const activeLink = document.getElementById(id);

    // Remove active class from previous link
    if (currentActiveLink) {
        currentActiveLink.classList.remove('active');
        currentActiveLink.querySelector('h2').classList.remove('active');
    }

    // Update image src
    switch (id) {
        case "01":
            image.src = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study1.jpg";
            break;
        case "02":
            image.src = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study2.jpg";
            break;
        case "03":
            image.src = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study3.jpg";
            break;
        case "04":
            image.src = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study4.jpg";
            break;
        default:
            break;
    }

    // Add active class to current link
    activeLink.classList.add('active');
    activeLink.querySelector('h2').classList.add('active');
    currentActiveLink = activeLink;
}



window.addEventListener('resize', function() {
    const width = window.innerWidth;
    
    const subscribeBox = document.querySelector('.subscribe-box');
    const input = document.querySelector('.subscribe .col-md-8 input');
    const button = document.querySelector('.subscribe .col-md-8 button');
    
    if (width <= 576) {
        subscribeBox.style.margin = '0.5cm 0.5cm';
        subscribeBox.style.padding = '0.5cm 0.5cm';
        input.style.width = '6cm';
        input.style.height = '1cm';
        button.style.width = '2.5cm';
        button.style.height = '1.2cm';
        button.style.marginLeft = '0';
    } else if (width <= 768) {
        subscribeBox.style.margin = '1cm 1.5cm';
        subscribeBox.style.padding = '0.5cm 0.5cm';
        input.style.width = '8cm';
        input.style.height = '1.2cm';
        button.style.width = '3cm';
        button.style.height = '1.3cm';
        button.style.marginLeft = '0';
    } else if (width <= 992) {
        subscribeBox.style.margin = '2cm 3cm';
        subscribeBox.style.padding = '1cm 0.5cm';
        input.style.width = '10cm';
        button.style.width = '3.5cm';
    } else {
        subscribeBox.style.margin = '3cm 6cm';
        subscribeBox.style.padding = '1cm 1cm';
        input.style.width = '14cm';
        button.style.width = '4cm';
    }
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    
    const container = document.querySelector('.container');
    const plans = document.querySelectorAll('.box-plan');
    
    if (width <= 576) {
        container.style.marginBottom = '1cm';
        plans.forEach(plan => {
            plan.style.width = '100%';
            plan.style.margin = '10px 0';
            plan.style.padding = '20px';
        });
    } else if (width <= 768) {
        container.style.marginBottom = '1cm';
        plans.forEach(plan => {
            plan.style.width = '100%';
            plan.style.margin = '10px 0';
        });
    } else if (width <= 992) {
        plans.forEach(plan => {
            plan.style.width = '90%';
            plan.style.margin = '10px 0';
        });
    } else {
        container.style.marginBottom = '2cm';
        plans.forEach(plan => {
            plan.style.width = '8cm';
            plan.style.margin = '10px';
        });
    }
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    
    const row2 = document.querySelector('.row-2');
    const textContent = document.querySelector('.text-content');
    const img = document.querySelector('.image-content img');
    
    if (width <= 576) {
        row2.style.padding = '1cm 0.5cm';
        row2.style.flexDirection = 'column';
        row2.style.alignItems = 'center';
        textContent.style.textAlign = 'center';
        img.style.maxWidth = '70%';
    } else if (width <= 768) {
        row2.style.padding = '1.5cm 1cm';
        row2.style.flexDirection = 'column';
        row2.style.alignItems = 'center';
        textContent.style.textAlign = 'center';
        img.style.maxWidth = '80%';
    } else if (width <= 992) {
        row2.style.padding = '2cm 2cm';
        textContent.style.textAlign = 'left';
        img.style.maxWidth = '90%';
    } else {
        row2.style.padding = '2cm 4cm';
        textContent.style.textAlign = 'left';
        img.style.maxWidth = '100%';
    }
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    
    const accordion1 = document.querySelector('.accordion1');
    const h1 = document.querySelector('.accordion1 h1');
    const buttons = document.querySelectorAll('.accordion-button');
    const bodies = document.querySelectorAll('.accordion-body');
    
    if (width <= 576) {
        accordion1.style.padding = '1cm 1cm';
        h1.style.padding = '0.5cm 1cm';
        h1.style.fontSize = '1em';
        buttons.forEach(button => {
            button.style.padding = '0.4cm 0.3cm';
            button.style.fontSize = '12px';
        });
        bodies.forEach(body => {
            body.style.padding = '0.3cm 0.3cm';
        });
    } else if (width <= 768) {
        accordion1.style.padding = '2cm 2cm';
        h1.style.padding = '0.5cm 2cm';
        h1.style.fontSize = '1.2em';
        buttons.forEach(button => {
            button.style.padding = '0.5cm 0.4cm';
            button.style.fontSize = '14px';
        });
        bodies.forEach(body => {
            body.style.padding = '0.4cm 0.4cm';
        });
    } else if (width <= 992) {
        accordion1.style.padding = '2cm 3cm';
        h1.style.padding = '0.5cm 4cm';
        h1.style.fontSize = '1.5em';
    } else {
        accordion1.style.padding = '2cm 6cm';
        h1.style.padding = '0.5cm 8cm';
        h1.style.fontSize = 'inherit';
        buttons.forEach(button => {
            button.style.padding = '0.6cm 0.5cm';
            button.style.fontSize = 'large';
        });
        bodies.forEach(body => {
            body.style.padding = '0.5cm 0.5cm';
        });
    }
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;

    const articleBox = document.querySelector('.article-box');
    const images = document.querySelectorAll('.articles img');
    const h1 = document.querySelector('.articles h1');
    const h4s = document.querySelectorAll('.articles h4');

    if (width <= 576) {
        articleBox.style.marginLeft = '0.5cm';
        articleBox.style.marginRight = '0.5cm';
        articleBox.style.padding = '1cm';
        images.forEach(img => {
            img.style.width = '100%';
            img.style.height = 'auto';
        });
        h1.style.fontSize = '1.2em';
        h4s.forEach(h4 => {
            h4.style.fontSize = '0.9em';
        });
    } else if (width <= 768) {
        articleBox.style.marginLeft = '1cm';
        articleBox.style.marginRight = '1cm';
        images.forEach(img => {
            img.style.width = '100%';
            img.style.height = 'auto';
        });
        h1.style.fontSize = '1.5em';
        h4s.forEach(h4 => {
            h4.style.fontSize = '1em';
        });
    } else if (width <= 992) {
        articleBox.style.marginLeft = '2cm';
        articleBox.style.marginRight = '2cm';
        images.forEach(img => {
            img.style.width = '8cm';
            img.style.height = '5cm';
        });
    } else {
        articleBox.style.marginLeft = '3cm';
        articleBox.style.marginRight = '3cm';
        images.forEach(img => {
            img.style.width = '10cm';
            img.style.height = '6cm';
        });
        h1.style.fontSize = 'inherit';
        h4s.forEach(h4 => {
            h4.style.fontSize = 'inherit';
        });
    }
});


window.addEventListener('resize', function() {
    const width = window.innerWidth;

    const contactForm = document.querySelector('.contact-form');
    const textSectionH1 = document.querySelector('.text-section h1');
    const textSectionH2 = document.querySelector('.text-section h2');
    const outsideImage = document.querySelector('.outside-image img');

    if (width <= 576) {
        contactForm.style.padding = '1cm 0.5cm';
        textSectionH1.style.fontSize = '1.2em';
        textSectionH2.style.fontSize = '1em';
        outsideImage.style.display = 'none';
    } else if (width <= 768) {
        contactForm.style.padding = '1cm';
        textSectionH1.style.fontSize = '1.5em';
        textSectionH2.style.fontSize = 'inherit';
        outsideImage.style.display = 'block';
    } else if (width <= 992) {
        contactForm.style.width = '100%';
        contactForm.style.margin = '50px 0';
        contactForm.style.padding = '1.5cm';
        textSectionH1.style.fontSize = '1.8em';
        textSectionH2.style.fontSize = 'inherit';
        outsideImage.style.display = 'block';
    } else {
        contactForm.style.width = '800px';
        contactForm.style.margin = '100px';
        contactForm.style.padding = '2cm 2cm';
        textSectionH1.style.fontSize = '2em';
        textSectionH2.style.fontSize = 'inherit';
        outsideImage.style.display = 'block';
    }
});

// JavaScript to dynamically adjust footer styles based on screen size
function adjustFooterStyles() {
    const footer = document.querySelector('.footer');
    const footerPart = document.querySelector('.footer-part');
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 576) {
      footer.style.padding = '1cm 0.5cm';
      footerPart.style.margin = '0.5cm 0.5cm';
      footerPart.style.padding = '0.4cm';
    } else if (screenWidth < 768) {
      footer.style.padding = '1cm 1cm';
      footerPart.style.margin = '1cm 1cm';
      footerPart.style.padding = '0.5cm';
    } else if (screenWidth < 992) {
      footer.style.padding = '2cm 2cm';
      footerPart.style.margin = '1cm 2cm';
    } else {
      footer.style.padding = '2cm 4cm';
      footerPart.style.margin = '1cm 5cm';
    }
  }
  
  // Run the function on page load and on window resize
  window.addEventListener('load', adjustFooterStyles);
  window.addEventListener('resize', adjustFooterStyles);
  