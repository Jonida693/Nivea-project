import React , { Component } from 'react'
import "./BigTeaser.scss"
import Slider from "react-slick";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };




  return (
    <section className="nx-teasers">
      <div className="slider-teasers">
        <h2 className="slider-headline">ZULETZT ANGESEHEN</h2>
      </div>
      <div className="teasers-big-container">
        <Slider {...settings}>
          <div class="nx-list col-xs-6">
            <div class="small-teaser">
              <div class="nx-image">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/7/c/4/eb829d1161e24141ba526b4989979a90-web_1010x1180_transparent_png.webp?mw=146&hash=E9A039EE952675BBCF36ED1E99451EF3"
                  alt=""
                ></img>
              </div>

              <div className="nx-content">
                <div className="nx-title">NIVEA EAU DE TOILETTE DUFTSET</div>

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

                <a href="/" className="nx-avaliable">
                  Sofort lieferbar
                </a>
              </div>
            </div>
          </div>
          <div class="nx-list  col-xs-6">
            <div class="small-teaser">
              <div class="nx-image">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/5/b/9/268160-web_1010x1180_transparent_png.webp?mw=146&hash=B069D79C29E3ED0EF16A3CB43EEC0274"
                  alt=""
                ></img>
              </div>

              <div className="nx-content">
                <div className="nx-title">NIVEA EAU DE TOILETTE DUFTSET</div>
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

                <a href="/" className="nx-avaliable">
                  Sofort lieferbar
                </a>
              </div>
            </div>
          </div>
          <div class="nx-list  col-xs-6">
            <div class="small-teaser">
              <div class="nx-image">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/b/a/7/be8d7bfad31e454596c8ad09b730315f-web_1010x1180_transparent_png.webp?mw=146&hash=636B51675E6B44BD3548FC47D69CC2BD"
                  alt=""
                ></img>
              </div>

              <div className="nx-content">
                <div className="nx-title">NIVEA EAU DE TOILETTE DUFTSET</div>

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

                <a href="/" className="nx-avaliable">
                  Sofort lieferbar
                </a>
              </div>
            </div>
          </div>

          <div class="nx-list  col-xs-6">
            <div class="small-teaser">
              <div class="nx-image">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/f/7/e/fca74e03065246e086bb05e0a22b8676-web_1010x1180_transparent_png.webp?mw=146&hash=2D3CFDBBE911C400ADEF8967DD126E1A"
                  alt=""
                ></img>
              </div>

              <div className="nx-content">
                <div className="nx-title">NIVEA EAU DE TOILETTE DUFTSET</div>

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

                <a href="/" className="nx-avaliable">
                  Sofort lieferbar
                </a>
              </div>
            </div>
          </div>

          <div class="nx-list  col-xs-6">
            <div class="small-teaser">
              <div class="nx-image">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/7/c/4/eb829d1161e24141ba526b4989979a90-web_1010x1180_transparent_png.webp?mw=146&hash=E9A039EE952675BBCF36ED1E99451EF3"
                  alt=""
                ></img>
              </div>

              <div className="nx-content">
                <div className="nx-title">NIVEA EAU DE TOILETTE DUFTSET</div>

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

                <a href="/" className="nx-avaliable">
                  Sofort lieferbar
                </a>
              </div>
            </div>
          </div>

          <div class="nx-list  col-xs-6">
            <div class="small-teaser">
              <div class="nx-image">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/b/6/e/d7a8010d19544d318555e90498981e79-web_1010x1180_transparent_png.webp?mw=146&hash=FAB97B1DBC8DF7BCF7E0A7F71F9D03C5"
                  alt=""
                ></img>
              </div>

              <div className="nx-content">
                <div className="nx-title">NIVEA EAU DE TOILETTE DUFTSET</div>

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

                <a href="/" className="nx-avaliable">
                  Sofort lieferbar
                </a>
              </div>
            </div>
          </div>

          <div class="nx-list  col-xs-6">
            <div class="small-teaser">
              <div class="nx-image">
                <img
                  src="https://images-eu.nivea.com/-/media/media-center-items/b/8/a/aa10c5bb6c664af3b47d6bec38db2c8b-web_1010x1180_transparent_png.webp?mw=146&hash=D8F1BBE2DDC45B00048881C89865A751"
                  alt=""
                ></img>
              </div>

              <div className="nx-content">
                <div className="nx-title">NIVEA EAU DE TOILETTE DUFTSET</div>

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

                <a href="/" className="nx-avaliable">
                  Sofort lieferbar
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
  }

}