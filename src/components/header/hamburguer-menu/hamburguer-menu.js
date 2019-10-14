import { Component } from "react";
import ThreeLines from "../three-lines-that-cross/three-lines";
import { NavConsumer } from "../../../layout/nav/navProvider";
import "./hamburguer-menu.scss";

class HamburguerMenu extends Component {
  state = {
    menuList: []
  };

  componentDidMount() {
    const { menuList } = this.props;
    if (typeof menuList === undefined) return;
    this.setState({ menuList: menuList });
  }

  render() {
    return (
      <NavConsumer>
        {({ showMenu, toggleMenu }) => (
          <div className="menu-button">
            <div onClick={toggleMenu}>
              <ThreeLines showCloseButton={showMenu} />
            </div>
            <div className={"menu-box" + `${showMenu ? " active" : ""}`}>
              <div className="menu-list">{this.props.children}</div>
            </div>
          </div>
        )}
      </NavConsumer>
    );
  }
}

export default HamburguerMenu;
