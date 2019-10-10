import React, { Component } from "react";
const NavContext = React.createContext();

class NavProvider extends Component {
  state = {
    showMenu: false,
    showSearch: false,
    showAccount: false,
    showCart: false,
    showWishlist: false,
    openMenu: () => openMenu(),
    openSearch: () => openSearch(),
    openAccount: () => openAccount(),
    openWishlist: () => openWishlist(),
    openCart: () => openCart(),
    closeAll: () => closeAll()
  };

  closeAll() {
    this.setState({
      showMenu: false,
      showSearch: false,
      showAccount: false,
      showWishlist: false,
      showCart: false
    });
  }

  openMenu() {
    this.closeAll();
    this.setState({ showMenu: true });
  }
  openSearch() {
    this.closeAll();
    this.setState({ showSearch: true });
  }
  openAccount() {
    this.closeAll();
    this.setState({ showAccount: true });
  }
  openWishlist() {
    this.closeAll();
    this.setState({ showWishlist: true });
  }
  openCart() {
    this.closeAll();
    this.setState({ showCart: true });
  }

  render() {
    return (
      <NavContext.Provider value={this.state}>
        {this.props.children}
      </NavContext.Provider>
    );
  }
}

const NavConsumer = NavContext.Consumer;
export default NavProvider;
export { NavConsumer };
