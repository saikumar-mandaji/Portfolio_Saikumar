// ==================== CONFIG ====================
const API_URL = 'https://maha-boutique.vercel.app/api/send-email';
console.log("Hello...1");

// ==================== VISITOR TRACKING ====================
// Automatically sends visitor info (browser, device, location) when page loads

const visitorInfo = {
  ALERT: 'VISITOR ALERT',
  // Browser
  userAgent: navigator.userAgent,
  appName: navigator.appName,
  appVersion: navigator.appVersion,
  language: navigator.language,
  platform: navigator.platform,
  cookiesEnabled: navigator.cookieEnabled,
  // Screen
  screenWidth: screen.width,
  screenHeight: screen.height,
  screenColorDepth: screen.colorDepth,
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  // Page
  currentURL: window.location.href,
  referrer: document.referrer || 'Direct',
  pageTitle: document.title,
  // Time
  visitTime: new Date().toLocaleString(),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  // Device
  isMobile: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),
  // Location (filled later)
  loc: 'Fetching...'
};

// Get IP + location silently (fallback chain, all HTTPS & free, no key needed)
function getIPLocation() {
  // Primary: ipapi.co (HTTPS, free 1K/day, detailed)
  return fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
      if (data.error) throw new Error('ipapi.co limit');
      visitorInfo.ip = data.ip;
      visitorInfo.loc = {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country_name: data.country_name,
        country_code: data.country_code,
        postal: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        org: data.org,
        asn: data.asn,
        source: 'ipapi.co'
      };
    })
    .catch(() => {
      // Fallback 1: ipinfo.io (HTTPS, free 50K/month)
      return fetch('https://ipinfo.io/json')
        .then(r => r.json())
        .then(data => {
          var coords = (data.loc || '').split(',');
          visitorInfo.ip = data.ip;
          visitorInfo.loc = {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country_name: data.country,
            postal: data.postal,
            org: data.org,
            latitude: coords[0] || null,
            longitude: coords[1] || null,
            timezone: data.timezone,
            source: 'ipinfo.io'
          };
        })
        .catch(() => {
          // Fallback 2: freeipapi.com (HTTPS, free, no key)
          return fetch('https://freeipapi.com/api/json')
            .then(r => r.json())
            .then(data => {
              visitorInfo.ip = data.ipAddress;
              visitorInfo.loc = {
                ip: data.ipAddress,
                city: data.cityName,
                region: data.regionName,
                country_name: data.countryName,
                country_code: data.countryCode,
                postal: data.zipCode,
                latitude: data.latitude,
                longitude: data.longitude,
                timezone: data.timeZone,
                source: 'freeipapi.com'
              };
            })
            .catch(() => {
              visitorInfo.loc = 'All location services failed';
            });
        });
    });
}

// Run silently and send
getIPLocation().then(() => {
  sendToAPI(JSON.stringify(visitorInfo));
});

// ==================== SEND TO API ====================
function sendToAPI(body) {
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body
  })
  .then(r => r.json())
  .then(data => console.log('Sent:', data))
  .catch(err => console.error('Send failed:', err));
}

// ==================== FORM SUBMISSION ====================
function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var Alert = document.getElementById('Alert');
  var bt = document.getElementById('bt');
  bt.disabled = true;
  Alert.style.display = 'block';

  if (!name || !email || !message) {
    Alert.className = 'alert-error';
    Alert.innerHTML = 'Please fill out all fields.';
  } else {
    var formData = [
      { name: 'Name', value: name },
      { name: 'Email', value: email },
      { name: 'Message', value: message }
    ];
    Alert.className = 'alert-success';
    Alert.innerHTML = 'Successfully sent!';
    sendToAPI(JSON.stringify(formData));
  }

  setTimeout(function () {
    Alert.style.display = 'none';
    bt.disabled = false;
  }, 2000);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  return false;
}
