import React from "react";
import "./Header.scss";
import "./BurgerMenu";
import BurgerMenu from "./BurgerMenu";
// import Cookies from "./Cookies";


function Header() {
  const handleEnter = (e) => {
    var target = e.target;
    target.closest(".sub1").classList.toggle("active");
  };
  const handleLeave = (e) => {
    var target = e.target;
    target.closest(".active").classList.remove("active");
  };

  const handleClick = (e) => {
    var target = e.target;
    target.closest(".nx-burger-wrapper").classList.toggle("open");
  };

  const handleOpen = (e) => {
    var target = e.target;
    target.closest(".last-level").classList.toggle("open");
  };

  // const handleClose = (e) => {
  //   var target = e.target;
  //   var body = document.body;
  //   target.closest(".open").classList.remove("open");
  //   body.style.overflow = "none";
  // };
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img
              className="logo-img"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d3/NIVEA_logo_2021.svg"
              alt=""
            ></img>
          </div>
          <nav className="nav-links">
            <ul className="navbar">
              <li
                className="sub1"
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleLeave(e)}
              >
                <a className="primar-submenu" href="/">
                  PRODUKTE
                </a>
                <div className="submit">
                  <div className="nav-inner">
                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          NUR BEI NIVEA
                        </a>

                        <ul className="third-level">
                          <li className="nav-third-level">Fotodose</li>
                          <li className="nav-third-level">Parfum</li>
                          <li className="nav-third-level">Duftkerze</li>
                          <li className="nav-third-level">Raumduft</li>
                          <li className="nav-third-level">Fanartikel</li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          GESICHT
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            <span
                              className="last-level"
                              href=".#"
                              onClick={(e) => handleOpen(e)}
                            >
                              Gesicht
                              <svg
                                className="nav-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                              >
                                <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                              </svg>
                            </span>

                            <ul className="fourth-level">
                              <li className="nav-fourth-level">Fotodose</li>
                              <li className="nav-fourth-level">Parfum</li>
                              <li className="nav-fourth-level">Duftkerze</li>
                              <li className="nav-fourth-level">Raumduft</li>
                              <li className="nav-fourth-level">Fanartikel</li>
                            </ul>
                          </li>
                          <li className="nav-third-level">
                            <span
                              className="last-level"
                              href="/"
                              onClick={(e) => handleOpen(e)}
                            >
                              Gesichtspflege
                              <svg
                                className="nav-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                              >
                                <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                              </svg>
                            </span>
                            <ul className="fourth-level">
                              <li className="nav-fourth-level">Fotodose</li>
                              <li className="nav-fourth-level">Parfum</li>
                              <li className="nav-fourth-level">Duftkerze</li>
                              <li className="nav-fourth-level">Raumduft</li>
                              <li className="nav-fourth-level">Fanartikel</li>
                            </ul>
                          </li>
                          <li className="nav-third-level">
                            <span
                              className="last-level"
                              href="/"
                              onClick={(e) => handleOpen(e)}
                            >
                              Nachtcreme
                              <svg
                                className="nav-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                              >
                                <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                              </svg>
                            </span>
                            <ul className="fourth-level">
                              <li className="nav-fourth-level">Fotodose</li>
                              <li className="nav-fourth-level">Parfum</li>
                              <li className="nav-fourth-level">Duftkerze</li>
                              <li className="nav-fourth-level">Raumduft</li>
                              <li className="nav-fourth-level">Fanartikel</li>
                            </ul>
                          </li>
                          <li className="nav-third-level">
                            <span
                              className="last-level"
                              href="/"
                              onClick={(e) => handleOpen(e)}
                            >
                              Make Up
                              <svg
                                className="nav-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                              >
                                <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                              </svg>
                            </span>
                            <ul className="fourth-level">
                              <li className="nav-fourth-level">Fotodose</li>
                              <li className="nav-fourth-level">Parfum</li>
                              <li className="nav-fourth-level">Duftkerze</li>
                              <li className="nav-fourth-level">Raumduft</li>
                              <li className="nav-fourth-level">Fanartikel</li>
                            </ul>
                          </li>
                          <li className="nav-third-level">Gesichtsreinigung</li>
                          <li className="nav-third-level">Lippenpflege</li>
                          <li className="nav-third-level">Augencreme</li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          KÖRPER
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Körperpflege</li>
                          <li className="nav-third-level">Dusche & Bad</li>
                          <li className="nav-third-level">Deo</li>
                          <li className="nav-third-level">Handcreme</li>
                          <li className="nav-third-level">Seife</li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="sdhgjdgbhd"
                        >
                          HAARE
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Styling</li>
                          <li className="nav-third-level">Überblick</li>
                          <li className="nav-third-level">Shampoo</li>
                          <li className="nav-third-level">Spülung & Haarkur</li>
                          <li className="nav-third-level">Schaumfestiger</li>
                          <li className="nav-third-level">Spülung & Haarkur</li>
                          <li className="nav-third-level">Haarspray</li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          NIVEA MEN
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            <span
                              className="last-level"
                              href="/"
                              onClick={(e) => handleOpen(e)}
                            >
                              Gesicht
                              <svg
                                className="nav-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                              >
                                <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                              </svg>
                            </span>

                            <ul className="fourth-level">
                              <li className="nav-fourth-level">Fotodose</li>
                              <li className="nav-fourth-level">Parfum</li>
                              <li className="nav-fourth-level">Duftkerze</li>
                              <li className="nav-fourth-level">Raumduft</li>
                              <li className="nav-fourth-level">Fanartikel</li>
                            </ul>
                          </li>
                          <li className="nav-third-level">Deo</li>
                          <li className="nav-third-level">Haare</li>
                          <li className="nav-third-level">Rasur</li>
                          <li className="nav-third-level">Duschgel</li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="second-level1">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          BABY & KIDS
                        </a>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          GUTSCHEIN
                        </a>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          % SALE %
                        </a>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          GESCHENKE & SETS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Geschenke für Sie</li>
                          <li className="nav-third-level">Geschenke für Ihn</li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          NEUHEITEN
                          
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Miracle Garden</li>
                          <li className="nav-third-level">MEN Extreme Wild</li>
                          <li className="nav-third-level">72h Deo-Schutz</li>
                          <li className="nav-third-level">Nachhaltige Deos</li>
                        </ul>
                      </li>
                    </ul>

                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          REISEGRÖSSEN
                        </a>
                      </li>
                    </ul>

                    <div className="nav-close"></div>
                  </div>
                </div>
              </li>

              <li
                className="sub1"
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleLeave(e)}
              >
                <a className="primar-submenu " href="/">
                  TIPPS &BERATUNG
                </a>
                <div className="submit">
                  <div className="nav-inner">
                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          TIPPS FÜRS GESICHT
                        </a>

                        <ul className="third-level">
                          <li className="nav-third-level">
                            Gesichtspflege Tipps
                          </li>
                          <li className="nav-third-level">
                            Gesichtsreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hautirritationen Tipps
                          </li>
                          <li className="nav-third-level">Augenpflege Tipps</li>
                          <li className="nav-third-level">
                            Lippenpflege Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR DEN KÖRPER
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR HAARE
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>
                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          MÄNNERPFLEGE TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            Männer Hautpflege Tipps
                          </li>
                          <li className="nav-third-level">Männerrasur Tipps</li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Männerfrisuren Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          ONNENSCHUTZ TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            {" "}
                            UV-Strahlung & Lichtschutzfaktor
                          </li>
                          <li className="nav-third-level">Sonnenbrand Tipps</li>
                          <li className="nav-third-level">
                            Gesunde Bräune Tipps
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <ul className="second-level1">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          LIFESTYLE TIPPS & TESTS
                        </a>

                        <ul className="third-level">
                          <li className="nav-third-level">
                            What skincare type are you?
                          </li>
                          <li className="nav-third-level">Gesundheit</li>
                          <li className="nav-third-level">Entspannung</li>
                          <li className="nav-third-level">
                            Kosmetische Behandlungen
                          </li>
                          <li className="nav-third-level">
                            Weitere Tipps & Tricks
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <div className="nav-close"></div>
                  </div>
                </div>
              </li>

              <li
                className="sub1"
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleLeave(e)}
              >
                <a className="primar-submenu " href="/">
                  NEUEITEN
                </a>
                <div className="submit">
                  <div className="nav-inner">
                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          TIPPS FÜRS GESICHT
                        </a>

                        <ul className="third-level">
                          <li className="nav-third-level">
                            Gesichtspflege Tipps
                          </li>
                          <li className="nav-third-level">
                            Gesichtsreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hautirritationen Tipps
                          </li>
                          <li className="nav-third-level">Augenpflege Tipps</li>
                          <li className="nav-third-level">
                            Lippenpflege Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR DEN KÖRPER
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR HAARE
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>
                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          MÄNNERPFLEGE TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            Männer Hautpflege Tipps
                          </li>
                          <li className="nav-third-level">Männerrasur Tipps</li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Männerfrisuren Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          ONNENSCHUTZ TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            {" "}
                            UV-Strahlung & Lichtschutzfaktor
                          </li>
                          <li className="nav-third-level">Sonnenbrand Tipps</li>
                          <li className="nav-third-level">
                            Gesunde Bräune Tipps
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="nav-close"></div>
                  </div>
                </div>
              </li>

              <li
                className="sub1"
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleLeave(e)}
              >
                <a className="primar-submenu " href="/">
                  NIVEA FUR MICH
                </a>
                <div className="submit">
                  <div className="nav-inner">
                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          TIPPS FÜRS GESICHT
                        </a>

                        <ul className="third-level">
                          <li className="nav-third-level">
                            Gesichtspflege Tipps
                          </li>
                          <li className="nav-third-level">
                            Gesichtsreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hautirritationen Tipps
                          </li>
                          <li className="nav-third-level">Augenpflege Tipps</li>
                          <li className="nav-third-level">
                            Lippenpflege Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR DEN KÖRPER
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR HAARE
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>
                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          MÄNNERPFLEGE TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            Männer Hautpflege Tipps
                          </li>
                          <li className="nav-third-level">Männerrasur Tipps</li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Männerfrisuren Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          ONNENSCHUTZ TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            {" "}
                            UV-Strahlung & Lichtschutzfaktor
                          </li>
                          <li className="nav-third-level">Sonnenbrand Tipps</li>
                          <li className="nav-third-level">
                            Gesunde Bräune Tipps
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          REISEGRÖSSEN
                          <div className="image-nav">
                            <img
                              alt=""
                              className="nav-img"
                              src="https://images-eu.nivea.com/-/media/global/neu-von-nivea/nivea-human-touch/articles/story-heliosa-juarez/000002_en_gl_niv_purpose_08_2020_digital_lp_stage_heloisa_juarez_2000_1333.jpg?rx=0&ry=27&rw=2000&rh=975&mw=940&hash=740E62CCD433A591A037F6623BDA0F8B"
                            ></img>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <div className="nav-close"></div>
                  </div>
                </div>
              </li>
              <li
                className="sub1"
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleLeave(e)}
              >
                <a className="primar-submenu " href="/">
                  UBER UNS
                </a>
                <div className="submit">
                  <div className="nav-inner">
                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          TIPPS FÜRS GESICHT
                        </a>

                        <ul className="third-level">
                          <li className="nav-third-level">
                            Gesichtspflege Tipps
                          </li>
                          <li className="nav-third-level">
                            Gesichtsreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hautirritationen Tipps
                          </li>
                          <li className="nav-third-level">Augenpflege Tipps</li>
                          <li className="nav-third-level">
                            Lippenpflege Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR DEN KÖRPER
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          TIPPS FÜR HAARE
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">Hautpflege Tipps</li>
                          <li className="nav-third-level">
                            Körperreinigung Tipps
                          </li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Haarentfernung Tipps
                          </li>
                        </ul>
                      </li>
                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          MÄNNERPFLEGE TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            Männer Hautpflege Tipps
                          </li>
                          <li className="nav-third-level">Männerrasur Tipps</li>
                          <li className="nav-third-level">
                            Hände & Füße Tipps
                          </li>
                          <li className="nav-third-level">
                            Männerfrisuren Tipps
                          </li>
                        </ul>
                      </li>

                      <li className="second-item">
                        <a
                          className="submenu
                        "
                          href="/"
                        >
                          ONNENSCHUTZ TIPPS
                        </a>
                        <ul className="third-level">
                          <li className="nav-third-level">
                            {" "}
                            UV-Strahlung & Lichtschutzfaktor
                          </li>
                          <li className="nav-third-level">Sonnenbrand Tipps</li>
                          <li className="nav-third-level">
                            Gesunde Bräune Tipps
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <ul className="second-level">
                      <li className="second-item">
                        <a className="submenu " href="/">
                          REISEGRÖSSEN
                          <div className="image-nav">
                            <img
                              alt=""
                              className="nav-img"
                              src="https://images-eu.nivea.com/-/media/global/neu-von-nivea/nivea-human-touch/articles/story-heliosa-juarez/000002_en_gl_niv_purpose_08_2020_digital_lp_stage_heloisa_juarez_2000_1333.jpg?rx=0&ry=27&rw=2000&rh=975&mw=940&hash=740E62CCD433A591A037F6623BDA0F8B"
                            ></img>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <div className="nav-close"></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="icons">
            <div className="icon1" id="shoppi">
              <svg
                className="icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
              </svg>
            </div>
            <div className="icon1" id="searchi">
              <svg
                className="icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.718,31.522,22.4,23.207a.8.8,0,0,1-.014-1.116,11.957,11.957,0,1,0-3.463,2.542.8.8,0,0,1,.7,1.439,13.613,13.613,0,1,1,4.442-3.459l7.781,7.779Z"></path>
              </svg>
            </div>
            <div className="icon1" id="logini">
              <svg
                className="icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M22.484,23.44a10,10,0,0,0,3.5-6.648h.183a2.513,2.513,0,0,0,2.26-2.743v-.01A2.513,2.513,0,0,0,26.153,11.3h-.788a.59.59,0,0,0-.073.015c-.021,0-.038-.012-.059-.012a.8.8,0,0,0-.8.8v3.705A8.432,8.432,0,1,1,7.567,15.79V10.032a8.432,8.432,0,0,1,16.544-2.3.8.8,0,1,0,1.539-.438A10.033,10.033,0,0,0,5.967,10.032V11.3H5.834a2.513,2.513,0,0,0-2.26,2.743v.01a2.513,2.513,0,0,0,2.271,2.734h.175a10.017,10.017,0,0,0,3.53,6.67C3.6,24.609,0,27.394,0,31.2v.006A.8.8,0,1,0,1.6,31.2c0-3.654,4.518-5.712,9.962-6.427A9.98,9.98,0,0,0,16,25.822h.015a9.971,9.971,0,0,0,4.47-1.066c5.407.7,9.915,2.765,9.915,6.444a.8.8,0,1,0,1.6,0C32,27.371,28.413,24.574,22.484,23.44Zm4.339-9.392c0,.655-.354,1.145-.67,1.145H26.03V12.9h.123C26.469,12.9,26.823,13.393,26.823,14.048Zm-21.649,0c0-.655.354-1.144.67-1.144h.123v2.289H5.844C5.528,15.193,5.174,14.7,5.174,14.048Z"></path>
              </svg>
            </div>
            <div className="icon2" id="cookies-icon">
              <svg
                className="icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M16.2,32A16,16,0,0,1,9.9,1.3l.5-.2a.841.841,0,0,1,1.1.4.841.841,0,0,1-.4,1.1l-.5.2A14.358,14.358,0,1,0,21.9,29.2a14.515,14.515,0,0,0,8.3-9.6h0A5.164,5.164,0,0,1,25,14.4v-.3a6.6,6.6,0,0,1-7.1-6V7.6a8.807,8.807,0,0,1,.2-1.7,4.08,4.08,0,0,1-3.5-4A3.6,3.6,0,0,1,14.8.8a.747.747,0,0,1,1-.5.747.747,0,0,1,.5,1,1.7,1.7,0,0,0-.1.7,2.476,2.476,0,0,0,2.5,2.5h.5a.829.829,0,0,1,.8.3,2.805,2.805,0,0,1-.1.5,5.45,5.45,0,0,0-.5,2.2,5,5,0,0,0,4.9,5,6.753,6.753,0,0,0,1.4-.2.8.8,0,0,1,1,.6v.5a3.528,3.528,0,0,0,3.4,4.7,1.949,1.949,0,0,0,.8-.1.618.618,0,0,1,.7.2.663.663,0,0,1,.2.7A15.8,15.8,0,0,1,16.2,32Z"></path>
                <circle cx="9.5" cy="12.2" r="3.5"></circle>
                <path d="M19,15.3a2.5,2.5,0,1,0,2.5,2.5A2.476,2.476,0,0,0,19,15.3Z"></path>
                <path d="M10.5,19.2a2.9,2.9,0,1,0,2.9,2.9A2.9,2.9,0,0,0,10.5,19.2Z"></path>
                <path d="M18.3,23.3a1.8,1.8,0,1,0,1.8,1.8A1.729,1.729,0,0,0,18.3,23.3Z"></path>
                <path d="M28.8,4.6a1.8,1.8,0,0,0,0,3.6,1.733,1.733,0,0,0,1.8-1.8A1.793,1.793,0,0,0,28.8,4.6Z"></path>
              </svg>
            </div>

            <div
              class="nx-burger-wrapper"
              onClick={(e) => handleClick(e)}
              // onClick={(e) => handleClose(e)}
            >
              <div class="nx-burger-icon">
                <span className="top"></span>
                <span className="center"></span>
                <span className="bottom"></span>
              </div>
              <svg
                className="icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <polygon points="2.065 12.051 4.294 16.499 6.429 12.051 7.231 16.217 8.502 16.217 6.919 8.583 4.294 13.999 1.659 8.583 0.065 16.217 1.263 16.217 2.065 12.051"></polygon>
                <polygon points="15.127 15.072 12.064 15.072 12.064 12.916 14.647 12.916 14.647 11.791 12.064 11.791 12.064 9.978 15.074 9.978 15.074 8.843 10.783 8.843 10.783 16.217 15.127 16.217 15.127 15.072"></polygon>
                <polygon points="18.939 11.572 23.803 16.499 23.803 8.843 22.522 8.843 22.522 13.499 17.657 8.583 17.657 16.217 18.939 16.217 18.939 11.572"></polygon>
                <path d="M30.719,8.843v4.239c0,1.458-.6,2.188-1.823,2.188-1.187,0-1.8-.73-1.8-2.156V8.843H25.813v4.25c0,2.114,1.1,3.3,3.083,3.3S32,15.2,32,13.072V8.843Z"></path>
                <path d="M30.469,6.724a.732.732,0,0,0,.75-.74.751.751,0,0,0-.74-.75.763.763,0,0,0-.75.76A.734.734,0,0,0,30.469,6.724Z"></path>
                <path d="M27.563,6.724a.715.715,0,0,0,.729-.74.743.743,0,0,0-.729-.75.765.765,0,0,0-.761.76A.739.739,0,0,0,27.563,6.724Z"></path>
              </svg>
              <BurgerMenu />
            </div>
          </div>
        </div>
        {/* <Cookies /> */}
      </header>
    </>
  );
}

export default Header;
