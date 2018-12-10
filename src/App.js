import React, { Component } from "react";
import "./App.css";

import Card from "./Card.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          title="New York"
          buttonText="Read more"
          buttonLink="https://www.nycgo.com/"
          badgeText="Featured"
        >
          In this city, no two experiences are alike. To all who refuse to
          settle for sameness: we welcome you.
        </Card>
      </div>
    );
  }
}