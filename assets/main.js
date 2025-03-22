/*==================== MENU SHOW & HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close card-item'
    }
    if(itemClass === 'skills__content skills__close card-item'){
        this.parentNode.className = 'skills__content skills__open card-item'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let portfolioSwiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

/*==================== PORTFOLIO TILT EFFECT ====================*/
document.addEventListener('DOMContentLoaded', function() {
  // Check if portfolio grid exists (card layout)
  const portfolioCards = document.querySelectorAll('.portfolio__card');
  
  if(portfolioCards.length > 0) {
    portfolioCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.transition = 'transform 0.5s ease';
        
        // Remove transition after animation completes
        setTimeout(() => {
          this.style.transition = '';
        }, 500);
      });
    });
  }
  
  // Check if portfolio content exists (swiper layout)
  const portfolioContents = document.querySelectorAll('.portfolio__content');
  
  if(portfolioContents.length > 0) {
    portfolioContents.forEach(content => {
      content.addEventListener('mousemove', function(e) {
        const img = this.querySelector('.portfolio__img');
        if(img) {
          const rect = img.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const deltaX = (x - centerX) / 30;
          const deltaY = (y - centerY) / 30;
          
          img.style.transform = `scale(1.05) translate(${deltaX}px, ${deltaY}px)`;
        }
      });
      
      content.addEventListener('mouseleave', function() {
        const img = this.querySelector('.portfolio__img');
        if(img) {
          img.style.transform = 'scale(1)';
          img.style.transition = 'transform 0.5s ease';
        }
      });
    });
  }
  
  // Animate portfolio tags
  const portfolioTags = document.querySelectorAll('.portfolio__tag');
  if(portfolioTags.length > 0) {
    portfolioTags.forEach((tag, index) => {
      tag.style.animationDelay = `${index * 0.1}s`;
      tag.classList.add('tag-appear');
    });
  }
  
  // Add floating animation for icon areas
  const keyframes = `
  @keyframes floatIconEffect {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes tag-appear {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  .tag-appear {
    animation: tag-appear 0.5s ease forwards;
    opacity: 0;
  }
  
  .button-pulse {
    animation: button-pulse 1s ease;
  }
  
  @keyframes button-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); box-shadow: 0 0 15px var(--primary-color); }
    100% { transform: scale(1); }
  }
  `;
  
  const styleElement = document.createElement('style');
  styleElement.textContent = keyframes;
  document.head.appendChild(styleElement);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== GALLERY LOAD MORE FUNCTIONALITY ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.getElementById('loadMoreGallery');
  const galleryItems = document.querySelectorAll('.gallery__item');
  
  // Add animation styles to document
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
      animation: fadeIn 0.5s ease forwards;
    }
    
    .more-indicator {
      position: absolute;
      bottom: 20px;
      right: 20px;
      background-color: var(--primary-color);
      color: #fff;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 10;
      pointer-events: none;
    }
  `;
  document.head.appendChild(styleEl);
  
  if (loadMoreBtn && galleryItems.length > 12) {
    // Initially hide items beyond the first 12
    for (let i = 12; i < galleryItems.length; i++) {
      galleryItems[i].style.display = 'none';
    }
    
    let currentItems = 12;
    
    // Add indicator that more images exist
    const indicator = document.createElement('div');
    indicator.classList.add('more-indicator');
    indicator.innerHTML = `<span>+${galleryItems.length - 12} more</span>`;
    document.querySelector('.gallery__grid').appendChild(indicator);
    
    loadMoreBtn.addEventListener('click', function() {
      let maxItems = Math.min(currentItems + 6, galleryItems.length);
      
      // Remove the indicator
      const moreIndicator = document.querySelector('.more-indicator');
      if (moreIndicator) {
        moreIndicator.remove();
      }
      
      // Show the additional items with animation
      for (let i = currentItems; i < maxItems; i++) {
        setTimeout(() => {
          galleryItems[i].style.display = 'block';
          galleryItems[i].classList.add('fade-in');
        }, 100 * (i - currentItems));
      }
      
      currentItems = maxItems;
      
      // Hide the load more button if all items are now visible
      if (currentItems >= galleryItems.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        // Update the indicator if there are still more items
        const newIndicator = document.createElement('div');
        newIndicator.classList.add('more-indicator');
        newIndicator.innerHTML = `<span>+${galleryItems.length - currentItems} more</span>`;
        document.querySelector('.gallery__grid').appendChild(newIndicator);
      }
    });
  } else if (loadMoreBtn && galleryItems.length <= 12) {
    // Hide the button if there are 12 or fewer items
    loadMoreBtn.style.display = 'none';
  }
});

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== ANIMATED TYPING ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const typedTextElements = document.querySelectorAll('.typing-text');
  
  if (typedTextElements.length > 0) {
    typedTextElements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust typing speed here
    });
  }
});

/*==================== ENHANCED ANIMATIONS ====================*/
document.addEventListener('DOMContentLoaded', function() {
  // Create circuit pattern SVG if it doesn't exist
  if (!document.querySelector('img/circuit-pattern.svg')) {
    createCircuitPatternSVG();
  }
  
  // Add particle background to home section
  const homeSection = document.querySelector('.home');
  if (homeSection) {
    addParticleBackground(homeSection);
  }
  
  // Add scroll animations
  addScrollRevealAnimations();
  
  // Add console effect to subtitle
  const consoleElement = document.querySelector('.console-effect');
  if (consoleElement) {
    typeWriterEffect(consoleElement.textContent, consoleElement);
  }
  
  // Add skill meter animations
  animateSkillMeters();
});

function typeWriterEffect(text, element) {
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, Math.random() * 50 + 50);
    }
  }
  
  type();
}

function addParticleBackground(container) {
  // Create canvas for particles
  const canvas = document.createElement('canvas');
  canvas.classList.add('particles-canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  container.appendChild(canvas);
  
  // Initialize particles
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // Set canvas size
  function resizeCanvas() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  
  // Create particles
  function createParticles() {
    particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: 'rgba(33, 150, 243, ' + (Math.random() * 0.5 + 0.1) + ')',
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      });
    }
  }
  
  // Draw particles
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
    });
    
    // Connect nearby particles
    connectParticles();
    
    requestAnimationFrame(drawParticles);
  }
  
  // Connect particles with lines
  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(33, 150, 243, ' + (0.2 - distance/500) + ')';
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  // Initialize
  window.addEventListener('resize', function() {
    resizeCanvas();
    createParticles();
  });
  
  resizeCanvas();
  createParticles();
  drawParticles();
}

function addScrollRevealAnimations() {
  const elements = document.querySelectorAll('.card-item, .section__title, .skills__content, .qualification__data');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(element => {
    element.classList.add('reveal-element');
    observer.observe(element);
  });
  
  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .reveal-element {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}

function animateSkillMeters() {
  const skillItems = document.querySelectorAll('.tech-data-item');
  
  skillItems.forEach((item, index) => {
    // Add delay based on index
    const delay = index * 100;
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, delay);
  });
  
  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .tech-data-item {
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
  `;
  document.head.appendChild(style);
}

