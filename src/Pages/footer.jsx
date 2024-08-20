import React from "react";
import "./footer.css";
import Whatssap from "../assets/whatssap3.jpg";
import localizacao from "../assets/img/Localiza.png";

function Footer() {
  return (
    <div>
      <div className="whatssapp">
        <a href="https://g.co/kgs/2xB2Spi" target="_blank">
          <img className="whatss" src={localizacao} alt="Localização" />
        </a>
        <a href="" target="_blank">
          <img className="whatss" src={Whatssap} alt="WhatsApp" />
        </a>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-text">
            Copyright &copy; 2024 Tech Cell. Todos os direitos reservados
          </h3>
          <p className="footer-text2">Desenvolvido por Jordeval</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
