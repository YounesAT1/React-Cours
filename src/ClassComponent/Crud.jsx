import { Component } from "react";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        productName: "",
        productQuantity: 0,
        productPrice: 0,
        productMark: "",
        productId: 0,
      },
      productsCart: [],
      addButton: true,
      alert: "",
      total: 0,
      redTableRow: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleAddProductToCart = () => {
    if (
      this.state.product.productName !== "" &&
      this.state.product.productMark !== "" &&
      this.state.product.productPrice > 0 &&
      this.state.product.productQuantity > 0
    ) {
      const newProduct = {
        ...this.state.product,
        productId: this.state.product.productId,
      };
      this.setState({
        productsCart: [...this.state.productsCart, newProduct],
        total:
          this.state.total +
          this.state.product.productPrice * this.state.product.productQuantity,
        product: {
          productName: "",
          productQuantity: 0,
          productPrice: 0,
          productMark: "",
          productId: this.state.product.productId + 1,
        },
        alert: "",
        redRow: false,
      });
    } else {
      this.setState({
        alert: "Please enter all fields !!",
      });
    }
  };

  handleDeleteProductFromCart = (productIdToDelete) => () => {
    const productToDelete = this.state.productsCart.find(
      (product) => product.productId === productIdToDelete
    );

    if (!productToDelete) {
      return;
    }

    const productPrice = parseFloat(productToDelete.productPrice);
    console.log("Product Price:", productPrice);

    const newTotal =
      this.state.total - productPrice * productToDelete.productQuantity;
    console.log("New Total:", newTotal);

    this.setState((prevState) => ({
      productsCart: prevState.productsCart.filter(
        (product) => product.productId !== productIdToDelete
      ),
      total: newTotal,
    }));
  };

  handleDisplayProductData = (productToUpdate) => () => {
    this.setState({
      product: productToUpdate,
      addButton: false,
    });
  };

  handleConfirmUpdateProduct = () => {
    const updatedProduct = this.state.product;
    const updatedProductsCart = this.state.productsCart.map((product) => {
      if (product.productId === updatedProduct.productId) {
        return updatedProduct;
      } else {
        return product;
      }
    });

    const newTotal = updatedProductsCart.reduce((total, product) => {
      return total + product.productPrice * product.productQuantity;
    }, 0);

    this.setState({
      productsCart: updatedProductsCart,
      addButton: true,
      total: newTotal,
      product: {
        productName: "",
        productQuantity: 0,
        productPrice: 0,
        productMark: "",
        productId:
          this.state.productsCart[this.state.productsCart.length - 1]
            .productId + 1,
      },
    });
  };

  handleSellProduct = (productIdToSell) => () => {
    const updatedProductsCart = this.state.productsCart.map((product) => {
      if (
        product.productId === productIdToSell &&
        product.productQuantity > 0
      ) {
        product.productQuantity -= 1;

        const productPrice = parseFloat(product.productPrice);
        this.setState((prevState) => ({
          total: (prevState.total - productPrice).toFixed(2),
        }));
      }

      if (product.productQuantity === 0) {
        this.setState({
          redTableRow: true,
        });
      }

      return product;
    });

    this.setState({
      productsCart: updatedProductsCart,
    });
  };

  render() {
    return (
      <>
        <div>
          <label htmlFor="productName">Product Name : </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={this.state.product.productName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productMark">Product Mark : </label>
          <input
            type="text"
            id="productMark"
            name="productMark"
            value={this.state.product.productMark}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productQuantity">Product Quantity : </label>
          <input
            type="number"
            id="productQuantity"
            name="productQuantity"
            value={this.state.product.productQuantity}
            onChange={this.handleInputChange}
            min={0}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price : </label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={this.state.product.productPrice}
            onChange={this.handleInputChange}
            min={0}
          />
        </div>
        <div>
          {this.state.addButton ? (
            <button onClick={this.handleAddProductToCart}>Add Product</button>
          ) : (
            <button onClick={this.handleConfirmUpdateProduct}>
              Update Product
            </button>
          )}
        </div>
        {this.state.productsCart.length !== 0 && (
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Mark</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Total</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productsCart.map((product, index) => (
                <tr
                  key={index}
                  className={this.state.redTableRow === true ? "red-row" : ""}
                >
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>{product.productMark}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.productQuantity}</td>
                  <td>
                    {parseFloat(product.productPrice) *
                      parseFloat(product.productQuantity)}
                  </td>
                  <td>
                    <button
                      onClick={this.handleDeleteProductFromCart(
                        product.productId
                      )}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={this.handleDisplayProductData(product)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={this.handleSellProduct(product.productId)}>
                      Sell
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div>
          <h2>Your Total is : {parseFloat(this.state.total)}</h2>
        </div>
      </>
    );
  }
}
export default Crud;
