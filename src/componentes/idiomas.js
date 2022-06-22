import "../styles/idiomas.css";
export const Idiomas = (data) => {
  const IDIOMAS = (
    <div id={`idiomas`}>
      <h3>IDIOMAS</h3>
      <div id={`detalle_idioma`}>
        {data.map((info) => (
          <div id={`progress`} key={info.idioma.nombre_idioma}>
            <div
              id={`progress-bar`}
              style={{ width: `${info.idioma.nivel_ingles}%` }}
            >
              <span id={`progress-bar-text`}>
                {info.idioma.nombre_idioma} {info.idioma.nivel_ingles}%{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return IDIOMAS;
};
