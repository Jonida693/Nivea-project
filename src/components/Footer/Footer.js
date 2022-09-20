import React from "react";
import "./Footer.scss";

function Footer() {



   const handleClick = (e) => {
     var target = e.target;
     target.closest(".nx-panel").classList.toggle("active");
   };
   const handleOpen = (e) => {
     var target = e.target;
     target.closest(".nx-panel").classList.toggle("open");
   };

   const handleEnter = (e) => {
     var target = e.target;
     target.closest(".footer-hdl").classList.toggle("open");
   };
  return (
    <>
      <section className="footer">
        <div className="total-footer row">
          <div className="footer-left col-xs-6">
            <div className="footer-links">
              <div className="nx-panel" onClick={(e) => handleClick(e)}>
                <h2>INFORMATIONEN </h2>
              </div>
              <div className="footer-nav">
                <ul>
                  <li>
                    <a href="/">Impressum</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    <a href="/"> Kontakt</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    <a href="/"> Nutzungsbedingungen</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    <a href="/">Datenschutzerklärung</a>
                  </li>
                  <li className="empty"> </li>
                  <li>
                    <a href="/"> AGB</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    {" "}
                    <a href="/"> Sitemap</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    {" "}
                    <a href="/"> FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-accordion">
              <div className="nx-panel" onClick={(e) => handleOpen(e)}>
                <h2>EINKAUFEN BEI NIVEA</h2>
              </div>
              <div className="footer-nav2" onClick={(e) => handleClick(e)}>
                <ul>
                  <li>
                    {" "}
                    <a href="/"> Bei NIVEA einloggen</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    {" "}
                    <a href="/"> Bei NIVEA registrieren</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    {" "}
                    <a href="/"> Versandkosten & Rückgaberecht</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    {" "}
                    <a href="/"> Zahlungsarten</a>
                  </li>
                  <li className="empty"> | </li>
                  <li>
                    {" "}
                    <a href="/"> Geschenkgutschein</a>
                  </li>
                  <li className="empty"> </li>
                  <li> </li>
                  <li>
                    {" "}
                    <a href="/"> Gutscheinwert prüfen</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-right col-xs-6">
            <div className="footer-hdl" onClick={(e) => handleEnter(e)}>
              <h2>
                ENTDECKEN SIE DIE VORTEILE DES NIVEA FÜR MICH TREUEPROGRAMMS!
              </h2>

              <div className="footer-right1">
                <div className="footer-desc">
                  <p>
                    Exklusiv für Mitglieder: kostenlose Produkte, persönliche
                    Hautanalyse und vieles mehr.
                  </p>
                </div>

                <button className="label-footer"> E-Mail</button>
                <div className="blue-btn">
                  <button className="label-footer2">WAITER</button>
                </div>
              </div>
            </div>

            <div className="footer-icons">
              <h3>IN VERBINDUNG BLEIBEN</h3>

              <div className="socialmedia-icons">
                <button className="btn-media">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                  >
                    <path
                      class="cls-1"
                      d="M13,29.46V15.89H9.59V12.53H13V8c0-3.44,2.13-5.46,5.74-5.46a10.4,10.4,0,0,1,3.65.67l-.64,3.61A4.3,4.3,0,0,0,19.4,6a2.18,2.18,0,0,0-2.34,2.41v4.14h5l-.85,3.37H17.06V29.46Z"
                    ></path>
                  </svg>
                </button>

                <button className="btn-media">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                  >
                    <path
                      class="cls-1"
                      d="M24.09,3.61H8a4.81,4.81,0,0,0-4.8,4.8V23.74A4.81,4.81,0,0,0,8,28.54H24.09a4.81,4.81,0,0,0,4.8-4.8V8.41A4.81,4.81,0,0,0,24.09,3.61Zm-8,9.33a4.86,4.86,0,1,1-4.86,4.86A4.87,4.87,0,0,1,16.1,12.93Zm6.18-7.08A2.26,2.26,0,1,1,20,8.11,2.26,2.26,0,0,1,22.28,5.86Zm1.81,21.08H8a3.21,3.21,0,0,1-3.2-3.2V12.3h8a6.46,6.46,0,1,0,6.77,0h7.8V23.74A3.21,3.21,0,0,1,24.09,26.94Z"
                    ></path>
                  </svg>
                </button>

                <button className="btn-media">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                  >
                    <path
                      class="cls-1"
                      d="M14.18,20.25c-.69,3.63-1.54,7.11-4,8.92-.77-5.48,1.13-9.6,2-14-1.51-2.54.18-7.66,3.37-6.4,3.92,1.55-3.39,9.45,1.52,10.44,5.13,1,7.22-8.89,4-12.12C16.49,2.46,7.71,7,8.79,13.69c.26,1.63,1.95,2.13.67,4.38-2.94-.65-3.82-3-3.7-6.06.18-5.06,4.55-8.6,8.92-9.09,5.54-.62,10.73,2,11.45,7.24.81,5.88-2.5,12.24-8.42,11.78C16.11,21.81,15.43,21,14.18,20.25Z"
                    ></path>
                  </svg>
                </button>
                <button className="btn-media">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                  >
                    <path
                      class="cls-1"
                      d="M31.08,8.39A4,4,0,0,0,28.29,5.6c-2.48-.68-12.38-.68-12.38-.68s-9.9,0-12.38.65A4,4,0,0,0,.75,8.39,41.75,41.75,0,0,0,.1,16a41.6,41.6,0,0,0,.65,7.61A4,4,0,0,0,3.54,26.4c2.5.68,12.38.68,12.38.68s9.9,0,12.38-.65a4,4,0,0,0,2.79-2.79A41.75,41.75,0,0,0,31.73,16,39.65,39.65,0,0,0,31.08,8.39ZM12.76,20.74V11.26L21,16Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="nx-u-container">
          <div className="media-logo">Beiersdorf</div>

          <div className="rights">Copyright © Beiersdorf 2022</div>
        </div>
      </section>
    </>
  );
}

export default Footer;
