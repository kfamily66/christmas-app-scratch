import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Helmet } from "react-helmet";

class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  state = { openVal: false };

  changePage = e => {
    this.setState(() => ({ openVal: false }));
    const linkName = e.target.name;
    let newCounterVal = 0;

    switch (linkName) {
      case "home":
        newCounterVal = 0;
        break;

      case "about":
        newCounterVal = 1;
        break;

      case "gallery":
        newCounterVal = 2;
        break;

      case "shop":
        newCounterVal = 3;
        break;

      case "contact":
        newCounterVal = 4;
        break;

      default:
        //nothing
        break;
    }
    this.props.triggerMenu(newCounterVal);
  };

  render() {
    return (
      <header>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,user-scalable=no"
          />
          <title>The Contemporary Christmas Tree</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={require("./../img/icon.png")}
          />
        </Helmet>
        <div className="row">
          {this.props.counter.current !== 0 && (
            <p className="goDown" name="home" onClick={this.changePage}>
              HOME
            </p>
          )}
          <Menu
            isOpen={this.state.openVal}
            right={true}
            customCrossIcon={
              <img alt="cross" src={require("./../img/cross.png")} />
            }
            customBurgerIcon={
              <div>
                <div className="menuIcon">
                  <div className="menuIcon__row">
                    <span>M</span>
                    <span>E</span>
                  </div>
                  <div className="menuIcon__row">
                    <span>N</span>
                    <span>U</span>
                  </div>
                </div>
              </div>
            }
          >
            <a
              className="menu-item go__down"
              name="home"
              onClick={this.changePage}
            >
              1. HOME
            </a>
            <a className="menu-item" name="about" onClick={this.changePage}>
              2. ABOUT
            </a>
            <a className="menu-item" name="gallery" onClick={this.changePage}>
              3. GALLERY
            </a>
            <a className="menu-item" name="shop" onClick={this.changePage}>
              4. SHOP
            </a>
            <a className="menu-item" name="contact" onClick={this.changePage}>
              5. CONTACT
            </a>
            <a
              className="menu-item t__down"
              name="generalTerms"
              onClick={this.changePage}
            >
              General terms
            </a>
            <a
              className="menu-item"
              name="deliveryTerms"
              onClick={this.changePage}
            >
              Delivery terms
            </a>
            <a
              className="menu-item"
              name="privacyTerms"
              onClick={this.changePage}
            >
              Privacy terms
            </a>
          </Menu>
        </div>
      </header>
    );
  }
}

export default Header;
