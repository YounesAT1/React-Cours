import React from "react";

class ExClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: "",
      quantity: "",
      total: "",
    };
  }

  getValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTotal = () => {
    this.setState({ total: this.state.price * this.state.quantity });
  };

  render() {
    return (
      <div>
        <label htmlFor="price"> Price :</label>
        <input type="number" name="price" id="price" onChange={this.getValue} />
        <label htmlFor="quantity"> Quantity :</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          onChange={this.getValue}
        />
        <button onClick={this.updateTotal}>Calculate</button>
        <span name="total">total is : {this.state.total}</span>
      </div>
    );
  }
}

export default ExClass;
