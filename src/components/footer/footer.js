import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="#">
              <strong>Conócenos</strong>
            </a>
          </li>
          <li>
            <a href="#">Trabaja en Amazon</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Acerca de Amazon</a>
          </li>
          <li>
            <a href="#">Relaciones con los Inversionistas</a>
          </li>
          <li>
            <a href="#">Dispositivos Amazon</a>
          </li>
          <li>
            <a href="#">Amazon Science</a>
          </li>
        </ul>
        <ul className="footer-links footer-links-right">
          <li>
            <a href="#">
              <strong>Gana Dinero con Nosotros</strong>
            </a>
          </li>
          <li>
            <a href="#">Vender productos en Amazon</a>
          </li>
          <li>
            <a href="#">Vende en Amazon Business</a>
          </li>
          <li>
            <a href="#">Vender aplicaciones en Amazon</a>
          </li>
          <li>
            <a href="#">Programa de Afiliados</a>
          </li>
          <li>
            <a href="#">Anuncia tus Productos</a>
          </li>
          <li>
            <a href="#">Publica tu Libro en Kindle</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
