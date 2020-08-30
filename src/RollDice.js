import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: "one",
      dice2: "one",
      isRolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    let numbers = ["one", "two", "three", "four", "five", "six"];
    this.setState({
      dice1: numbers[Math.floor(Math.random() * 6)],
      dice2: numbers[Math.floor(Math.random() * 6)],
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <Dice num={this.state.dice1} isRolling={this.state.isRolling} />
        <Dice num={this.state.dice2} isRolling={this.state.isRolling} />
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling ... " : "Roll Dice !"}
        </button>
      </div>
    );
  }
}

export default RollDice;
