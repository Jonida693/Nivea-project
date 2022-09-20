import React from "react";
import "./Teasers.scss";

function Teasers() {
  return (
    <>
      <section className="teaser-container">
        <div className="teasers">
          <h2 className="teasers-headliner"> Neuigkeiten &amp; Highlights</h2>

          <div className="teasers-list">
            <div className="first-row-teaser row">
              <div className="teaser1 col-xs-5">
                <div className="teaser-image">
                  <img
                    src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/dezember/cam_marketingteaser-duftset-15.webp?rx=0&amp;ry=3&amp;rw=866&amp;rh=692&amp;mw=800&amp;hash=F8C20223C24444333508C22BA2238DE5%20800w"
                    alt=""
                  ></img>
                </div>

                <div className="teaser-content">
                  EXKLUSIV IM ONLINE SHOP:
                  <div>DIE NIVEA DUFTWELT</div>
                </div>
              </div>

              <div className="teaser1 col-xs-5">
                <div className="teaser-image">
                  <img
                    src="https://images-eu.nivea.com/-/media/local/de/nivea-fuer-mich/freunde-werben-freunde/2022/cam_mgm_marketingteaser.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=A17BA7DBC70B0E54C58093CDDA6ED567"
                    alt=""
                  ></img>
                </div>
                <div className="teaser-content">
                  FREUNDE WERBEN FREUNDE FUR
                  <div>DAS NIVEA TRUEPROGRAM </div>
                </div>
              </div>
            </div>

            <div className="first-row-teaser row">
              <div className="teaser1 col-xs-5">
                <div className="teaser-image">
                  <img
                    src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2022/juni-2022/cam_welcome-duschen_marketingteaser.webp?rx=0&ry=4&rw=866&rh=691&mw=594&hash=93F564EC8B3EEF2A8F3C9D75CCF0D794"
                    alt=""
                  ></img>
                </div>
                <div className="teaser-content">
                  ZUM TRUEPROGRAMM ANMELDEN & WILL
                  <div>-KOMMENSGESCHENK SCHERN!</div>
                </div>
              </div>

              <div className="teaser1 col-xs-5">
                <div className="teaser-image">
                  <img
                    src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2022/januar-2022/cp_reife-haut_marketingteaser.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=43B6EEB579D223AD4AC946B98796E132"
                    alt=""
                  ></img>
                </div>
                <div className="teaser-content">
                  DIE ANTI-AGE-POWER-ROUTINE FUR REIFE
                  <div>HAUT</div>
                </div>
              </div>
            </div>

            <div className="first-row-teaser row">
              <div className="teaser1 col-xs-5">
                <div className="teaser-image">
                  <img
                    src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/dezember/cam_marketingteaser-fotodose-11.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=1B416EB5EA4338FBF4DF9085AC5BF04C"
                    alt=""
                  ></img>
                </div>
                <div className="teaser-content">
                  "ERINNERUNGEN PFLEGEN -DEIN BILD AUF
                  <div>DER NIVEA FOTODOSE</div>
                </div>
              </div>

              <div className="teaser1 col-xs-5">
                <div className="teaser-image">
                  <img
                    src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/august/nivea-marketingteaser-nachhaltigkeit.webp?rx=0&ry=4&rw=865&rh=691&mw=594&hash=A092CFFD336A95F6AD88D01D22B1471A"
                    alt=""
                  ></img>
                </div>
                <div className="teaser-content">NACHHALTIGKEIT BEI NIVEA</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teasers;
