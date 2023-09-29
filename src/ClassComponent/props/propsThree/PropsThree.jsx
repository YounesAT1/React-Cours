import { Component } from "react";

class PropsThree extends Component {
  render() {
    return (
      <div
        style={{
          padding: "20px 20px",
          backgroundColor: "lightgreen",
          borderRadius: "20px",
        }}
      >
        {this.props.productsCart.length !== 0 && (
          <table style={{ border: "1px solid blaxk" }}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Mark</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.productsCart.map((product) => (
                <tr>
                  <td>{product.productName}</td>
                  <td>{product.productMark}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.productQuantity}</td>
                  <td>{product.productPrice * product.productQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default PropsThree;
