import React from "react";
import "./PriceList.css";

class PriceList extends React.Component {
  getPrimes(price) {
    let count = 0;
    for (let i = 1; i <= price; i++) {
      if (this.isPrime(i)) {
        count++;
      }
    }

    return count;
  }

  isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  render() {
    if (this.props.prices) {
      const prices = this.props.prices.map(p => {
        let count = this.getPrimes(p.price);
        return (
          <div key={p.date} className={this.isPrime(count) ? "highlight" : ""}>
            <div className="price-item">
              <span>{p.date}</span>
              <span>$ {p.price}</span>
            </div>
          </div>
        );
      });
      return (
        <div className="price-list">
          <h2>Price List</h2>
          <div>{prices}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default PriceList;
