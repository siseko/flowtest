import React from "react";
import moment from "moment";
import "./RangePicker.css";

class RangePicker extends React.Component {
  state = {
    startDate: moment()
      .subtract(6, "months")
      .format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
    error: null
  };

  componentDidMount() {}

  submit = event => {
    event.preventDefault();

    let startDate = moment(this.state.startDate);
    let endDate = moment(this.state.endDate);

    if (endDate.subtract(6, "months") > startDate) {
      this.setState({
        error: "The date range specified is greater than 6 months."
      });
      return;
    }

    if (endDate.isBefore(startDate)) {
      this.setState({
        error: "The end date specified is after the start date."
      });
      return;
    }
    this.setState({ error: null });

    this.props.onSubmit(this.state.startDate, this.state.endDate);
  };

  renderError = () => {
    if (this.state.error) {
      return <div className="error">{this.state.error}</div>;
    }
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="dates">
          <div className="date">
            <label htmlFor="start-date">From</label>
            <input
              value={this.state.startDate}
              onChange={e => this.setState({ startDate: e.target.value })}
              id="start-date"
              name="start-date"
              type="date"
              required
            />
          </div>
          <div className="date">
            <label htmlFor="end-date">To</label>
            <input
              value={this.state.endDate}
              onChange={e => this.setState({ endDate: e.target.value })}
              max={moment().format("YYYY-MM-DD")}
              id="end-date"
              name="end-date"
              type="date"
              required
            />
          </div>
        </div>
        <input type="submit" />
        {this.renderError()}
      </form>
    );
  }
}

export default RangePicker;
