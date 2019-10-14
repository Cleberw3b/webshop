import { Component } from "react";
import ThreeLines from "../three-lines-that-cross/three-lines";
import CartIcon from "../../../../public/assets/icons/cart-icon";
import { NavConsumer } from "../../../layout/nav/navProvider";
import "./cart-menu.scss";

class CartMenu extends Component {
  state = {
    cartList: []
  };

  componentDidMount() {
    const { cartList } = this.props;
    if (typeof cartList === undefined) return;
    this.setState({ cartList: cartList });
  }

  // setItemQuantity = (quantity, item) => {
  //   if (quantity > item.stock) this.setState({ cartList: item.stock });
  //   if (quantity < 1) this.setState({ cartList: 0 });
  //   this.setState({ cartList: quantity });
  // };

  // increment = item => {
  //   this.state.cartList >= item.stock
  //     ? this.setState({ cartList: item.stock })
  //     : this.setState(prevState => ({
  //         cartList: prevState.cartList + 1
  //       }));
  // };

  // decrement = item => {
  //   this.state.cartList < 1
  //     ? this.setState({ cartList: 0 })
  //     : this.setState(prevState => ({
  //         cartList: prevState.cartList - 1
  //       }));
  // };

  render() {
    return (
      <NavConsumer>
        {({ showCart, toggleCart }) => (
          <div className="cart-menu" aria-label="Search">
            <div className="cart-menu-button" onClick={toggleCart}>
              {showCart ? (
                <ThreeLines showCloseButton />
              ) : (
                <>
                  <CartIcon />
                  <span className="nav-cart-count">0</span>
                </>
              )}
            </div>
            <div className={"cart-menu-box" + `${showCart ? " active" : ""}`}>
              <div className="cart-menu-list">
                <h1>SEU CARRINHO</h1>
                <div className="cart-item-box">
                  <div className="cart-item">
                    <div className="cart-item-description">
                      <img
                        className="responsive"
                        src="/static/images/product-sample-img.png"
                      />
                      <div className="cart-item-description-text">
                        <h2>Nome do Produto 1</h2>
                        <div className="cart-item-description-prices">
                          <h3>De R$ 200,00</h3>
                          <h3>Por R$ 100,00</h3>
                          <h3>Ou em 4x de R$ 25,00 s/ juros</h3>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-control">
                      <div className="cart-item-control-unit">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                      </div>
                    </div>
                    <span className="cart-item-control-delete">Excluir</span>
                  </div>
                  <div className="cart-item">
                    <div className="cart-item-description">
                      <img
                        className="responsive"
                        src="/static/images/product-sample-img.png"
                      />
                      <div className="cart-item-description-text">
                        <h2>Nome do Produto 2</h2>
                        <div className="cart-item-description-prices">
                          <h3>De R$ 200,00</h3>
                          <h3>Por R$ 100,00</h3>
                          <h3>Ou em 4x de R$ 25,00 s/ juros</h3>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-control">
                      <div className="cart-item-control-unit">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                      </div>
                    </div>
                    <span className="cart-item-control-delete">Excluir</span>
                  </div>
                  <div className="cart-item">
                    <div className="cart-item-description">
                      <img
                        className="responsive"
                        src="/static/images/product-sample-img.png"
                      />
                      <div className="cart-item-description-text">
                        <h2>Nome do Produto 3</h2>
                        <div className="cart-item-description-prices">
                          <h3>De R$ 200,00</h3>
                          <h3>Por R$ 100,00</h3>
                          <h3>Ou em 4x de R$ 25,00 s/ juros</h3>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-control">
                      <div className="cart-item-control-unit">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                      </div>
                    </div>
                    <span className="cart-item-control-delete">Excluir</span>
                  </div>
                </div>
                <div className="cart-total">
                  <span>TOTAL: R$ 200,00</span>
                </div>
                <div className="cart-checkout-button">FINALIZAR COMPRA</div>
              </div>
            </div>
          </div>
        )}
      </NavConsumer>
    );
  }
}

export default CartMenu;
