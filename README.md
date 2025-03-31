# Real-Time Face Detection

Real-Time Face Detection is a web-based application that utilizes **Face API** to detect faces, facial landmarks, expressions, age, and gender in real-time using a webcam. Users can capture images with detected overlays and save them.

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

## Notes
- Ensure the `models/` directory contains pre-trained models.
- The application works best in **Google Chrome** and **Firefox**.

## License
This project is open-source and available under the **MIT License**.

## Author
[Khadhar Syed](https://github.com/Khadar8)