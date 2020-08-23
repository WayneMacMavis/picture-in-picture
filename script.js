const videoElement = document.getElementById('video');
const togglePipButton = document.getElementById('button');
const webCam = document.getElementById('web-cam');
const stopButton = document.getElementById('stop');
const video = document.createElement('video');

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

webCam.addEventListener('click', async () => {
    video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
    video.play();
    video.addEventListener('loadedmetadata', () => {
    video.requestPictureInPicture()
    .catch(console.error)
      });
    });

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