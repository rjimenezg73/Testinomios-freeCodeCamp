import React from "react";
import '../stylesheets/Testimonio.css'

function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.png")}
        alt="Fotografía de Emma"/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">Emma Bostian en Suecia</p>
          <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
          <p className="texto-testimonio">"Siempre he tenido problemas para aprender Javascript. He tomado muchos cursos, pero el curso de freeCodeCamp fué el que se quedó. Estudiar Javascript, así como estructuras de datos y algoritmos en freeCodeCamp me dió las habilidades y confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
        </div>
    </div>
  );
};

export default Testimonio;