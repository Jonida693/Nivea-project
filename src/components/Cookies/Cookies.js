import React, { useEffect } from "react";
import "./Cookies.scss";

function Cookies() {
  useEffect(() => {
    var cookiies = document.getElementById("cookie");
    var closeText = document.getElementById("close-cookie");
    var openText = document.getElementById("cookies-icon");

    closeText.onclick = function () {
      cookiies.style.display = "none";
      cookiies.style.zIndex = "-999999";
    };
    openText.onclick = function () {
      cookiies.style.display = "block";
       cookiies.style.zIndex = "999999";
    };
  }, []);

  return (
    <div className="cookies" id="cookie">
      <div className="cookie-inner">
        <div className="cookie-content">
          <div className="fly-cookie">
            <div className="hdl-cookie">
              HINWEIS UND EINWILLIGUNG ZU COOKIES & ÄHNLICHEN TOOLS
            </div>
            <div className="cookie-text">
              Wir verwenden Cookies/Tools um diesen Dienst anzubieten und zu
              betreiben, inklusive des Schutzes gegen Betrug oder Missbrauch
              sowie zur Reichweitenmessung. Letzterem kann in den Einstellungen
              widersprochen werden.
              <hr />
              Mit zusätzlichem Klick auf „alle akzeptieren“ verwenden wir
              Cookies/Tools um die Qualität und Performance unseres Dienstes zu
              verbessern, für funktionale und personalisierte Leistungs- und
              Designverbesserungen, die Effektivität unserer Anzeigen oder
              Kampagnen zu messen, für personalisierte Inhalte und um Ihnen
              individuelle Informationen zu Marketingzwecken, auch außerhalb
              unserer Webseite via. zu präsentieren. Diese ermöglichen
              personalisierte Online-Anzeigen und erweiterte Analyse- und
              Auswertungsmöglichkeiten über die Zielgruppe und das
              Nutzerverhalten. Dies beinhaltet auch den Zugriff und die
              Speicherung von Daten auf Ihrem Gerät. Sie sind zudem damit
              einverstanden, dass die Daten auch an Drittstaaten außerhalb des
              Europäischen Wirtschaftsraumes ohne angemessenes
              datenschutzrechtliches Schutzniveau übermittelt werden (insb.
              USA). Es besteht dabei die Möglichkeit, dass Behörden auf die
              Daten Zugriff nehmen, ohne dass es einen Rechtsbehelf dagegen
              gibt. Sollten Sie die in diesem Absatz beschriebene Verarbeitung
              nicht wünschen, können Sie das Banner schließen. Ihre Einwilligung
              können Sie jederzeit mit Wirkung für die Zukunft widerrufen
              <hr />
            </div>
          </div>
          <div className="cookie-button">
            <button className="btn-co1">Einstellungen</button>
            <button className="btn-co2">Alle akzeptieren </button>
          </div>

          <div className="cookie-logo">
            <img
              class="cmpdl"
              alt=""
              src="https://cdn.consentmanager.net/delivery/img/logo1627385241x9374.gif"
            ></img>
          </div>
          <div className="close-cookie" id="close-cookie">
            <span>
              <svg
                className="svg-cookie"
                xmlns="http://www.w3.org/2000/svg"
                xmlnssvg="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                version="1.1"
                width="16"
                height="16"
              >
                <g id="surface1">
                  <path
                    id="cmpsvgclosebtn"
                    d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
