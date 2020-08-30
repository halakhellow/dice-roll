import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  render() {
    return (
      <i
        className={`Dice fas fa-dice-${this.props.num} ${
          this.props.isRolling && "Dice-shake"
        }`}
      ></i>
    );
  }
}

export default Dice;
