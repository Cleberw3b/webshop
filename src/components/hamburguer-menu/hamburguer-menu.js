import { Component } from "react";
import "./hamburguer-menu.scss";
import ThreeLines from "../three-lines-that-cross/three-lines";

class HamburguerMenu extends Component {
  state = {
    menuList: [],
    show: false
  };

  componentDidMount() {
    const { menuList } = this.props;
    if (typeof menuList === undefined) return;
    this.setState({ menuList: menuList });
  }

  Toggle() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    return (
      <div className="hamburguer-menu-button">
        <div onClick={() => this.Toggle()}>
          <ThreeLines showCloseButton={this.state.show} />
        </div>
        <div className={"menu-list" + `${this.state.show ? " active" : ""}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HamburguerMenu;
