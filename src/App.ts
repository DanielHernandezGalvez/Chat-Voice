import React, { useState } from "react";
import SpeechRecognition from "./components/SpeechRecognition";
import VoiceRecognition from "./components/VoiceRecognition";

const App: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);

  const handleText = (): void => {
    setChange(false);
  };

  const handleVoice = (): void => {
    setChange(true);
  };

  return (
    <>
      <nav className="navbar navbar-primary bg-primary px-4 ">
        <button
          className="btn btn-primary border-none p-0"
          onClick={handleText}
        >
          Voz a texto
        </button>
        <button
          className="btn btn-primary border-none p-0"
          onClick={handleVoice}
        >
          Texto a Voz
        </button>
      </nav>

      {change ? <SpeechRecognition /> : <VoiceRecognition />}
    </>
  );
};

export default App;


/*
// import { useUser } from "./context/UserContext";
import SpeechRecognition from "./components/SpeechRecognition";
import React, { useState } from "react";
import VoiceRecognition from "./components/VoiceRecognition";

function App() {
  const [change, setChange] = useState(false);

  const handleText = () => {
    setChange(false);
  };
  const handleVoice = () => {
    setChange(true);
  };

  return (
    <>
      <nav class="navbar navbar-primary bg-primary px-4 ">
        <button
          className="btn btn-primary border-none p-0"
          onClick={handleText}
        >
          Voz a texto{" "}
        </button>
        <button
          className="btn btn-primary border-none p-0"
          onClick={handleVoice}
        >
          Texto a Voz
        </button>
      </nav>

      {change ? <SpeechRecognition /> : <VoiceRecognition />}
    </>
  );
}

export default App;
