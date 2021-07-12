import React, { Component } from "react";
import Heading from "./components/heading";
import Square from "./components/square";
import Result from "./components/result";
class App extends Component {
  state = {
    turn: 0,
    squares: [
      { id: 0, position: 0, value: "Empty" },
      { id: 1, position: 1, value: "Empty" },
      { id: 2, position: 2, value: "Empty" },
      { id: 3, position: 3, value: "Empty" },
      { id: 4, position: 4, value: "Empty" },
      { id: 5, position: 5, value: "Empty" },
      { id: 6, position: 6, value: "Empty" },
      { id: 7, position: 7, value: "Empty" },
      { id: 8, position: 8, value: "Empty" },
    ],
  };
  handleClick = (position) => {
    const squares = [...this.state.squares];
    let turn = this.state.turn;
    squares[position] = { ...squares[position] };
    if (squares[position].value === "Empty") {
      if (turn % 2 === 0) {
        squares[position].value = "Cross";
      } else {
        squares[position].value = "Circle";
      }
      this.setState({ turn: this.state.turn + 1, squares });
    }
  };
  handleReset = () => {
    this.setState({
      turn: 0,
      squares: [
        { id: 0, position: 0, value: "Empty" },
        { id: 1, position: 1, value: "Empty" },
        { id: 2, position: 2, value: "Empty" },
        { id: 3, position: 3, value: "Empty" },
        { id: 4, position: 4, value: "Empty" },
        { id: 5, position: 5, value: "Empty" },
        { id: 6, position: 6, value: "Empty" },
        { id: 7, position: 7, value: "Empty" },
        { id: 8, position: 8, value: "Empty" },
      ],
    });
  };
  checkWinner = () => {
    const squares = [...this.state.squares];
    if (
      squares[0].value !== "Empty" &&
      squares[0].value === squares[1].value &&
      squares[1].value === squares[2].value
    )
      return squares[0].value;
    if (
      squares[3].value !== "Empty" &&
      squares[3].value === squares[4].value &&
      squares[4].value === squares[5].value
    )
      return squares[3].value;
    if (
      squares[6].value !== "Empty" &&
      squares[6].value === squares[7].value &&
      squares[7].value === squares[8].value
    )
      return squares[6].value;
    if (
      squares[0].value !== "Empty" &&
      squares[0].value === squares[3].value &&
      squares[3].value === squares[6].value
    )
      return squares[0].value;
    if (
      squares[1].value !== "Empty" &&
      squares[1].value === squares[4].value &&
      squares[4].value === squares[7].value
    )
      return squares[1].value;
    if (
      squares[2].value !== "Empty" &&
      squares[2].value === squares[5].value &&
      squares[5].value === squares[8].value
    )
      return squares[2].value;
    if (
      squares[0].value !== "Empty" &&
      squares[0].value === squares[4].value &&
      squares[4].value === squares[8].value
    )
      return squares[0].value;

    if (
      squares[2].value !== "Empty" &&
      squares[2].value === squares[4].value &&
      squares[4].value === squares[6].value
    )
      return squares[0].value;
    for (let i = 0; i < 9; i++) {
      if (squares[i].value === "Empty") return "";
    }
    return "Tie";
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Heading />
          <div className="container">
            {this.state.squares.map((square) => (
              <Square
                key={square.id}
                position={square.position}
                value={square.value}
                handleClick={this.handleClick}
              />
            ))}
          </div>
          {this.checkWinner() && (
            <Result
              winner={this.checkWinner()}
              handleReset={this.handleReset}
            />
          )}
          <footer>
            <h2
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sumitgupta6411",
                  "_blank"
                )
              }
            >
             😃 Made with ❣️ by Sumit Gupta😄
            </h2>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
