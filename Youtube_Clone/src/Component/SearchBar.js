import "../styles.css";
import React from "react";

export default class SearchBar extends React.Component {
  state = {
    searchValue: ""
  };

  handleChange = (event) => {
    this.setState((prevProps) => {
      return { searchValue: event.target.value };
    });
    // console.log(this.state.searchValue);
  };
  handleSubmit = (event) => {
    const { searchValue } = this.state;
    const { searchvalue } = this.props;
    searchvalue(searchValue);
    event.preventDefault();
  };
  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            className="SearchBar"
          />
        </form>
      </div>
    );
  }
}
