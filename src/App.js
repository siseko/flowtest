import React from "react";
import RangePicker from "./RangePicker";
import PriceList from "./PriceList";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { prices: null, res: "Test" };

  componentDidMount() {
    axios
      .get("https://vigilant-wing-f244c1.netlify.com/.netlify/functions/index")
      .then(res => this.setState({ res }));
  }

  fetchPrices = async (startDate, endDate) => {
    let res = await axios.get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
    );
    let prices = Object.keys(res.data.bpi).map(key => {
      return { date: key, price: Math.trunc(res.data.bpi[key]) };
    });

    this.setState({ prices: prices });
  };

  render() {
    return (
      <div className="container">
        {this.state.res}
        <RangePicker onSubmit={this.fetchPrices} />
        <PriceList prices={this.state.prices} />
      </div>
    );
  }
}

export default App;
