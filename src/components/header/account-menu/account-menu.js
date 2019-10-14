import { Component } from "react";
import ThreeLines from "../three-lines-that-cross/three-lines";
import AccountIcon from "../../../../public/assets/icons/account-icon";
import { NavConsumer } from "../../../layout/nav/navProvider";
import "./account-menu.scss";

class AccountMenu extends Component {
  render() {
    return (
      <NavConsumer>
        {({ showAccount, toggleAccount }) => (
          <div className="account-menu" aria-label="Search">
            <div className="account-menu-button" onClick={toggleAccount}>
              {showAccount ? (
                <ThreeLines showCloseButton />
              ) : (
                <AccountIcon height="20" width="20" />
              )}
            </div>
            <div
              className={"account-menu-box" + `${showAccount ? " active" : ""}`}
            >
              <div className="account-menu-list">
                <span>MINHA CONTA</span>
                <span>MEUS PEDIDOS</span>
                <span>MEUS DADOS</span>
                <span>SAIR</span>
              </div>
            </div>
          </div>
        )}
      </NavConsumer>
    );
  }
}

export default AccountMenu;
