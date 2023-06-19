import x from "./boton-x.png";
import copy from "./copia.png";
import { useState } from "react";

export default function Record({ transcript, confidence, eliminarGrabacion }) {
  const [copied, setCopied] = useState(false);

  const copiarTexto = () => {
    navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="container shadow-sm color-gray rounded-0 my-3">
      <div className="d-flex justify-content-between">
        <button
          className="btn rounded-circle py-2 px-1 "
          onClick={eliminarGrabacion}
        >
          <img className="equis" src={x} width={20} alt="Botón Eliminar" />
        </button>
        <button className="btn rounded-circle  py-1 px-1" onClick={copiarTexto}>
          {copied ? (
            <span className="text-success">Copiado</span>
          ) : (
            <img className="copiar" src={copy} width={20} alt="copiar" />
          )}
        </button>
      </div>

      <div className="text-center">
        <p className="fw-bold">{transcript}</p>
        <div className="d-flex justify-content-between">
          <p className="fs-6 text-secondary my-auto">
            Te entendí un {parseInt(confidence * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
}
