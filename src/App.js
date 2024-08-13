import React from "react";
import DataObject from "./DataObject";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataObj: [
        {
          backgroundColor: "#ff9580",
          icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
          name: "Linkedin",
          link: "https://www.linkedin.com/feed",
        },
        {
          backgroundColor: "#f1faa5",
          icon: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
          name: "Github",
          link: "https://www.github.com",
        },
        {
          backgroundColor: "#b8b3e8",
          icon: "https://cdn-icons-png.flaticon.com/128/3256/3256013.png",
          name: "Twitter",
          link: "https://www.twitter.com",
        },
      ],
    };
  }
  render() {
    const { dataObj } = this.state;
    return (
      <div className="App">
        <h1>Reach me</h1>
        {dataObj.map((item, index) => {
          return <DataObject data={item} key={index} />;
        })}
      </div>
    );
  }
}
