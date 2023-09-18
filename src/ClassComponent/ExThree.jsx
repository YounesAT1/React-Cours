import React from "react";

class ExThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: "",
      productMark: "",
      productPrice: "",
      quantity: 0,
      total: 0,
      products: [
        { name: "product 1", mark: "mark 1", price: "100" },
        { name: "product 2", mark: "mark 2", price: "200" },
        { name: "product 3", mark: "mark 3", price: "300" },
        { name: "product 4", mark: "mark 4", price: "400" },
      ],
      productsCart: [],
    };
  }

  getProductValues = (e) => {
    const selectedProduct = this.state.products.filter(
      (product) => product.name === e.target.value
    )[0];

    if (selectedProduct) {
      this.setState({
        selectedProduct: e.target.value,
        productMark: selectedProduct.mark,
        productPrice: selectedProduct.price,
      });
    }
  };

  handleQuantityChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddProduct = () => {
    if (
      this.state.selectedProduct !== "" &&
      this.state.productMark !== "" &&
      this.state.productPrice > 0 &&
      this.state.quantity !== 0
    ) {
      const newProduct = {
        name: this.state.selectedProduct,
        mark: this.state.productMark,
        price: this.state.productPrice,
        quantity: this.state.quantity,
      };
      this.setState({
        productsCart: [...this.state.productsCart, newProduct],
        selectedProduct: "",
        productMark: "",
        productPrice: "",
        quantity: 0,
        total: this.state.total + this.state.productPrice * this.state.quantity,
      });
    } else {
      alert("please select a product to add in cart ");
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="productList">Product Name : </label>
        <select
          name="productList"
          id="productList"
          onChange={this.getProductValues}
          value={this.state.selectedProduct}
        >
          <option value="">Select a product</option>
          {this.state.products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        <label htmlFor="productMark">Mark :</label>
        <input
          type="text"
          name="productMark"
          id="productMark"
          value={this.state.productMark}
          readOnly
        />
        <label htmlFor="productPrice">Price :</label>
        <input
          type="text"
          name="productPrice"
          id="productPrice"
          value={this.state.productPrice}
          readOnly
        />
        <label htmlFor="quantity">Quantity :</label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
        />
        <button onClick={this.handleAddProduct}>Add Product</button>
        <table>
          <thead>
            <tr>
              <th>product name</th>
              <th>product price</th>
              <th>product mark</th>
              <th>product quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productsCart.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.mark}</td>
                <td>{product.quantity}</td>
                <td>
                  {parseFloat(product.price) * parseFloat(product.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>total is : {this.state.total} $</p>
      </div>
    );
  }
}

export default ExThree;
