import { Component } from "react";
import ThreeLines from "../three-lines-that-cross/three-lines";
import SearchIcon from "../../../public/assets/icons/search-icon";
import "./search-mobile.scss";

class SearchMobileMenu extends Component {
  state = {
    show: false
  };

  Toggle() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    return (
      <div className="search-mobile-menu">
        <div onClick={() => this.Toggle()}>
          {this.state.show ? (
            <ThreeLines showCloseButton={this.state.show} />
          ) : (
            <SearchIcon height="20" width="20" />
          )}
        </div>
        <div
          className={"search-input-box" + `${this.state.show ? " active" : ""}`}
        >
          {this.state.show && (
            <>
              <input type="text" placeholder="O que você procura?" />
              <SearchIcon height="22" width="22" />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default SearchMobileMenu;
