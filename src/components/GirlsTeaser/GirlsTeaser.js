import React , { Component } from 'react'
import "./GirlsTeaser.scss"
import Slider from "react-slick";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <section className="total-teasers1">
      <div className="slider-teasers1">
        <h2 className="slider-headline1">AUSGEWÄHLTE TIPPS FÜR SIE</h2>
      </div>

      <div class="teaser-list1 ">
        <Slider {...settings}>
          <div class="teaser5 col-xs-6">
            <div class="cards-image">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/schoene-haut/augenringe-0180/niveax/cam_augenringe_keyvisual.webp?rx=0&ry=0&rw=2702&rh=1500&mw=383&hash=4F6477145151FAA03BB4FBF00406D56E"
                alt=""
              ></img>
            </div>
            <div className="second-teaser-content">
              <h3 className="title-teaser">GESICHT</h3>
              <h3 className="hdl-teaser">
                Wimpern richtig pflegen: So wird's gemacht!
              </h3>
              <div className="descript-teaser">
                {" "}
                Zu einem schönen Augenaufschlag gehören gepflegte Wimpern
                einfach dazu. Wir verraten, worauf es ankommt{" "}
              </div>
              <div className="teaser-link"> WEITERLESEN</div>
            </div>
          </div>

          <div class="teaser5 col-xs-6 ">
            <div class="cards-image">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/schoene-haare/luftige-sommerfrisuren/thumbnail-luftige-sommerfrisuren-neu.webp?rx=0&ry=0&rw=590&rh=327&mw=383&hash=83C3B0606A4E7DA79AD408F79CA2A6BC"
                alt=""
              ></img>
            </div>
            <div className="second-teaser-content">
              <h3 className="title-teaser">HAAR</h3>
              <h3 className="hdl-teaser">
                Zurück zur Naturhaarfarbe: Die besten Tipps
              </h3>

              <div className="descript-teaser">
                Zu einem schönen Augenaufschlag gehören gepflegte Wimpern
                einfach dazu. Wir verraten, worauf es ankommt
              </div>
              <div className="teaser-link"> WEITERLESEN</div>
            </div>
          </div>

          <div class="teaser5 col-xs-6 ">
            <div class="cards-image">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/schoene-haut/gesunde-ernaehrung-0213/gesunde-ernaehrung-thumbnail.webp?rx=0&ry=0&rw=590&rh=327&mw=383&hash=C270C0BB8B48B370C4C41C0CBC292B4C
              "
                alt=""
              ></img>
            </div>

            <div className="second-teaser-content">
              <h3 className="title-teaser">KOPER</h3>
              <h3 className="hdl-teaser">
                Geschenke selber machen: Basteln & Backen für Ihre Liebsten
              </h3>
              <div className="descript-teaser">
                Selbst gemachte Kosmetik, süße Überraschungen und zauberhafte
                Verpackungen: Diese DIY-Geschenke machen .
              </div>
              <div className="teaser-link"> WEITERLESEN</div>
            </div>
          </div>
          <div class="teaser5 col-xs-6 ">
            <div class="cards-image">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/lifestyle/wimpernpflege-tipps-fuer-gesunde-und-schoene-wimpern/wimpernpflege-tipps-fuer-gesunde-und-schoene-wimpern_thumbnail.webp?rx=0&ry=0&rw=590&rh=327&mw=383&hash=241BB3D7943A6A3857EB0B8E13A15D2F
              "
                alt=""
              ></img>
            </div>

            <div className="second-teaser-content">
              <h3 className="title-teaser">KOPER</h3>
              <h3 className="hdl-teaser">
                Geschenke selber machen: Basteln & Backen für Ihre Liebsten
              </h3>
              <div className="descript-teaser">
                Selbst gemachte Kosmetik, süße Überraschungen und zauberhafte
                Verpackungen: Diese DIY-Geschenke machen .
              </div>
              <div className="teaser-link"> WEITERLESEN</div>
            </div>
          </div>
          <div class="teaser5 col-xs-6 ">
            <div class="cards-image">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/baby/baby-fingernaegel-schneiden-sanft-und-sicher/baby-fingernaegel-schneiden-thumbnail.webp?rx=0&ry=0&rw=590&rh=327&mw=383&hash=02F6E753C19E523753BD9544C20CE1E1
              "
                alt=""
              ></img>
            </div>

            <div className="second-teaser-content">
              <h3 className="title-teaser">KOPER</h3>
              <h3 className="hdl-teaser">
                Geschenke selber machen: Basteln & Backen für Ihre Liebsten
              </h3>
              <div className="descript-teaser">
                Selbst gemachte Kosmetik, süße Überraschungen und zauberhafte
                Verpackungen: Diese DIY-Geschenke machen .
              </div>
              <div className="teaser-link"> WEITERLESEN</div>
            </div>
          </div>

          <div class="teaser5 col-xs-6 ">
            <div class="cards-image">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/inspiration/arganoel/arganoel-thumbnail.webp?rx=0&ry=112&rw=590&rh=327&mw=383&hash=37EBAD3B624B40DECA0344EA82393B4D
              "
                alt=""
              ></img>
            </div>

            <div className="second-teaser-content">
              <h3 className="title-teaser">KOPER</h3>
              <h3 className="hdl-teaser">
                Geschenke selber machen: Basteln & Backen für Ihre Liebsten
              </h3>
              <div className="descript-teaser">
                Selbst gemachte Kosmetik, süße Überraschungen und zauberhafte
                Verpackungen: Diese DIY-Geschenke machen .
              </div>
              <div className="teaser-link"> WEITERLESEN</div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

}