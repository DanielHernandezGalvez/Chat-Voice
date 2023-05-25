import React, { useState, useEffect  } from 'react';

function SpeechRecognition() {
  const [texto, setTexto] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [speech, setSpeech] = useState(null);


  useEffect(() => {
    const getVoices = () => {
      const voiceOptions = speechSynthesis.getVoices();
      if (voiceOptions.length > 0) {
        setVoices(voiceOptions);
        setSelectedVoice(voiceOptions[4]); // Establecer la primera voz como seleccionada por defecto
      } else {
        setTimeout(getVoices, 100);
      }
    };
  
    getVoices();
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
    <div className='container mt-4 '>
      <h1 className='mb-4 text-center'>Chat Voice</h1>


      <div className=''>
      <div>
          <label htmlFor='voz'></label>
        <select id='voz' className='form-control shadow-sm' onChange={updateVoice} required>
          <option>Seleccionar voz</option>
          {voices.map(voice => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </div>
      </div>

      <textarea className='form-control shadow-sm my-5' rows="12" value={texto} onChange={e => setTexto(e.target.value)} />      
      <div className='container d-flex flex-wrap justify-content-between'>  
      <div id='inputs' className='col-md-6 col-sm-12 my-auto'>
      <div >
        <label>Velocidad:</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={e => updateRate(parseFloat(e.target.value))}
        />
        <span>{rate}</span>
      </div>
      <div>
        <label>Tono:</label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={pitch}
          onChange={e => updatePitch(parseFloat(e.target.value))}
        />
        <span>{pitch}</span>
      </div>
      <div>
        <label>Volumen:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={e => updateVolume(parseFloat(e.target.value))}
        />
        <span>{volume}</span>
      </div>
      </div>
      <div className='col-md-6 col-sm-12 text-end mx-auto my-auto'>
      <button className='btn btn-primary  ms-2 ' onClick={speakText}>Leer</button>
      </div>
      </div>
    </div>
  );
}

export default SpeechRecognition;

/*
reconocimiento de voz

<button type="button" id="microfono">Speech recognition API</button>
<div id="salida"></div>


const salida = document.getElementById("salida")
const microfono = document.getElementById("microfono")

microfono.addEventListener("click", ejecutarSpeechAPI)

function ejecutarSpeechAPI() {
  const SpeechREcognition = webkitSpeechRecognition;
  const recognition = new SpeechREcognition();

  recognition.start();

  recognition.onstart = function() {
    salida.textContent = "Escuchando..."
  }

  recognition.onspeechend = funcion() {
    salida.textContent = "Se dejó de grabar..."
    recognition.stop()
  }

  recognition.onresult = function(e) {
    console.log(e.results)

    const {confidence, transcript} = e.results[0][0]

    const speech = document.createElement("p")
    speech.innerHTML = transcript

    const seguridad = document.createElement("p")
    seguridad.innerHTML = `Te entendí un ${ parseInt(confidence * 100)}%`

    salida.appendChild(speech)
    salida.appendChild(seguridad)
  }

}

*/
