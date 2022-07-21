import React from "react";
import EXIF from "exif-js";
import "./App.css";

export default class extends React.Component {
  getImageDetails = ({ target: imgNode }) => {
    EXIF.getData(imgNode, function () {
      const latitude = EXIF.getTag(imgNode, "GPSLatitude");
      const longitude = EXIF.getTag(imgNode, "GPSLongitude");
      const dateTime = EXIF.getTag(imgNode, "DateTimeOriginal");
      console.log(latitude, longitude, dateTime);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>EXIF Test</h1>
        <img
          id="img1"
          onClick={this.getImageDetails}
          style={{ height: 240, cursor: "pointer" }}
          src="https://raw.githubusercontent.com/ianare/exif-samples/master/jpg/gps/DSCN0025.jpg"
          alt="with exif"
        />        
      </div>
    );
  }
}