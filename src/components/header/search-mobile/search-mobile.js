import { Component } from "react";
import ThreeLines from "../three-lines-that-cross/three-lines";
import SearchIcon from "../../../../public/assets/icons/search-icon";
import { NavConsumer } from "../../../layout/nav/navProvider";
import "./search-mobile.scss";

class SearchMobile extends Component {
  render() {
    return (
      <NavConsumer>
        {({ showSearch, toggleSearch }) => (
          <div className="search-mobile" aria-label="Search">
            <div className="search-mobile-button" onClick={toggleSearch}>
              {showSearch ? (
                <ThreeLines showCloseButton />
              ) : (
                <SearchIcon height="20" width="20" />
              )}
            </div>
            <div
              className={"search-input-box" + `${showSearch ? " active" : ""}`}
            >
              {showSearch && (
                <>
                  <input type="text" placeholder="O que você procura?" />
                  <SearchIcon height="22" width="22" />
                </>
              )}
            </div>
          </div>
        )}
      </NavConsumer>
    );
  }
}

export default SearchMobile;
