import React, { useEffect } from "react";
import "./Search.scss";

function Search() {
  useEffect(() => {
    var search = document.getElementById("search");
    var closeSearch = document.getElementById("searchclose");
    var openSearch = document.getElementById("searchi");

    closeSearch.onclick = function () {
      search.style.display = "none";
      search.style.zIndex = "-99999999999";
    };
    openSearch.onclick = function () {
      search.style.display = "block";
      search.style.zIndex = "99999";
    };
  }, []);

  return (
    <div className="search-page" id="search">
      <div className="search-wrapper">
        <div className="search-close" id="searchclose">
          <div className="search-icon-close"></div>
        </div>

        <div className="search-content">
          <div className="content-wrapper">
            <div className="search-header">
              <h2 className="search-tittle"> Suche</h2>
            </div>
            <div className="overlay-content">
              {/* ndryshe nga nivea */}
              <div className="content-area">
                <input className="search-label" />
                <span>Suche</span>
                <button className="loop">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M30.718,31.522,22.4,23.207a.8.8,0,0,1-.014-1.116,11.957,11.957,0,1,0-3.463,2.542.8.8,0,0,1,.7,1.439,13.613,13.613,0,1,1,4.442-3.459l7.781,7.779Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="container2">
              <div className="labels">
                <button className="label1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M20.078,24.854a.8.8,0,0,1-.563-.231L11.359,16.57a.8.8,0,0,1,0-1.139l8.156-8.055A.8.8,0,0,1,20.64,8.515L13.06,16l7.58,7.485a.8.8,0,0,1-.562,1.369Z"></path>
                  </svg>
                  <a href="#"> Neu & Exklusiv</a>
                </button>
                <button className="label1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M20.078,24.854a.8.8,0,0,1-.563-.231L11.359,16.57a.8.8,0,0,1,0-1.139l8.156-8.055A.8.8,0,0,1,20.64,8.515L13.06,16l7.58,7.485a.8.8,0,0,1-.562,1.369Z"></path>
                  </svg>
                  <a href="#"> Beratung</a>
                </button>
                <button className="label1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M20.078,24.854a.8.8,0,0,1-.563-.231L11.359,16.57a.8.8,0,0,1,0-1.139l8.156-8.055A.8.8,0,0,1,20.64,8.515L13.06,16l7.58,7.485a.8.8,0,0,1-.562,1.369Z"></path>
                  </svg>
                  <a href="#fdyhtfjh"> Produkte</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
