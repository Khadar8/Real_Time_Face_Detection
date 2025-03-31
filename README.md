<<<<<<< HEAD
Face Detection App

This web-based Face Detection application uses the face-api.js library to perform real-time face detection, age and gender prediction, and facial landmarks and expressions detection. The app allows users to start and stop the camera feed, capture an image, and display the detected face along with face landmarks, expressions, and other relevant information.

Features

Real-time Face Detection: Detect faces from the live camera feed.
=======
# Real-Time Face Detection

Real-Time Face Detection is a web-based application that utilizes **Face API** to detect faces, facial landmarks, expressions, age, and gender in real-time using a webcam. Users can capture images with detected overlays and save them.
>>>>>>> dbaff1f (README file provides understanding of the project)

## Features
- **Live Face Detection**: Detects multiple faces with real-time tracking.
- **Facial Landmark Detection**: Identifies key points on the face.
- **Expression Recognition**: Detects emotions such as happy, sad, and surprised.
- **Age & Gender Detection**: Estimates age and predicts gender with confidence percentage.
- **Image Capture**: Saves the image along with detected overlays.
- **Start & Stop Camera**: Toggle webcam feed as needed.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Real_Time_Face_Detection.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Real_Time_Face_Detection
   ```
3. Install dependencies (if required):
   ```bash
   npm install
   ```

## Usage
1. Start a local server (e.g., using Live Server in VS Code or Python's HTTP server):
   ```bash
   npx live-server
   ```
   or
   ```bash
   python -m http.server 5500
   ```
2. Open `index.html` in a web browser.
3. Click **Start Camera** to begin detection.
4. Click **Capture Image** to save a snapshot with overlays.
5. Click **Stop Camera** to end the session.

## Project Structure
```
Real_Time_Face_Detection/
│-- index.html          # Main HTML file
│-- script.js           # JavaScript logic for face detection
│-- face-api.min.js     # Face API library
│-- models/             # Pre-trained models for detection
│-- README.md           # Project documentation
```

## Dependencies
- **Face API.js**
- **JavaScript (ES6)**
- **HTML & CSS**

<<<<<<< HEAD
Technologies Used

HTML: For creating the structure of the web page.
=======
## Notes
- Ensure the `models/` directory contains pre-trained models.
- The application works best in **Google Chrome** and **Firefox**.
>>>>>>> dbaff1f (README file provides understanding of the project)

## License
This project is open-source and available under the **MIT License**.

## Author
[Khadhar Syed](https://github.com/Khadar8)

<<<<<<< HEAD
face-api.js: A JavaScript library that provides pre-trained models for face detection, age and gender prediction, facial landmarks, and expressions.

Setup and Installation

To run this app locally, follow these steps:

Prerequisites

A modern web browser (Chrome, Firefox, Edge, etc.).

A local web server for serving the HTML files. You can use:

Live Server extension for VS Code.

Alternatively, you can use any server like http-server in Node.js or python -m SimpleHTTPServer if you're using Python.

Steps

Clone or download the repository to your local machine.

git clone https://github.com/yourusername/face-detection-app.git

cd face-detection-app

Open the folder in your code editor (e.g., VS Code).

Install the required models from face-api.js by downloading them into the models directory. You can find the models here:

Tiny Face Detector

Face Landmarks 68 Net

Face Recognition Net

Age and Gender Net

Download and place them in the models folder of the project.

Start the local server:

If you're using VS Code, right-click index.html and choose "Open with Live Server."

Or use a different local server method.

Open index.html in your browser.

Running the Application
Start the camera: Click the "Start Camera" button to activate the camera and begin real-time face detection.

Stop the camera: Click the "Stop Camera" button to stop the camera feed.

Capture Image: Click the "Capture Image" button to capture the current frame along with detection lines. The captured image will appear below the video.


Contribution
Feel free to fork the project and create pull requests for any improvements or bug fixes. Contributions are always welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.
=======
>>>>>>> dbaff1f (README file provides understanding of the project)
