import "../styles/proyectos.css";
export const Proyectos = (data, iconos) => {
  const PROYECTOS = (
    <div id={`proyectos`}>
      <h3>PROYECTOS</h3>
      <div id={`proyecto_detalle`}>
        {data.map((info) => (
          <div key={info.nombre_proyecto} id={`info_proyectos`}>
            <h5>{info.nombre_proyecto}</h5>
            <p>
              <img
                href={`${info.link_deply}`}
                src={iconos.github}
                alt={`github`}
              />
              <img
                href={`${info.link_github}`}
                src={iconos.deploy}
                alt={`deploy`}
              />
              <img
                href={`${info.link_github}`}
                src={iconos.stack}
                alt={`stack`}
              />
            </p>
            <hr />
            <p>{info.descripcion_proyecto}</p>
          </div>
        ))}
      </div>
    </div>
  );
  return PROYECTOS;
};
