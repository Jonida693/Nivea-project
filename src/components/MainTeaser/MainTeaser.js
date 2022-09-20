import React, { Component } from "react";
import "./MainTeaser.scss";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      gutter: 10,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className="total-teasers ">
        <div className="slider-teasers">
          <h2 className="slider-headline">DAS KÖNNTE IHNEN AUCH GEFALLEN</h2>
        </div>

        <div class="teaser-list  ">
          <Slider {...settings}>
            <div class="teaser col-xs-6 ">
              <div class="teasers-img">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/a/9/2/04114752970d42c7ac75a7e6071f9d59-web_1010x1180_transparent_png.webp?mw=207&hash=E24E3386381940C4F0348F6A127D7147"
                  alt=""
                ></img>
              </div>

              <div className="teaser-content1">
                <div className="wrapper-stars">
                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>
                  <span>(20)</span>
                </div>
                <div className="teaser_title">
                  NIVEA EAU DE TOILETTE DUFTSET
                </div>

                <div className="important-value">
                  <div className="size"> 50ml</div>
                  <div className="price">48,99 € </div>
                  <div className="symbol">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M16.053,32A16,16,0,0,1,9.8,1.282a.8.8,0,1,1,.628,1.471A14.43,14.43,0,1,0,14.667,1.67.8.8,0,1,1,14.51.078a16,16,0,0,1,3.15,31.844h0A16.008,16.008,0,0,1,16.053,32Z"></path>
                      <path d="M14.736,9.478a1.373,1.373,0,1,1,0,.02Zm2.424,3.207v11.2H15.025v-11.2Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <a href="/" className="nx-avaliable">
                    Sofort lieferbar
                  </a>
                </div>

                <div className="add-tochart">
                  <button className="chart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M18.449,15.8a.8.8,0,0,1-.8-.8h0V9.478a.8.8,0,1,1,1.6-.006V15a.8.8,0,0,1-.8.8Z"></path>
                      <path d="M21.211,13.04H15.687a.8.8,0,0,1,0-1.6h5.524a.8.8,0,0,1,0,1.6Z"></path>
                      <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                      <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                      <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="teaser col-xs-6  ">
              <div class="teasers-img">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/1/9/c/f3ac54d9640c4453a83ec83b5ffdc753-web_1010x1180_transparent_png.webp?mw=207&hash=1E9CE00D60135F67BB05ECEAFF899C87"
                  alt=""
                ></img>
              </div>

              <div className="teaser-content1">
                <div className="wrapper-stars">
                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>
                  <span>(20)</span>
                </div>
                <div className="teaser_title">
                  NIVEA EAU DE TOILETTE DUFTSET
                </div>

                <div className="important-value">
                  <div className="size"> 50ml</div>
                  <div className="price">48,99 € </div>
                  <div className="symbol">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M16.053,32A16,16,0,0,1,9.8,1.282a.8.8,0,1,1,.628,1.471A14.43,14.43,0,1,0,14.667,1.67.8.8,0,1,1,14.51.078a16,16,0,0,1,3.15,31.844h0A16.008,16.008,0,0,1,16.053,32Z"></path>
                      <path d="M14.736,9.478a1.373,1.373,0,1,1,0,.02Zm2.424,3.207v11.2H15.025v-11.2Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <a href="/" className="nx-avaliable">
                    Sofort lieferbar
                  </a>
                </div>

                <div className="add-tochart">
                  <button className="chart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M18.449,15.8a.8.8,0,0,1-.8-.8h0V9.478a.8.8,0,1,1,1.6-.006V15a.8.8,0,0,1-.8.8Z"></path>
                      <path d="M21.211,13.04H15.687a.8.8,0,0,1,0-1.6h5.524a.8.8,0,0,1,0,1.6Z"></path>
                      <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                      <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                      <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="teaser col-xs-6  ">
              <div class="teasers-img">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/c/9/f/d51d609a38ed48cebe6d75cacbaf95e7-web_1010x1180_transparent_png.webp?mw=207&hash=4857299F965982FD4F97A256EC4AF729"
                  alt=""
                ></img>
              </div>

              <div className="teaser-content1">
                <div className="wrapper-stars">
                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>
                  <span>(20)</span>
                </div>
                <div className="teaser_title">
                  NIVEA EAU DE TOILETTE DUFTSET
                </div>

                <div className="important-value">
                  <div className="size"> 50ml</div>
                  <div className="price">48,99 € </div>
                  <div className="symbol">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M16.053,32A16,16,0,0,1,9.8,1.282a.8.8,0,1,1,.628,1.471A14.43,14.43,0,1,0,14.667,1.67.8.8,0,1,1,14.51.078a16,16,0,0,1,3.15,31.844h0A16.008,16.008,0,0,1,16.053,32Z"></path>
                      <path d="M14.736,9.478a1.373,1.373,0,1,1,0,.02Zm2.424,3.207v11.2H15.025v-11.2Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <a href="/" className="nx-avaliable">
                    Sofort lieferbar
                  </a>
                </div>

                <div className="add-tochart">
                  <button className="chart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M18.449,15.8a.8.8,0,0,1-.8-.8h0V9.478a.8.8,0,1,1,1.6-.006V15a.8.8,0,0,1-.8.8Z"></path>
                      <path d="M21.211,13.04H15.687a.8.8,0,0,1,0-1.6h5.524a.8.8,0,0,1,0,1.6Z"></path>
                      <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                      <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                      <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="teaser col-xs-6 ">
              <div class="teasers-img">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/5/b/9/268160-web_1010x1180_transparent_png.webp?mw=207&hash=467CAAD7766CB127005AF7CDBEB4F1C5"
                  alt=""
                ></img>
              </div>

              <div className="teaser-content1">
                <div className="wrapper-stars">
                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>(77)</span>
                </div>
                <div className="teaser_title">REGENBOGEN SET</div>

                <div className="important-value">
                  <div className="size"> 50ml</div>
                  <div className="price">48,99 € </div>
                  <div className="symbol">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M16.053,32A16,16,0,0,1,9.8,1.282a.8.8,0,1,1,.628,1.471A14.43,14.43,0,1,0,14.667,1.67.8.8,0,1,1,14.51.078a16,16,0,0,1,3.15,31.844h0A16.008,16.008,0,0,1,16.053,32Z"></path>
                      <path d="M14.736,9.478a1.373,1.373,0,1,1,0,.02Zm2.424,3.207v11.2H15.025v-11.2Z"></path>
                    </svg>
                  </div>
                </div>

                <div>
                  <a href="/" className="nx-avaliable">
                    Sofort lieferbar
                  </a>
                </div>
                <div className="add-tochart">
                  <button className="chart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M18.449,15.8a.8.8,0,0,1-.8-.8h0V9.478a.8.8,0,1,1,1.6-.006V15a.8.8,0,0,1-.8.8Z"></path>
                      <path d="M21.211,13.04H15.687a.8.8,0,0,1,0-1.6h5.524a.8.8,0,0,1,0,1.6Z"></path>
                      <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                      <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                      <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="teaser col-xs-6 ">
              <div class="teasers-img">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/f/7/e/fca74e03065246e086bb05e0a22b8676-web_1010x1180_transparent_png.webp?mw=207&hash=AAE3C2A8BD5B318B7B98188A8440BD89
              "
                  alt=""
                ></img>
              </div>

              <div className="teaser-content1">
                <div className="wrapper-stars">
                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>★</span>

                  <span>(40)</span>
                </div>
                <div className="teaser_title">REGENBOGEN SET</div>

                <div className="important-value">
                  <div className="size"> 50ml</div>
                  <div className="price">48,99 € </div>
                  <div className="symbol">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M16.053,32A16,16,0,0,1,9.8,1.282a.8.8,0,1,1,.628,1.471A14.43,14.43,0,1,0,14.667,1.67.8.8,0,1,1,14.51.078a16,16,0,0,1,3.15,31.844h0A16.008,16.008,0,0,1,16.053,32Z"></path>
                      <path d="M14.736,9.478a1.373,1.373,0,1,1,0,.02Zm2.424,3.207v11.2H15.025v-11.2Z"></path>
                    </svg>
                  </div>
                </div>

                <div>
                  <a href="/" className="nx-avaliable">
                    Sofort lieferbar
                  </a>
                </div>
                <div className="add-tochart">
                  <button className="chart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M18.449,15.8a.8.8,0,0,1-.8-.8h0V9.478a.8.8,0,1,1,1.6-.006V15a.8.8,0,0,1-.8.8Z"></path>
                      <path d="M21.211,13.04H15.687a.8.8,0,0,1,0-1.6h5.524a.8.8,0,0,1,0,1.6Z"></path>
                      <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                      <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                      <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
