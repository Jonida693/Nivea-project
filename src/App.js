import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Body from "./components/Body/Body";
import Teasers from "./components/Teasers/Teasers";
import NiveaContent from "./components/NiveaContent/NiveaContent";
import MainTeaser from "./components/MainTeaser/MainTeaser";
import GirlsTeaser from "./components/GirlsTeaser/GirlsTeaser";
import BigTeaser from "./components/BigTeaser/BigTeaser";
import Trust from "./components/Trust/Trust";
import Footer from "./components/Footer/Footer";
import Cookies from "./components/Cookies/Cookies";
import React from "react";
import Search from "./components/Search/Search";
import Shop from "./components/Shop/Shop"
import Login from "./components/Login/Login";


function App() {
  // useEffect(() => {
  //   var cookiies = document.getElementById("cookie");
  //   var closeText = document.getElementById("close-cookie");
  //   var openText = document.getElementById("cookies-icon");

  //   closeText.onClick = function () {
  //     cookiies.style.opacity = "0";
  //     cookiies.style.backgroundColor = "red";
  //   };
  //   openText.onClick = function () {
  //     cookiies.style.opacity = "1";
  //   };
  // }, []);
  return (
    <div className="App">
      <Cookies />
      <Search/>
      <Login/>
      <Shop/>

      <Header />

      <body>
        <Main />
        <Body />
        <Teasers />
        <NiveaContent />

        <MainTeaser />

        <GirlsTeaser />
        <BigTeaser />
        <Trust />
        <Footer />
      </body>
    </div>
  );
}

export default App;