function createCircuitPatternSVG() {
  // Create a circuit pattern SVG for background animation
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100");
  svg.setAttribute("height", "100");
  svg.setAttribute("viewBox", "0 0 100 100");
  
  // Add circuit lines and nodes
  svg.innerHTML = `
    <defs>
      <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10,10 L40,10 L40,40 L70,40 L70,70 L90,70" stroke="#2196F3" stroke-width="1" fill="none" />
        <path d="M30,20 L50,20 L50,50 L20,50 L20,80" stroke="#2196F3" stroke-width="1" fill="none" />
        <circle cx="10" cy="10" r="2" fill="#2196F3" />
        <circle cx="40" cy="10" r="2" fill="#2196F3" />
        <circle cx="40" cy="40" r="2" fill="#2196F3" />
        <circle cx="70" cy="40" r="2" fill="#2196F3" />
        <circle cx="70" cy="70" r="2" fill="#2196F3" />
        <circle cx="90" cy="70" r="2" fill="#2196F3" />
        <circle cx="30" cy="20" r="2" fill="#2196F3" />
        <circle cx="50" cy="20" r="2" fill="#2196F3" />
        <circle cx="50" cy="50" r="2" fill="#2196F3" />
        <circle cx="20" cy="50" r="2" fill="#2196F3" />
        <circle cx="20" cy="80" r="2" fill="#2196F3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  `;
  
  // Create a blob URL for the SVG
  const blob = new Blob([svg.outerHTML], {type: 'image/svg+xml'});
  const url = URL.createObjectURL(blob);
  
  // Add to document for use in CSS backgrounds
  const img = document.createElement('img');
  img.src = url;
  img.id = 'circuit-pattern-svg';
  img.style.display = 'none';
  document.body.appendChild(img);
  
  // Update CSS to use this image
  document.querySelector('.circuit-animation-background').style.backgroundImage = `url(${url})`;
}

