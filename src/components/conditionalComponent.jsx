import React, { Component } from "react";

class Conditional extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Conditional;
