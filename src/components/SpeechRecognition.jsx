import React, { useState, useEffect } from "react";

function SpeechRecognition() {
  const [texto, setTexto] = useState("");
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [speech, setSpeech] = useState(null);
  const [textareaRows, setTextareaRows] = useState(12);

  useEffect(() => {
    const getVoices = () => {
      const voiceOptions = speechSynthesis.getVoices();
      if (voiceOptions.length > 0) {
        setVoices(voiceOptions);
        setSelectedVoice(voiceOptions[1]); // Establecer la primera voz como seleccionada por defecto
      } else {
        setTimeout(getVoices, 100);
      }
    };

    getVoices();
  }, []);

  useEffect(() => {
    // Actualizar el número de filas según el tamaño de la pantalla al cargar el componente
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setTextareaRows(8); // Establecer 8 filas para pantallas pequeñas
      } else {
        setTextareaRows(12); // Establecer 12 filas para pantallas mayores o iguales a 576px
      }
    };

    // Agregar el evento de escucha al cargar el componente
    window.addEventListener("resize", handleResize);

    // Llamar a la función para establecer el número de filas inicial
    handleResize();

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateRate = (value) => {
    setRate(value);
  };

  const updatePitch = (value) => {
    setPitch(value);
  };

  const updateVolume = (value) => {
    setVolume(value);
  };
  const updateVoice = (event) => {
    const voiceName = event.target.value;
    const selected = voices.find((voice) => voice.name === voiceName);
    setSelectedVoice(selected);
  };

  const speakText = () => {
    if (selectedVoice) {
      const newSpeech = new SpeechSynthesisUtterance(texto);
      newSpeech.voice = selectedVoice;
      newSpeech.rate = rate;
      newSpeech.pitch = pitch;
      newSpeech.volume = volume;

      setSpeech(newSpeech);
      window.speechSynthesis.speak(newSpeech);
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <h1 className="mb-4 text-center">Chat Voice</h1>

      {/* <div className="">
        <div>
          <label htmlFor="voz"></label>
          <select
            id="voz"
            className="form-control shadow-sm"
            onChange={updateVoice}
            required
          >
            <option>Seleccionar voz</option>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
        </div>
      </div> */}

      <textarea
        className="form-control shadow-sm my-5"
        rows={textareaRows}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
      />
      <div className="container d-flex flex-wrap justify-content-between">
        <div id="inputs" className="col-md-6 col-sm-12 my-auto">
          <div className="my-2">
            <label>Velocidad:</label>
            <input
              type="range"
              className="form-range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => updateRate(parseFloat(e.target.value))}
            />
            <span>{rate}</span>
          </div>
          <div className="my-2">
            <label>Tono:</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="2"
              step="0.1"
              value={pitch}
              onChange={(e) => updatePitch(parseFloat(e.target.value))}
            />
            <span>{pitch}</span>
          </div>
          <div className="my-2">
            <label>Volumen:</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => updateVolume(parseFloat(e.target.value))}
            />
            <span>{volume}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 text-end mx-auto my-auto">
          <button className="btn btn-primary  ms-2 " onClick={speakText}>
            Leer
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeechRecognition;
