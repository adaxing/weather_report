import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // third party library
    new google.maps.Map(this.refs.map , {
      // screen of city
      zoom: 12,
      // where want to center
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  // this.refs.map
  render () {
    return <div ref="map" />;
  }
}

export default GoogleMap;

// import React from 'react';
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
// export default (props) => {
// return (
    //<GoogleMapLoader
        // containerElement={ <div style={{height: '100%'}} /> }
        // googleMapElment={
          // <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      //}
