import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../Maps/maps.scss";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 34.45314608961011,
      lng: 35.81091983012993,
    },
    zoom: 14,
  };

  render() {
    const GoogleMapConfig = {
      key: process.env.REACT_APP_GOOGLE_KEY,
      libraries: "places",
    };

    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={GoogleMapConfig}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={34.45314608961011}
            lng={35.81091983012993}
            text="Pin"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;
