import "./styles.css";
import React from "react";
import SearchBar from "./Component/SearchBar";
import YoutubeApi from "./Component/YoutubeApi";
export default class App extends React.Component {
  state = {
    value: "closer",
    // items: ""
  };

  handleSubmit = (searchvalue) => {
    this.setState((prevProps) => {
      return { value: searchvalue };
    });
  };
  //   callbackFunction = (item) => {
  //     this.setState((prevProps) => {
  //       return { items : item };
  //   });
  //   console.log(this.state.items);
  // };
  componentDidUpdate() {}
  render() {
    return (
      <div className="App">
        <div className="nav">
          <h1 className="name">Youtube</h1>
          <SearchBar searchvalue={this.handleSubmit}/>
        </div>
        <YoutubeApi q={this.state.value} />
      </div>
    );
  }
}
