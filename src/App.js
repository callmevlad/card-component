import React, { Component } from "react";
import "./App.css";

import Card from "./Card.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          title="New York City"
          buttonText="Read more"
          buttonUrl="https://www.nycgo.com/"
          bgImage="nyc.jpg"
          badgeText="Featured"
        >
          In this city, no two experiences are alike. To all who refuse to
          settle for sameness: we welcome you.
        </Card>
      </div>
    );
  }
}