/*==================== ENHANCED SKILLS INTERACTIVITY ====================*/
document.addEventListener('DOMContentLoaded', function() {
  // Add interactive progress bars to skills
  addSkillsProgressBars();
  
  // Add hover effects to skill items
  addSkillItemsInteractivity();
  
  // Add auto-opening feature to first skills content
  setTimeout(() => {
    const firstSkillContent = document.querySelector('.skills__content');
    if (firstSkillContent && !firstSkillContent.classList.contains('skills__open')) {
      firstSkillContent.classList.add('skills__open');
      firstSkillContent.classList.remove('skills__close');
    }
  }, 1000);
});

function addSkillsProgressBars() {
  const techDataItems = document.querySelectorAll('.tech-data-item');
  
  // Remove existing progress bars and percentages if they exist
  const existingProgressBars = document.querySelectorAll('.skills__progress-bar');
  existingProgressBars.forEach(bar => bar.remove());
  
  const existingPercentages = document.querySelectorAll('.skills__progress-percent');
  existingPercentages.forEach(percent => percent.remove());
  
  // Just add hover effects without progress bars
  techDataItems.forEach(item => {
    item.classList.add('enhanced-skill-item');
  });

  // Add CSS for enhanced skill items without progress bars
  const style = document.createElement('style');
  style.textContent = `
    .tech-data-item {
      position: relative;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }
    
    .enhanced-skill-item {
      border-left: 3px solid transparent;
      padding-left: 8px;
      transition: all 0.3s ease;
    }
    
    .enhanced-skill-item:hover {
      border-left-color: var(--primary-color);
      transform: translateX(5px);
    }
  `;
  document.head.appendChild(style);
}

function addSkillItemsInteractivity() {
  const skillItems = document.querySelectorAll('.skills__content');
  
  skillItems.forEach(item => {
    // Add 3D tilt effect on hover
    item.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      // Calculate tilt values (between -15 and 15 degrees)
      const tiltX = (y - yc) / (rect.height / 2) * 5;
      const tiltY = -((x - xc) / (rect.width / 2)) * 5;
      
      // Apply the tilt and add some scale
      this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
      this.style.boxShadow = `
        0 20px 30px rgba(0, 0, 0, 0.1),
        ${-tiltY/3}px ${-tiltX/3}px 15px rgba(33, 150, 243, 0.1)
      `;
    });
    
    // Reset transform on mouse leave
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      this.style.boxShadow = '0 4px 10px var(--shadow-color)';
      
      // Add transition on mouse leave for smoother reset
      this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
      
      // Remove transition after animation completes
      setTimeout(() => {
        this.style.transition = '';
      }, 500);
    });
    
    // Add electric pulse effect on click
    item.addEventListener('click', function() {
      // Create pulse element
      const pulse = document.createElement('div');
      pulse.className = 'skills__pulse';
      
      // Add to component
      this.appendChild(pulse);
      
      // Create electric pulse effect
      pulse.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0) 70%);
        border-radius: inherit;
        opacity: 1;
        z-index: -1;
        pointer-events: none;
        animation: skillsPulse 0.8s ease-out forwards;
      `;
      
      // Add animation
      const keyframes = document.createElement('style');
      keyframes.textContent = `
        @keyframes skillsPulse {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(keyframes);
      
      // Remove pulse element after animation
      setTimeout(() => {
        pulse.remove();
      }, 800);
    });
  });
  
  // Make skill headers more interactive
  const skillHeaders = document.querySelectorAll('.skills__header');
  skillHeaders.forEach(header => {
    header.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.skills__icon, .fa');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.color = 'var(--primary-color)';
        icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
      }
    });
    
    header.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.skills__icon, .fa');
      if (icon) {
        icon.style.transform = '';
        icon.style.color = '';
      }
    });
  });
}

