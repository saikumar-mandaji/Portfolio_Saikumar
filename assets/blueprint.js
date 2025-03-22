/*==================== BLUEPRINT THEME CIRCUIT ANIMATIONS ====================*/

// Circuit flow animations for path elements
const createCircuitAnimation = () => {
  const circuitPaths = document.querySelectorAll('.circuit-path');
  
  circuitPaths.forEach(path => {
    const pathLength = path.getTotalLength();
    
    // Set up the starting position
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    
    // Create the animation
    path.animate([
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0 }
    ], {
      duration: 1500 + Math.random() * 1000,
      easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
      fill: 'forwards',
      delay: Math.random() * 500
    });
  });
};

// Add circuit node pulse animation
const createNodePulse = () => {
  const circuitNodes = document.querySelectorAll('.circuit-node');
  
  circuitNodes.forEach(node => {
    // Add pulse animation with random delays
    node.style.animation = `pulse 2s infinite ${Math.random() * 2}s`;
  });
};

// Circuit trace hover effect for portfolio items
const initCircuitTraceEffect = () => {
  const portfolioItems = document.querySelectorAll('.portfolio__content');
  
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Add class for glowing effect
      item.classList.add('circuit-active');
      
      // Find connected elements and activate them
      const itemId = item.getAttribute('data-project-id');
      if (itemId) {
        const connectedElements = document.querySelectorAll(`[data-connected-to="${itemId}"]`);
        connectedElements.forEach(el => el.classList.add('connection-active'));
      }
    });
    
    item.addEventListener('mouseleave', () => {
      // Remove glowing effect
      item.classList.remove('circuit-active');
      
      // Deactivate connected elements
      const itemId = item.getAttribute('data-project-id');
      if (itemId) {
        const connectedElements = document.querySelectorAll(`[data-connected-to="${itemId}"]`);
        connectedElements.forEach(el => el.classList.remove('connection-active'));
      }
    });
  });
};

// Create terminal typing effect for text elements
const createTypingEffect = () => {
  const typingElements = document.querySelectorAll('.typing-effect');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--circuit-primary)';
    
    let charIndex = 0;
    const typingSpeed = 50; // milliseconds per character
    
    function typeChar() {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        // Remove cursor when done typing
        setTimeout(() => {
          element.style.borderRight = 'none';
        }, 1000);
      }
    }
    
    // Start typing with slight delay
    setTimeout(typeChar, 200);
  });
};

// Circuit board grid parallax effect
const initParallaxGrid = () => {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Move grid background slightly with mouse
    document.body.style.backgroundPosition = `${mouseX * 20}px ${mouseY * 20}px`;
  });
};

// Custom technical cursor for different sections
const initTechnicalCursor = () => {
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      const sectionId = section.getAttribute('id');
      
      // Change cursor based on section
      switch(sectionId) {
        case 'skills':
          document.body.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M7,2H17L13.5,9H17L10,22V14H7V2M9,4V12H12V14.66L14,11H10.24L13.76,4H9Z' fill='%233df5a5'/%3E%3C/svg%3E\"), auto";
          break;
        case 'portfolio':
          document.body.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' fill='%2300f0ff'/%3E%3C/svg%3E\"), auto";
          break;
        case 'contact':
          document.body.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' fill='%23f637ec'/%3E%3C/svg%3E\"), auto";
          break;
        default:
          document.body.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='8' stroke='%2300f0ff' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='12' cy='12' r='2' fill='%2300f0ff'/%3E%3C/svg%3E\"), auto";
      }
    });
    
    // Reset cursor when leaving all sections
    section.addEventListener('mouseleave', () => {
      document.body.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='8' stroke='%2300f0ff' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='12' cy='12' r='2' fill='%2300f0ff'/%3E%3C/svg%3E\"), auto";
    });
  });
};

