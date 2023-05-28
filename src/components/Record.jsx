export default function Record({ transcript, confidence, eliminarGrabacion }) {
  return (
    <div className="container shadow-sm color-gray rounded-0 my-3 ">
      <div className="text-end">
        <button
          className="btn  rounded-circle  py-1 px-2"
          onClick={eliminarGrabacion}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle  my-auto text-danger "
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>

      <div className="text-center">
        <p className="fw-bold">{transcript}</p>
        <div className="d-flex justify-content-between">
          <p className="fs-6 text-secondary  my-auto">
            Te entendí un {parseInt(confidence * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
}
