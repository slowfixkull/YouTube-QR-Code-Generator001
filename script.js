function generateQRCode() {
    const channelUrlInput = document.getElementById('channelUrl');
    const qrcodeContainer = document.getElementById('qrcode');

    // Get the YouTube channel URL from the input field
    let channelUrl = channelUrlInput.value.trim();

    // Check if the input is not empty and if it's a valid YouTube channel URL
    if (channelUrl !== '' && isValidYouTubeUrl(channelUrl)) {
        // Clear previous QR code
        qrcodeContainer.innerHTML = '';

        // Ensure the URL is formatted as a complete URL
        if (!channelUrl.startsWith('http')) {
            channelUrl = 'https://' + channelUrl;
        }

        // Generate QR Code using QRCode.js library with smaller dimensions
        const qrcode = new QRCode(qrcodeContainer, {
            text: channelUrl,
            width: 150, // Set the width to a smaller value
            height: 150, // Set the height to a smaller value
        });
    } else {
        // If the input is empty or not a valid YouTube channel URL, display an alert
        alert('Please enter a valid YouTube Channel URL.');
    }
}

function restartApp() {
    const channelUrlInput = document.getElementById('channelUrl');
    const qrcodeContainer = document.getElementById('qrcode');

    // Clear input field and remove QR code
    channelUrlInput.value = '';
    qrcodeContainer.innerHTML = '';
}

// Function to check if the input is a valid YouTube channel URL
function isValidYouTubeUrl(url) {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(c|channel)\/|youtu\.be\/)[a-zA-Z0-9_-]{1,}$/;
    return regex.test(url);
}
