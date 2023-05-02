import { Link } from 'react-router-dom';
import React from "react";
import "./css/HeaderJr.css";

function HeaderJr() {
    return (
        <header>
          <nav>
            <div className="headerjr">
              <Link to="/" className="button">≡ Todo</Link>
              <Link to="/ofertas" className="button">  Ofertas al día</Link>
              <Link to="/servicio-al-cliente" className="button">  Servicio al cliente</Link>
              <Link to="/listas" className="button">  Listas</Link>
              <Link to="/tarjetas-de-regalo" className="button">  Tarjetas de regalo</Link>
              <Link to="/vender" className="button sell">  Vender</Link>
              <Link to="/compra" className="buttonf">Compra las ofertas de Electrónicos</Link>
            </div>
          </nav>
        </header>
      );
}

export default HeaderJr;
