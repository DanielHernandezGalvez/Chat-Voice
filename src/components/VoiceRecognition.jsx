import React, { useEffect, useState } from "react";
import Record from "./Record";
import { Toast } from "react-bootstrap";

export default function VoiceRecognition() {
  const [grabaciones, setGrabaciones] = useState([]);
  const [estado, setEstado] = useState("");
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  useEffect(() => {
    const grabacionesStorage = localStorage.getItem("grabaciones");

    if (grabacionesStorage) {
      setGrabaciones(JSON.parse(grabacionesStorage));
    }
  }, []);

  const agregarGrabacion = (grabacion) => {
    const nuevasGrabaciones = [...grabaciones, grabacion];
    setGrabaciones(nuevasGrabaciones);
    localStorage.setItem("grabaciones", JSON.stringify(nuevasGrabaciones));
  };

  const eliminarGrabacion = (index) => {
    const nuevasGrabaciones = grabaciones.filter((_, i) => i !== index);
    setGrabaciones(nuevasGrabaciones);
    localStorage.setItem("grabaciones", JSON.stringify(nuevasGrabaciones));
  };

  const ejecutarSpeechAPI = () => {
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    setEstado("Escuchando...");

    recognition.onspeechend = function () {
      setEstado("Se dejó de grabar...");
      recognition.stop();
    };

    recognition.onresult = function (e) {
      console.log(e.results);

      const { confidence, transcript } = e.results[0][0];

      const grabacion = {
        transcript: transcript,
        confidence: confidence,
      };

      agregarGrabacion(grabacion);
    };
  };

  return (
    <div className="container mt-4 mb-5 pb-5 text-center">
      {showToast && (
        <Toast
          show={showToast}
          onClose={handleCloseToast}
          delay={5000}
          autohide
          style={{
            position: "fixed",
            bottom: "30px",
            right: "10px",
            zIndex: 9999,
            background: "#fff",
          }}
        >
          <Toast.Header>
            <strong className="mx-auto fs-4 text-warning">
              Compatibilidad
            </strong>
          </Toast.Header>
          <Toast.Body>
            Algunos navegadores pueden no ser compatibles con esta aplicación.
            Favor de usar Google Chrome
          </Toast.Body>
        </Toast>
      )}

      <h1 className="mb-5">Voice Chat</h1>
      <div className="container text-center ">
        <button className="btn btn-dark" onClick={ejecutarSpeechAPI}>
          Iniciar reconocimiento de voz
        </button>
      </div>
      <div id="salida" className="p-2 mt-5">
        <div className="container text-start">
          <p className="text-primary">{estado}</p>
        </div>
        {grabaciones.map((grabacion, index) => (
          <Record
            key={index}
            transcript={grabacion.transcript}
            confidence={grabacion.confidence}
            eliminarGrabacion={() => eliminarGrabacion(index)}
          />
        ))}
      </div>
    </div>
  );
}
