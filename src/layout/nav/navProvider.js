import React, { Component } from "react";
const NavContext = React.createContext();

class NavProvider extends Component {
  state = {
    showMenu: false,
    showSearch: false,
    showAccount: false,
    showCart: false,
    showWishlist: false,
    toggleMenu: () => this.toggleMenu(),
    toggleSearch: () => this.toggleSearch(),
    toggleAccount: () => this.toggleAccount(),
    toggleWishlist: () => this.toggleWishlist(),
    toggleCart: () => this.toggleCart(),
    isAnyOpen: () => this.isAnyOpen()
  };

  toggleMenu() {
    if (this.isAnyOpen() && !this.state.showMenu) this.closeAll();
    this.setState(state => ({ showMenu: !state.showMenu }));
  }

  toggleSearch() {
    if (this.isAnyOpen() && !this.state.showSearch) this.closeAll();
    this.setState(state => ({ showSearch: !state.showSearch }));
  }

  toggleAccount() {
    if (this.isAnyOpen() && !this.state.showAccount) this.closeAll();
    this.setState(state => ({ showAccount: !state.showAccount }));
  }

  toggleWishlist() {
    if (this.isAnyOpen() && !this.state.showWishlist) this.closeAll();
    this.setState(state => ({ showWishlist: !state.showWishlist }));
  }

  toggleCart() {
    if (this.isAnyOpen() && !this.state.showCart) this.closeAll();
    this.setState(state => ({ showCart: !state.showCart }));
  }

  closeAll() {
    this.setState({
      showMenu: false,
      showSearch: false,
      showAccount: false,
      showWishlist: false,
      showCart: false
    });
  }

  isAnyOpen() {
    if (this.state.showMenu) return true;
    if (this.state.showSearch) return true;
    if (this.state.showAccount) return true;
    if (this.state.showCart) return true;
    if (this.state.showWishlist) return true;
    return false;
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
