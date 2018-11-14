import React, { Component } from "react";

import ListItem from "./ListItem";

export default class Locations extends Component {
  render() {
    return (
      <nav>
        <ul className="venues" role="list">
          {this.props.venues &&
            this.props.venues.map((venue, index) => (
              <ListItem
                key={index}
                {...venue}
                handleListItemClick={this.props.handleListItemClick}
              />
            ))}
        </ul>
      </nav>
    );
  }
}
