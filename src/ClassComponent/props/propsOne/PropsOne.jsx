import React from "react";

class PropsOne extends React.Component {
  render() {
    return <h1>hello {this.props.message}</h1>;
  }
}

export default PropsOne;
