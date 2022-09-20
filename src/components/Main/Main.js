import React, { Component } from "react";
import "./Main.scss";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="wrapper">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/product-cluster-pages/entdecke-deinen-miracle-garden/clusterpage_gamechanger-female_keyvisual-desktop_neu.jpg?rx=0&ry=0&rw=3839&rh=1500&mw=2000&hash=E5554906474F9181E059D3D1F98DF826"
                alt=""
              ></img>
              <div className="picture-text">
                <h2 className="picture-hdl">NEU: NIVEA Miracle Garden </h2>
                <p className="picture-description ">
                  Die verzaubernden Düfte und pflegenden Formeln schenken dir
                  einen Moment für dich!
                </p>
                <button type="button" className="picture-btn">
                  Jetzt entdecken
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-teaser-2022/februar/000227_de_de_nfc_supernova_luminous630_08_2021_digital_lp_stage_teaser_desktop_2560_1000.webp?rx=0&ry=0&rw=2560&rh=1000&mw=2000&hash=C22D5DC105F928E09B6E1F80354C2F95"
                alt=""
              ></img>
              <div className="picture-text">
                <h2 className="picture-hdl">
                  DIE PATENTLÖSUNG GEGEN PIGMENTFLECKEN
                </h2>
                <p className="picture-description ">
                  CELLULAR LUMINOUS Anti-Pigmentflecken, der Durchbruch von
                  NIVEA gegen Pigmentflecken, für sichtbare Ergebnisse in 4
                  Wochen
                </p>
                <button type="button" className="picture-btn">
                  Jetzt entdecken
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/neu-von-nivea/stop-hautkrebs/sc_stageteaser_desktop_2560x1000.webp?rx=0&ry=0&rw=2560&rh=1000&mw=2000&hash=6605E85F11E161EB7809390B7714E61A"
                alt=""
              ></img>
              <div className="picture-text">
                <h2 className="picture-hdl">
                  JÄHRLICH STERBEN ÜBER 3.000 MENSCHEN IN DEUTSCHLAND AN
                  HAUTKREBS
                </h2>
                <p className="picture-description ">
                  Schütze dich und deine Liebsten
                </p>
                <button type="button" className="picture-btn">
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/neu-von-nivea/cellular-3in1-augenpflege-concealer/main_stage_teaser_desktop_2560x1000px.webp?rx=0&ry=0&rw=2560&rh=1000&mw=2000&hash=E775EE4687D4E5DF35028C8E1AB01712"
                alt=""
              ></img>
              <div className="picture-text">
                <h2 className="picture-hdl">
                  STRAHLEND SCHÖNE AUGEN MIT NUR 1 KLICK
                </h2>
                <p className="picture-description ">
                  Neu: NIVEA Cellular 3in1 Augenpflege Concealer
                </p>
                <button type="button" className="picture-btn">
                  Jetzt entdecken
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/product-cluster-pages/men-extreme-wild/clusterpage_gamechanger-male_stageteaserxl.webp?rx=0&ry=0&rw=2560&rh=1000&mw=2000&hash=D6A4A22E683AA7A572EBDA68DD30D0CC"
                alt=""
              ></img>
              <div className="picture-text">
                <h2 className="picture-hdl">NEU: NIVEA MEN EXTREME WILD</h2>
                <p className="picture-description ">
                  Entdecke deine wilde Seite mit frischen, maskulinen Düften und
                  pflegenden Formeln!
                </p>
                <button type="button" className="picture-btn">
                  Hier erfährst du mehr
                </button>
              </div>
            </div>
          </div>
          <div>
             <div className="wrapper">
              <img
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-teaser-2022/juni/q10_homepagebanner_desktop_2560x1000px_de.webp?rx=0&ry=0&rw=2560&rh=1000&mw=2000&hash=888E32898153B92757368F18F210592B"
                alt=""
              ></img>
              <div className="picture-text">
                <h2 className="picture-hdl">
                  Für spürbar straffere Haut in nur 10 Tagen
                </h2>
                <p className="picture-description ">
                  NIVEA Q10 Body Milk & Lotion, Q10 Pflege-Öl und Straffendes
                  Cellulite Gel
                </p>
                <button type="button" className="picture-btn">
                  Jetzt kaufen
                </button>
              </div>
            </div> 
          </div>
        </Slider>
      </div>
    );
  }
}

// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };

//     return (

//       <div>
//             <Slider {...settings}>
//             <div className="wrapper">
//               <img
//                 src="https://images-eu.nivea.com/-/media/local/de/product-cluster-pages/entdecke-deinen-miracle-garden/clusterpage_gamechanger-female_keyvisual-desktop_neu.jpg?rx=0&ry=0&rw=3839&rh=1500&mw=2000&hash=E5554906474F9181E059D3D1F98DF826"
//                 alt=""
//               ></img>
//               <div className="picture-text">
//                 <h2 className="picture-hdl">NEU: NIVEA Miracle Garden </h2>
//                 <p className="picture-description ">
//                   Die verzaubernden Düfte und pflegenden Formeln schenken dir
//                   einen Moment für dich!
//                 </p>
//                 <button type="button" className="picture-btn">
//                   Jetzt entdecken
//                 </button>
//               </div>
//             </div>
//            </Slider>
//           </div>

//         /* <div>
//             <div className="wrapper">
//               <img
//                 src="https://images-eu.nivea.com/-/media/local/de/product-cluster-pages/entdecke-deinen-miracle-garden/clusterpage_gamechanger-female_keyvisual-desktop_neu.jpg?rx=0&ry=0&rw=3839&rh=1500&mw=2000&hash=E5554906474F9181E059D3D1F98DF826"
//                 alt=""
//               ></img>
//               <div className="picture-text">
//                 <h2 className="picture-hdl">NEU: NIVEA Miracle Garden </h2>
//                 <p className="picture-description ">
//                   Die verzaubernden Düfte und pflegenden Formeln schenken dir
//                   einen Moment für dich!
//                 </p>
//                 <button type="button" className="picture-btn">
//                   Jetzt entdecken
//                 </button>
//               </div>
//             </div>
//           </div> */

//   );

// }

// }