/*==================== SKILLS RADAR CHART ====================*/
document.addEventListener('DOMContentLoaded', function() {
  // Initialize radar chart after DOM is loaded
  setTimeout(() => {
    initSkillsRadarChart();
  }, 1000); // Delay to ensure other elements are loaded
});

function initSkillsRadarChart() {
  const radarChart = document.getElementById('skillsRadarChart');
  if (!radarChart) return;
  
  // Clear any existing content
  radarChart.innerHTML = '';
  
  // Define skill categories and proficiency levels (0-100)
  const skills = [
    { category: 'MCU/SoC', value: 92, color: 'rgba(33, 150, 243, 0.8)' },
    { category: 'Programming', value: 85, color: 'rgba(76, 175, 80, 0.8)' },
    { category: 'PCB Design', value: 88, color: 'rgba(255, 152, 0, 0.8)' },
    { category: 'Protocols', value: 90, color: 'rgba(156, 39, 176, 0.8)' },
    { category: 'Test Equipment', value: 82, color: 'rgba(233, 30, 99, 0.8)' },
    { category: 'IoT Cloud', value: 78, color: 'rgba(0, 188, 212, 0.8)' }
  ];
  
  // Create SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('viewBox', '0 0 300 300');
  radarChart.appendChild(svg);
  
  // Center of the chart
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;
  
  // Create radar chart background
  drawRadarBackground(svg, centerX, centerY, maxRadius, skills.length);
  
  // Draw the skills polygon
  drawSkillsPolygon(svg, centerX, centerY, maxRadius, skills);
  
  // Add category labels
  addCategoryLabels(svg, centerX, centerY, maxRadius, skills);
  
  // Add interactive elements
  addRadarChartInteractivity(svg, skills, centerX, centerY, maxRadius);
}

function drawRadarBackground(svg, centerX, centerY, radius, sides) {
  // Create background circles
  const circleGroups = [0.2, 0.4, 0.6, 0.8, 1];
  
  // Add the circles group
  const circlesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  circlesGroup.setAttribute('class', 'radar-background-circles');
  svg.appendChild(circlesGroup);
  
  // Draw background circles
  circleGroups.forEach((percentage, index) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', radius * percentage);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'rgba(33, 150, 243, 0.1)');
    circle.setAttribute('stroke-width', index === circleGroups.length - 1 ? '2' : '1');
    circlesGroup.appendChild(circle);
  });
  
  // Draw axis lines
  const axisGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  axisGroup.setAttribute('class', 'radar-axis-lines');
  svg.appendChild(axisGroup);
  
  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', centerX);
    line.setAttribute('y1', centerY);
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'rgba(33, 150, 243, 0.2)');
    line.setAttribute('stroke-width', '1');
    axisGroup.appendChild(line);
  }
}

function drawSkillsPolygon(svg, centerX, centerY, radius, skills) {
  // Create polygon points
  let points = '';
  const skillPoints = [];
  
  skills.forEach((skill, index) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    const skillRadius = (radius * skill.value) / 100;
    const x = centerX + skillRadius * Math.cos(angle);
    const y = centerY + skillRadius * Math.sin(angle);
    
    points += `${x},${y} `;
    skillPoints.push({ x, y, skill });
  });
  
  // Create skills group
  const skillsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  skillsGroup.setAttribute('class', 'radar-skills');
  svg.appendChild(skillsGroup);
  
  // Draw the polygon
  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute('points', points);
  polygon.setAttribute('fill', 'rgba(33, 150, 243, 0.2)');
  polygon.setAttribute('stroke', 'rgba(33, 150, 243, 0.8)');
  polygon.setAttribute('stroke-width', '2');
  skillsGroup.appendChild(polygon);
  
  // Add dots at each skill point
  skillPoints.forEach(point => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    circle.setAttribute('r', '4');
    circle.setAttribute('fill', point.skill.color);
    circle.setAttribute('stroke', '#fff');
    circle.setAttribute('stroke-width', '1');
    circle.setAttribute('data-skill', point.skill.category);
    circle.setAttribute('data-value', point.skill.value);
    skillsGroup.appendChild(circle);
  });
}

