const video = document.getElementById('video');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const captureButton = document.getElementById('captureButton');
const capturedImage = document.getElementById('capturedImage');
let stream;
let canvas;
let capturedDetectionLines = [];

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
  faceapi.nets.ageGenderNet.loadFromUri('/models')
]).then(() => console.log('Face API Models Loaded'));

async function startVideo() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    video.srcObject = stream;
  } catch (err) {
    console.error('Error accessing camera:', err);
  }
}

function stopVideo() {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  }
}

function captureImage() {
  // Capture the actual frame from the video
  const videoCanvas = document.createElement('canvas');
  videoCanvas.width = video.videoWidth;
  videoCanvas.height = video.videoHeight;

  const videoContext = videoCanvas.getContext('2d');
  videoContext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // Draw the video frame

  // Now, capture the detection lines from the existing canvas
  const detectionCanvas = document.createElement('canvas');
  detectionCanvas.width = canvas.width;
  detectionCanvas.height = canvas.height;
  const detectionContext = detectionCanvas.getContext('2d');

  // Draw detection lines (face landmarks, expressions, etc.) onto the new canvas
  detectionContext.drawImage(canvas, 0, 0);

  // Combine both video frame and detection lines
  videoContext.drawImage(detectionCanvas, 0, 0); // Draw detection lines on top of the video frame

  // Convert the final canvas (with video frame and detection lines) to an image and display it
  const imageDataUrl = videoCanvas.toDataURL('image/png');
  capturedImage.src = imageDataUrl;  // Display the captured image
}

video.addEventListener('playing', () => {
  // Create a canvas to draw face detections on top of the video
  canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  canvas.style.position = "absolute"; // Ensure canvas stays on top of the video
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  function detectFaces() {
    faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withAgeAndGender()
      .then(detections => {
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);  // Clear previous detections
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

        resizedDetections.forEach(detection => {
          const { age, gender, genderProbability } = detection;
          const text = `${Math.round(age)} years old, ${gender} (${(genderProbability * 100).toFixed(1)}%)`;
          const { x, y } = detection.detection.box;
          context.fillStyle = 'white';
          context.font = '16px Arial';
          context.fillText(text, x, y - 10);
        });

        capturedDetectionLines = resizedDetections;  // Store the detections with fixed lines
        requestAnimationFrame(detectFaces);
      });
  }

  detectFaces();
});

startButton.addEventListener('click', startVideo);
stopButton.addEventListener('click', stopVideo);
captureButton.addEventListener('click', captureImage);