// Generate small circuit nodes for background effect
const generateCircuitNodes = () => {
  const container = document.createElement('div');
  container.classList.add('circuit-nodes-container');
  document.body.appendChild(container);
  
  // Create 50 nodes with random positions
  for (let i = 0; i < 50; i++) {
    const node = document.createElement('div');
    node.classList.add('circuit-node');
    
    // Random position
    node.style.left = `${Math.random() * 100}%`;
    node.style.top = `${Math.random() * 100}%`;
    
    // Random size between 2-5px
    const size = 2 + Math.random() * 3;
    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    
    // Random animation delay
    node.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(node);
  }
};

// Initialize terminal-style typing animation for cycling job titles
const initTerminalTyping = () => {
  const typingAnimationElement = document.getElementById('typing-animation');
  if (!typingAnimationElement) return;
  
  const typingTexts = ['IOT Developer     ', 'PCB Designer     ', 'Embedded Engineer    '];
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  typingAnimationElement.innerHTML = '<span class="cursor">_</span>';
  const textElement = document.createElement('span');
  typingAnimationElement.prepend(textElement);
  
  function typeEffect() {
    const currentText = typingTexts[currentTextIndex];
    
    if (isDeleting) {
      // Removing characters
      textElement.textContent = currentText.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      // Adding characters
      textElement.textContent = currentText.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }
    
    // Determine next action
    if (!isDeleting && currentCharIndex === currentText.length) {
      // Wait at full text
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next text
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
      setTimeout(typeEffect, 500);
    } else {
      // Continue typing or deleting
      const typingSpeed = isDeleting ? 30 : 100;
      setTimeout(typeEffect, typingSpeed);
    }
  }
  
  // Start typing effect
  setTimeout(typeEffect, 1000);
};

// Initialize all circuit theme effects
window.addEventListener('DOMContentLoaded', () => {
  // Add circuit nodes to background
  generateCircuitNodes();
  
  // Initialize cursor effects
  initTechnicalCursor();
  
  // Initialize typing effect for terminal-style text
  initTerminalTyping();
  
  // Initialize circuit trace hover effects
  initCircuitTraceEffect();
  
  // Initialize parallax grid effect
  initParallaxGrid();
  
  // Add additional circuit animations after slight delay
  setTimeout(() => {
    createCircuitAnimation();
    createNodePulse();
    createTypingEffect();
  }, 500);
});

// Gallery Load More Functionality
document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.getElementById('loadMoreGallery');
  const galleryItems = document.querySelectorAll('.gallery__item');
  
  if (loadMoreBtn && galleryItems.length > 12) {
    let currentItems = 12;
    
    loadMoreBtn.addEventListener('click', function() {
      // Calculate items to show
      let maxItems = Math.min(currentItems + 6, galleryItems.length);
      
      // Show next set of items
      for (let i = currentItems; i < maxItems; i++) {
        setTimeout(() => {
          galleryItems[i].style.display = 'block';
          galleryItems[i].classList.add('fade-in');
        }, 100 * (i - currentItems));
      }
      
      // Update current count
      currentItems = maxItems;
      
      // Hide button if all items are visible
      if (currentItems >= galleryItems.length) {
        loadMoreBtn.style.display = 'none';
      }
      
      // Add circuit node animation effect
      const newItems = Array.from(galleryItems).slice(currentItems - 6, currentItems);
      newItems.forEach(item => {
        const node = document.createElement('div');
        node.classList.add('circuit-node-pulse');
        item.appendChild(node);
        
        setTimeout(() => {
          node.remove();
        }, 2000);
      });
    });
    
    // Add indicator that more images exist
    if (galleryItems.length > 12) {
      const indicator = document.createElement('div');
      indicator.classList.add('more-indicator');
      indicator.innerHTML = `<span class="terminal-text">+${galleryItems.length - 12} more</span>`;
      document.querySelector('.gallery__grid').appendChild(indicator);
    }
  }
});

// Add hover effect to gallery items
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery__item');
  
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      // Create circuit trace animation
      const trace = document.createElement('div');
      trace.classList.add('circuit-trace-animation');
      this.appendChild(trace);
      
      setTimeout(() => {
        trace.remove();
      }, 1000);
    });
  });
}); 