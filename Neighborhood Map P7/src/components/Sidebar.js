import React, { Component } from "react";

import Locations from "./Locations";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      venues: []
    };
  }
  handleSearchLocations = () => {
    if (this.state.query.trim() !== "") {
      const venues = this.props.venues.filter(venue =>
        venue.name.toLowerCase().includes(this.state.query.toLowerCase())
      );
      return venues;
    }
    return this.props.venues;
  };

  handleSearchUpdate = e => {
    this.setState({ query: e.target.value });

    const markers = this.props.venues.map(venue => {
      const searchMatch = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());

      const marker = this.props.markers.find(marker => marker.id === venue.id);

      if (searchMatch) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });

    this.props.updateSuperState({ markers });
  };

  render() {
    return (
      <div id="sidebar">
        <div id="search">
          <input
            type="search"
            className="search-box"
            placeholder="Filter Locations"
            onChange={this.handleSearchUpdate}
          />
        </div>
        <Locations
          {...this.props}
          venues={this.handleSearchLocations()}
          handleListItemClick={this.props.handleListItemClick}
        />
      </div>
    );
  }
}
