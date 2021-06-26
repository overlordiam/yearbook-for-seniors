import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./MainPage.css";
import Card from "../Card/Card";
import MediaQuery from "react-responsive";

function MainPage({ data }) {
  return (
    <div>
    
      <MediaQuery minDeviceWidth={992}>
        <ScrollToTop smooth="True" top="40" />
        <div className="card-grid-laptop">
          {data.map(({ name, image_url }) => (
            <Card name={name} img={image_url} />
          ))}
        </div>
      </MediaQuery>

      <MediaQuery minDeviceWidth={768} maxDeviceWidth={991}>
        <ScrollToTop smooth="True" top="40" />
        <div className="card-grid-tablet">
          {data.map(({ name, image_url }) => (
            <Card name={name} img={image_url} />
          ))}
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={767}>
        <ScrollToTop smooth="True" top="40" />
        <div className="card-grid-mobile">
          {data.map(({ name, image_url }) => (
            <Card name={name} img={image_url} />
          ))}
        </div>
      </MediaQuery>

      <a id="button"></a>
      <div class="content"></div>
    </div>
  );
}

export default MainPage;
