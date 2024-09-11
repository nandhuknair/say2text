# Say2Text - Real-Time Speech to Text Converter 🎤

Welcome to Say2Text, a powerful web-based speech-to-text converter that transcribes your spoken words into text effortlessly and in real-time. Whether you're dictating notes, writing content, or simply saving time, this tool is perfect for students, professionals, and anyone looking to streamline their workflow!
Live link : https://say2text.netlify.app/

## 🚀 Features

- **Real-Time Transcription**: Converts speech to text instantly as you speak.
- **Continuous Listening**: Stay in flow with continuous speech recognition.
- **Copy to Clipboard**: Quickly copy your transcriptions with just one click.
- **Reset Transcript**: Start fresh at any time by resetting the current transcript.
- **User-Friendly Interface**: Minimalistic design with intuitive controls.
- **Browser Support Check**: Automatically informs if your browser doesn't support speech recognition.

## 🔥 Live Demo

Experience the power of Say2Text with a live demo:

https://github.com/user-attachments/assets/fcfea758-505e-4272-945d-210ef2761c99


## 🛠️ Tech Stack

- **React** - For building a dynamic, interactive UI.
- **TypeScript** - To provide static typing and improve code quality.
- **Vite** - Lightning-fast development environment.
- **Tailwind CSS** - For beautiful and responsive styling.
- **Lucide React Icons** - Lightweight, customizable icons.

## 📦 Installation

Follow these simple steps to run this project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/say2text.git
   cd say2text
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open the app: Open http://localhost:3000 in your browser to see it in action.

## ⚙️ Usage

1. **Start Listening**: Press the "Start Listening" button to start transcribing your speech in real-time.
2. **Stop Listening**: Press the "Stop Listening" button to pause the transcription.
3. **Reset Transcript**: Clear the current transcription with the "Refresh" button.
4. **Copy to Clipboard**: Easily copy the transcribed text to your clipboard with the "Copy" button.



## 👩‍💻 How It Works

Say2Text uses the Web Speech API to handle speech recognition and transcription in real-time. The app is fully responsive and works in modern browsers that support speech recognition.

Core Functionality:
- The SpeechRecognition API is used to capture speech input.
- The app continuously listens for speech and updates the transcript dynamically.
- Users can control the process with "Start/Stop Listening", "Copy", and "Reset" actions.

## 📄 Browser Support

Say2Text is supported on browsers that implement the SpeechRecognition or webkitSpeechRecognition APIs. If your browser does not support this feature, the app will notify you.

## 🌟 Future Enhancements

- **Multi-language Support**: Extend support for multiple languages.
- **Speech Playback**: Allow playback of the recorded speech.
- **Enhanced Accessibility**: Improve support for screen readers and keyboard navigation.

## 🙌 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-newFeature`).
3. Make your changes and commit (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-newFeature`).
5. Open a pull request.
