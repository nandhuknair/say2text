import React, { useState, useEffect } from "react";
import { Mic, MicOff, Copy, RefreshCw } from "lucide-react";

const Body: React.FC = () => {
  const [listening, setListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");
  const [recognizer, setRecognizer] = useState<SpeechRecognition | null>(null);
  console.log(transcript)

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const newTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(" ");
      setTranscript(newTranscript);
    };

    setRecognizer(recognition);
  }, []);

  const handleListening = () => {
    if (recognizer) {
      recognizer.start();
      setListening(true);
    }
  };

  const handleNotListening = () => {
    if (recognizer) {
      recognizer.stop();
      setListening(false);
    }
  };

  const handleReset = () => {
    setTranscript("");
    setListening(false);

  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);

  };

  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    return <p>Your browser doesn't support speech recognition.</p>;
  }

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
          <span className="font-extrabold text-white text-xl">say2text</span>
        </div>
        <div>
          <button
            onClick={handleReset}
            className="bg-gradient-to-r from-pink-500 flex  to-orange-500 hover:from-pink-600 hover:to-orange-600 px-8 py-1 rounded-sm"
          >
            <RefreshCw className="mr-2 h-5 w-5" /> Refresh
          </button>
        </div>
      </div>

      {/* Heading and Paragraph */}
      <div className="flex flex-col items-center lg:mt-36 mt-10 gap-7">
        <h1 className="font-extralight text-6xl ">Speech to text converter</h1>
        <p className="md:text-center lg:px-72 text-neutral-400">
          Experience the future of seamless communication with our Speech to
          Text Converter. This powerful tool allows you to transcribe your
          spoken words into text in real time with incredible accuracy. Whether
          you're dictating notes, creating content, or simply saving time, our
          converter turns your voice into text effortlessly. It’s perfect for
          students, professionals, and anyone looking to simplify their
          workflow.
        </p>
      </div>

      {/* Body */}
      <div className="flex justify-end ">
        <button
          onClick={handleCopy}
          className="bg-[#ffffff07] hover:bg-gray-600 text-white p-3 rounded-md mr-6"
        >
          <Copy className="h-6 w-6" />
          <span className="sr-only">Copy to clipboard</span>
        </button>
      </div>

      <div className="flex flex-col items-center">
        <textarea
          value={transcript}
          readOnly
          placeholder="Your speech will appear here...."
          className="w-full mt-11 h-80 lg:h-64 p-4 text-lg bg-[#ffffff07] border-none rounded-md text-white placeholder-gray-500  focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex justify-center mt-10">
        {listening ? (
          <button
            onClick={handleNotListening}
            className="bg-pink-600 hover:bg-pink-700 flex items-center px-8 py-1 rounded-full"
          >
            <MicOff className="mr-2 h-5 w-5" />
            Stop Listening
          </button>
        ) : (
          <button
            onClick={handleListening}
            className="bg-gradient-to-r from-pink-500 flex items-center to-orange-500 hover:from-pink-600 hover:to-orange-600 px-8 py-1 rounded-full"
          >
            <Mic className="mr-2 h-5 w-5" />
            Start Listening
          </button>
        )}
      </div>
    </div>
  );
};

export default Body;
