import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <li
        role="listitem"
        tabIndex="0"
        onKeyPress={() => this.props.handleListItemClick(this.props)}
        onClick={() => this.props.handleListItemClick(this.props)}
      >
        <p className="name">{this.props.name}</p>
        <div>
          <p className="card-text">
            {this.props.location.formattedAddress[0]}
            <br />
            {this.props.location.formattedAddress[1]}
          </p>
        </div>
      </li>
    );
  }
}
