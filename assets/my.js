const browserInfo = {
  "ALERT":"FROM H/W",
  appName: navigator.appName,
  appVersion: navigator.appVersion,
  userAgent: navigator.userAgent,
  loc: "Error" // Initialize loc property with "Error"
};
// gmfg mdzv qcwh hnxe
// smartconnectpro6@gmail.com
function sendEmail(bd) {
  fetch('https://myweb-1-keqf.onrender.com/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bd
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Email sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending email:', error);
    alert('An error occurred while sending the email. Please try again later.');
  });
}


// Fetch the client's IP address from an external service



fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    console.log('Client IP Address:', ipAddress);

    // Now that you have the IP address, you can use a service like ipapi.co to get location information
    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then(response => response.json())
      .then(locationData => {
        console.log('Location:', locationData);
        browserInfo['loc'] = locationData; // Update loc property with locationData
        const jsonString = JSON.stringify(browserInfo); // Generate JSON string
        sendEmail(jsonString);

      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });




function submitForm() {
  // Get form inputs
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var Alert = document.getElementById("Alert");
  var bt = document.getElementById("bt");
  bt.disabled = true;
  Alert.style.display = 'block';

  // Check if any input is missing
  if (!name || !email || !message) {
    // Show error message
    Alert.className = "alert-error";
    Alert.innerHTML = 'Please fill out all fields.';
  }
  else{
    var formData = [
      { name: 'Name', value: name },
      { name: 'Email', value: email },
      { name: 'Message', value: message }
    ];
    Alert.className = "alert-success";
    Alert.innerHTML = 'Successfully sent!';
    const jsonString = JSON.stringify(formData);
    sendEmail(jsonString);
  }

  // Generate form data array


  // Show success message


  setTimeout(function () {
    Alert.style.display = 'none';
    bt.disabled = false;
  }, 2000);

  // Alert.style.display = 'none';
  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  return false; // Prevent form submission
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const navSections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    navSections.forEach(current =>{
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
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SMOOTH SCROLL ANIMATION ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*==================== GALLERY LOAD MORE FUNCTIONALITY ====================*/
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
    });
    
    // Add indicator that more images exist
    if (galleryItems.length > 12) {
      const indicator = document.createElement('div');
      indicator.classList.add('more-indicator');
      indicator.innerHTML = `<span>+${galleryItems.length - 12} more</span>`;
      document.querySelector('.gallery__grid').appendChild(indicator);
    }
  }
});
