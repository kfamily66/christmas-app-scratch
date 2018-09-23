import React from "react";
import Item from "./Item";

class ShopItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "clear"
    };
  }
  setClear = () => {
    this.props.setClearSelected();
    this.setState(() => ({ type: "clear" }));
  };
  setFrosted = () => {
    this.props.setFrostedSelected();
    this.setState(() => ({ type: "frosted" }));
  };
  render() {
    return (
      <div className="shop__list">
        <h4>
          <span className={this.state.type === "clear" && "type--selected"} onClick={this.setClear}>
            Clear
          </span>{" "}
          /{" "}
          <span className={this.state.type === "frosted" && "type--selected"} onClick={this.setFrosted}>
            Frosted
          </span>
        </h4>
        {this.state.type === "clear" && (
          <ul className="shop__list-ul">
            {this.props.items.map((item, index) => {
              if (index <= 7) {
                return (
                  <Item
                    item={item}
                    clickHandler={this.props.clickHandler}
                    key={item.name}
                    selected={index + 1 === this.props.selected}
                  />
                );
              }
            })}
          </ul>
        )}
        {this.state.type === "frosted" && (
          <ul className="shop__list-ul">
            {this.props.items.map((item, index) => {
              if (index > 7) {
                return (
                  <Item
                    item={item}
                    clickHandler={this.props.clickHandler}
                    key={item.name}
                    selected={index + 1 === this.props.selected}
                  />
                );
              }
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default ShopItemsList;
