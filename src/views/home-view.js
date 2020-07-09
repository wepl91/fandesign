import React from "react";

import { Card } from "primereact/card";

import HomeMenu from "../components/home-menu";

class HomeView extends React.Component {
  render() {
    const link =
      "https://http2.mlstatic.com/10-cuadros-marco-madera-para-foto-polaroid-60x40-mayorista-D_NQ_NP_779595-MLA27284722840_052018-F.jpg";
    return (
      <div className="home-view">
        <Card>
          <h1>Fandesign</h1>
          <p>Texto random, texto random, texto random, texto random</p>
          <img src={link} alt="polaroid" />
        </Card>
      </div>
    );
  }
}

export default HomeView;