function addCategoryLabels(svg, centerX, centerY, radius, skills) {
  // Create labels group
  const labelsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  labelsGroup.setAttribute('class', 'radar-labels');
  svg.appendChild(labelsGroup);
  
  skills.forEach((skill, index) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    const labelRadius = radius + 20; // Position labels outside the radar
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('fill', 'var(--text-color)');
    text.setAttribute('font-size', '12px');
    text.textContent = skill.category;
    
    // Adjust text alignment based on position
    if (angle > Math.PI / 2 && angle < Math.PI * 3 / 2) {
      text.setAttribute('text-anchor', 'start');
    } else if (angle < -Math.PI / 2 || angle > Math.PI * 3 / 2) {
      text.setAttribute('text-anchor', 'end');
    }
    
    labelsGroup.appendChild(text);
  });
}

function addRadarChartInteractivity(svg, skills, centerX, centerY, radius) {
  // Add interactive dots for showing skill values
  const dots = svg.querySelectorAll('circle[data-skill]');
  const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  tooltip.setAttribute('class', 'radar-tooltip');
  tooltip.style.opacity = '0';
  tooltip.style.pointerEvents = 'none';
  svg.appendChild(tooltip);
  
  // Create tooltip background
  const tooltipBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  tooltipBg.setAttribute('rx', '4');
  tooltipBg.setAttribute('ry', '4');
  tooltipBg.setAttribute('fill', 'var(--card-color)');
  tooltipBg.setAttribute('stroke', 'var(--primary-color)');
  tooltipBg.setAttribute('stroke-width', '1');
  tooltip.appendChild(tooltipBg);
  
  // Create tooltip text
  const tooltipText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  tooltipText.setAttribute('fill', 'var(--text-color)');
  tooltipText.setAttribute('font-size', '12px');
  tooltip.appendChild(tooltipText);
  
  // Add event listeners to dots
  dots.forEach(dot => {
    dot.addEventListener('mouseenter', function() {
      const skill = this.getAttribute('data-skill');
      const value = this.getAttribute('data-value');
      
      // Update tooltip text
      tooltipText.textContent = `${skill}: ${value}%`;
      
      // Position the tooltip
      const textWidth = tooltipText.getComputedTextLength() || 100;
      tooltipBg.setAttribute('width', textWidth + 20);
      tooltipBg.setAttribute('height', '25');
      
      // Position tooltip near the dot
      const dotX = parseFloat(this.getAttribute('cx'));
      const dotY = parseFloat(this.getAttribute('cy'));
      
      tooltip.setAttribute('transform', `translate(${dotX - textWidth/2 - 10}, ${dotY - 40})`);
      tooltipText.setAttribute('x', '10');
      tooltipText.setAttribute('y', '17');
      
      // Show tooltip
      tooltip.style.opacity = '1';
      
      // Highlight the dot
      this.setAttribute('r', '6');
      this.setAttribute('stroke-width', '2');
    });
    
    dot.addEventListener('mouseleave', function() {
      // Hide tooltip
      tooltip.style.opacity = '0';
      
      // Reset dot size
      this.setAttribute('r', '4');
      this.setAttribute('stroke-width', '1');
    });
  });
  
  // Animate the radar on load
  animateRadar(svg, skills, centerX, centerY, radius);
}

