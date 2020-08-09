const videoElement = document.getElementById('video');
const togglePipButton = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('whoops, error here', error);
    }
}

togglePipButton.addEventListener('click', async () => {
    // Disable button
    togglePipButton.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    togglePipButton.disabled = false;
});

// On load
selectMediaStream();