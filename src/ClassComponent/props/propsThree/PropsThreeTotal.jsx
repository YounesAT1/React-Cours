import React, { Component } from "react";
class PropsThreeTotal extends Component {
  render() {
    return (
      <div
        style={{
          padding: "20px 20px",
          backgroundColor: "lightsteelblue",
          borderRadius: "20px",
        }}
      >
        Your total is : {this.props.total}
      </div>
    );
  }
}

export default PropsThreeTotal;