function animateRadar(svg, skills, centerX, centerY, radius) {
  // Clone skills array
  const animatedSkills = skills.map(skill => ({ ...skill, value: 0 }));
  
  // Get the polygon element
  const polygon = svg.querySelector('polygon');
  const dots = svg.querySelectorAll('circle[data-skill]');
  
  // Animation duration
  const duration = 1500; // ms
  const steps = 60;
  const interval = duration / steps;
  
  let step = 0;
  
  const animation = setInterval(() => {
    if (step >= steps) {
      clearInterval(animation);
      return;
    }
    
    // Update animated values
    animatedSkills.forEach((skill, index) => {
      const targetValue = skills[index].value;
      skill.value = (targetValue * step) / steps;
    });
    
    // Update polygon points
    let points = '';
    
    animatedSkills.forEach((skill, index) => {
      const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
      const skillRadius = (radius * skill.value) / 100;
      const x = centerX + skillRadius * Math.cos(angle);
      const y = centerY + skillRadius * Math.sin(angle);
      
      points += `${x},${y} `;
      
      // Update dot positions
      if (dots[index]) {
        dots[index].setAttribute('cx', x);
        dots[index].setAttribute('cy', y);
      }
    });
    
    polygon.setAttribute('points', points);
    
    step++;
  }, interval);
}

/*==================== PORTFOLIO CARDS ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const portfolioCards = document.querySelectorAll('.portfolio__card');
  
  portfolioCards.forEach(card => {
    // Add tilt effect on hover
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.transition = 'transform 0.5s ease';
      
      // Remove transition after animation completes
      setTimeout(() => {
        this.style.transition = '';
      }, 500);
    });
  });
  
  // Add CSS for card hover effects
  const style = document.createElement('style');
  style.textContent = `
    .portfolio__card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .portfolio__card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  `;
  document.head.appendChild(style);
});

/*==================== SKILLS CARDS INTERACTIVITY ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const skillsCards = document.querySelectorAll('.skills__card');
  
  // Only proceed if we have skills cards
  if (skillsCards.length > 0) {
    // Add hover effect - highlight current card and dim others
    skillsCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        skillsCards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.style.opacity = '0.6';
            otherCard.style.transform = 'scale(0.98)';
          }
        });
        this.style.opacity = '1';
        this.style.transform = 'scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        skillsCards.forEach(otherCard => {
          otherCard.style.opacity = '1';
          otherCard.style.transform = 'scale(1)';
        });
      });
    });
    
    // Add click animation for tech items
    const techItems = document.querySelectorAll('.tech-data-item');
    techItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.add('pulse');
        setTimeout(() => {
          this.classList.remove('pulse');
        }, 500);
      });
    });
  }
});

/*==================== FORM SUBMISSION HANDLER ====================*/
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const alertBox = document.getElementById('Alert');
  const submitButton = document.getElementById('bt');
  
  // Reset any previous alert
  alertBox.style.display = 'none';
  alertBox.className = 'alert-box';

  // Simple validation
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alertBox.className = 'alert-box error';
    alertBox.textContent = 'Please fill all the fields';
    alertBox.style.display = 'block';
    
    // Add shake animation to empty fields
    const inputs = document.querySelectorAll('.contact__input');
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        input.parentElement.classList.add('shake');
        setTimeout(() => {
          input.parentElement.classList.remove('shake');
        }, 500);
      }
    });
    
    // Hide alert after 3 seconds
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
    
    return false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alertBox.className = 'alert-box error';
    alertBox.textContent = 'Please enter a valid email address';
    alertBox.style.display = 'block';
    
    // Add shake animation to email field
    const emailField = document.getElementById('email').parentElement;
    emailField.classList.add('shake');
    setTimeout(() => {
      emailField.classList.remove('shake');
    }, 500);
    
    // Hide alert after 3 seconds
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
    
    return false;
  }

  // Show loading state
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="uil uil-spinner-alt fa-spin"></i> Sending...';
  
  // Simulate sending (would be replaced with actual AJAX call)
  setTimeout(() => {
    // Here you would typically send the form data to a server
    // For demonstration, we'll just show a success message
    alertBox.className = 'alert-box success';
    alertBox.textContent = 'Message sent successfully!';
    alertBox.style.display = 'block';
    
    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    // Reset button
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send Message <i class="uil uil-message button__icon"></i>';
    
    // Hide alert after 3 seconds
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
  }, 1500);
  
  return false; // Prevent form from submitting
} 