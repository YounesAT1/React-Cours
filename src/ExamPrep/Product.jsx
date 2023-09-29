import React, { Component } from "react";

class Product extends Component {
  state = {
    products: [
      { name: "product 1", mark: "mark 1", price: 100 },
      { name: "product 2", mark: "mark 2", price: 200 },
      { name: "product 3", mark: "mark 3", price: 300 },
      { name: "product 4", mark: "mark 4", price: 400 },
    ],
    selectedProduct: {
      name: "",
      mark: "",
      price: 0,
    },
    selectedProductQuantity: 0,
    productsCart: [],
    total: 0,
    alert: "",
  };

  handleProductChange = (e) => {
    const productName = e.target.value;
    const selectedProduct = this.state.products.find(
      (product) => product.name === productName
    );

    if (selectedProduct) {
      this.setState({ selectedProduct });
    }
  };

  handleQuantityChange = (e) => {
    this.setState({ selectedProductQuantity: e.target.value });
  };

  handleAddToCart = () => {
    const { selectedProduct, selectedProductQuantity } = this.state;

    if (
      selectedProduct.name !== "" &&
      selectedProduct.mark !== "" &&
      selectedProduct.price > 0 &&
      selectedProductQuantity > 0
    ) {
      const newProduct = {
        product: selectedProduct,
        selectedProductQuantity,
      };
      this.setState((prevState) => ({
        productsCart: [...prevState.productsCart, newProduct],
        selectedProduct: { name: "", mark: "", price: 0 },
        selectedProductQuantity: 0,
        total:
          prevState.total + selectedProductQuantity * selectedProduct.price,
        alert: "",
      }));
    } else {
      this.setState({
        alert: "Please fill out all fields.",
      });
    }
  };

  render() {
    const { selectedProduct, selectedProductQuantity, products } = this.state;

    return (
      <div>
        <h1>Product Cart</h1>
        <label htmlFor="productName">Product Name :</label>
        <select
          name="productName"
          id="productName"
          value={selectedProduct.name}
          onChange={this.handleProductChange}
        >
          {products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        <label htmlFor="productMark">Product Mark</label>
        <input
          type="text"
          id="productMark"
          name="productMark"
          value={selectedProduct.mark}
          readOnly
        />
        <label htmlFor="productPrice">Product Price</label>
        <input
          type="text"
          id="productPrice"
          name="productPrice"
          value={selectedProduct.price}
          readOnly
        />
        <label htmlFor="productQuantity">Product Quantity</label>
        <input
          type="text"
          id="productQuantity"
          name="productQuantity"
          value={selectedProductQuantity}
          onChange={this.handleQuantityChange}
        />
        <button onClick={this.handleAddToCart}>Add Product</button>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Mark</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productsCart.map((product, index) => (
              <tr key={index}>
                <td>{product.product.name}</td>
                <td>{product.product.mark}</td>
                <td>{product.product.price}</td>
                <td>{product.selectedProductQuantity}</td>
                <td>
                  {product.selectedProductQuantity * product.product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.total !== 0 && (
          <h2>Your total is : {this.state.total} DH</h2>
        )}
        {this.state.alert !== "" && <p>{this.state.alert}</p>}
      </div>
    );
  }
}

export default Product;
