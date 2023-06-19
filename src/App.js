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
      <nav class="navbar navbar-dark bg-dark px-4 ">
        <button className="btn btn-dark p-0" onClick={handleText}>
          Texto a Voz
        </button>
        <button className="btn btn-dark p-0" onClick={handleVoice}>
          Voz a texto
        </button>
      </nav>

      {change ? <SpeechRecognition /> : <VoiceRecognition />}
    </>
  );
}

export default App;
