import "../styles.css";
import React from "react";
import VideoDetail from "./VideoDetail"
export default class VideoList extends React.Component {
  chg = (vid) => {
    const { pd } = this.props;
    //console.log(pd,vid);
    pd(vid);
  };
  render() {
    return (
      <div className="VideoList">
        <VideoDetail vid={this.chg} q={this.props.video1} video="video" />
        <VideoDetail vid={this.chg} q={this.props.video2} video="video" />
        <VideoDetail vid={this.chg} q={this.props.video3} video="video" />
        <VideoDetail vid={this.chg} q={this.props.video4} video="video" />
      </div>
    );
  }
}
