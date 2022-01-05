import React from "react";
import "../styles/NotFound.scss";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__bg"></div>
      <div className=" not-found__container">
        <p className="not-found__container--text">Te has perdido.</p>
        <p className="not-found__container--text">
          Ésta página no está disponible!
        </p>
        <Link to="/" className="not-found__container--link">
          Regresar al inicio
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
