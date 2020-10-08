import React, { Component } from "react";
import "./App.css";
import Top from './Components/Top'
import Middle from './Components/Middle'
import Bottom from './Components/Bottom'



class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
      <Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>
      </div>
    );
  }
}

export default App;

// Country: "England",
// Date: 2004-05-01,
// LocalPrice: 4.36,
// DollarEx:2.5,
// DollarPrice: 1.2,
// DollarPPP:0.9960159362549802,
// DollarValuation:-0.3984063745019806,