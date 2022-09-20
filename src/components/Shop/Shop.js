import React, { useEffect } from "react";
import "./Shop.scss";

function Shop() {
  useEffect(() => {
    var shop = document.getElementById("shop");
    var closeShop = document.getElementById("shopclose");
    var openShop = document.getElementById("shoppi");

    closeShop.onclick = function () {
      shop.style.display = "none";
      shop.style.zIndex = "-99999999999";
    };
    openShop.onclick = function () {
      shop.style.display = "block";
      shop.style.zIndex = "99999";
    };
  }, []);

  return (
    <div className="shop-page" id="shop">
      <div className="shop-wrapper">
        <div className="shop-close" id="shopclose">
          <div className="shop-icon-close"></div>
        </div>

        <div className="shop-content">
          <div className="content-wrapper-shop">
            <div className="shop-header">
              <h2 className="shop-tittle"> IHR WARENKORB IST LEER</h2>
            </div>

            <div className="picture-shop">
              <img src="https://images-eu.nivea.com/-/media/niveax/feature/eshop/checkout/eshop_empty_cart_2048w.jpg"></img>
            </div>

            <div className="content-shopp">
              <div className="text-shop">
                <p>
                  Lassen Sie sich von unseren beliebtesten Produkten
                  inspirieren, oder melden Sie sich an um zu prüfen, ob Sie
                  bereits Produkte im Warenkorb haben.
                </p>
              </div>

              <div className="shop-btn">

              <div className="shop1">
                <button className="btn1">UNSERE BESTSELLER </button>
</div>
<div className="shop2">
                <button className="btn2">ANMELDEN </button>

              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
