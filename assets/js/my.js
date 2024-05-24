const browserInfo = {
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    userAgent: navigator.userAgent,
    loc: "Error" // Initialize loc property with "Error"
};
// gmfg mdzv qcwh hnxe
// smartconnectpro6@gmail.com
function sendEmail(bd) {
    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "smartconnectpro6@gmail.com",
    //     Password: "gmfg mdzv qcwh hnxe",
    //     To: 'mandajisaikumar@gmail.com',
    //     From: "smartconnectpro6@gmail.com",
    //     Subject: "Portfolio",
    //     Body: bd,
    // }).then(
    //     message => alert("Email sent successfully")
    // );http://127.0.0.1:5000

    try {
        const response =  fetch('https://myweb-lzw3.onrender.com/send-email', {
            method: 'POST',
            body: bd
        });

        if (response.ok) {
            // alert('Email sent successfully!');
        } else {
            // alert('Failed to send email.');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email.');
    }
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
