import React,{ Component } from "react";
import { TrustData } from './Maptrust';
import "./Trust.scss";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
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
      <>
        <div>
          <div className="nx-trust">
            <div className="inner-trust">
              <h2 className="trust-hdl"> PFLEGE SEIT 1911 </h2>
            </div>
            <Slider {...settings}>
              {TrustData.map((item, index) => (
                <div key={index}>
                  <div className="trust-container row">
                    <div className="nx-total col-xs-3">
                      <div className="nx-circle">
                        <button className="button-trust">
                          <div className="nx-text">
                            <span className="number">{item.number} </span>
                            <span>{item.name}</span>
                          </div>
                        </button>
                      </div>
                      <div className="trust-description">{item.dcs}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <section>
          <div className="social-container">
            <div className="socialmedia-hdl">
              <h3> TEILEN</h3>
            </div>

            <div className="social-media">
              <ul className="horizontal-icons">
                <button className="  facebook"></button>
                <button className="  pinterest"></button>
              </ul>
            </div>
            <div className="media-desc row">
              <div className="nx-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M16.9,20.841H14.7l-.534-.679.55-5.738a2.75,2.75,0,0,1-1.132-2.377,2.554,2.554,0,0,1,2.328-2.521,2.357,2.357,0,0,1,1.811.776,2.753,2.753,0,0,1,.711,1.875,2.719,2.719,0,0,1-1.164,2.263l.566,5.739-.518.678Z"></path>
                  <path d="M28.438,8.015A5.689,5.689,0,0,1,25.082,3.2a1.963,1.963,0,0,0-1.945-1.828H8.888a1.968,1.968,0,0,0-1.954,1.81A5.59,5.59,0,0,1,3.558,8a3.972,3.972,0,0,0-.758.5,1.146,1.146,0,0,0-.464.834.892.892,0,0,0,.908.908A1.363,1.363,0,0,0,4.058,9.8a2.644,2.644,0,0,1,.378-.265A7.124,7.124,0,0,0,8.675,3.507l.034-.363,14.647.034.034.362a7.477,7.477,0,0,0,4.419,6.137l.238.105,0,.432a27.205,27.205,0,0,1-2.409,8.705,20.535,20.535,0,0,1-9.448,9.893l-.18.091-.18-.091a20.533,20.533,0,0,1-9.444-9.884,25.093,25.093,0,0,1-1.925-5.86h0a.906.906,0,1,0-1.794.256h0a28.964,28.964,0,0,0,2.1,6.349,22.268,22.268,0,0,0,10.543,10.8,1.593,1.593,0,0,0,.693.155h.041a1.584,1.584,0,0,0,.647-.138,22.278,22.278,0,0,0,10.546-10.8,29.075,29.075,0,0,0,2.583-9.328A2.293,2.293,0,0,0,28.438,8.015Z"></path>
                </svg>
              </div>
              <div className="info-media col-xs-10">
                Durch die Nutzung dieses Features erklären Sie sich damit
                einverstanden, dass die Daten auch an Drittstaaten außerhalb des
                Europäischen Wirtschaftsraumes ohne angemessenes
                datenschutzrechtliches Schutzniveau übermittelt werden (insb.
                USA). Es besteht dabei die Möglichkeit, dass Behörden auf die
                Daten Zugriff nehmen, ohne dass es einen Rechtsbehelf dagegen
                gibt. Sie können diese Einwilligung jederzeit mit Wirkung für
                die Zukunft widerrufen. Weitere Informationen finden Sie in{" "}
                <a href="/ueber-uns/datenschutzerklaerung">
                  Datenschutzerklärung.
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

