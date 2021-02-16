import "../styles.css";
import React from "react";

export default class VideoDetail extends React.Component {
  state = {
    publishedAt: "",
    title: "",
    description: "",
    channelTitle: "",
    thumbnails: "",
    q: ""
  };
  searchYoutube = async (q) => {
    q = encodeURIComponent(q);
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=" +
        q +
        "&key=AIzaSyBri2LCjC-USCO_u3tYSctWEweeoL4t7bQ"
    );
    const body = await response.json();
    this.setState((prevProps) => {
      return {
        publishedAt: body.items[0].snippet.publishedAt,
        title: body.items[0].snippet.title,
        description: body.items[0].snippet.description,
        channelTitle: body.items[0].snippet.channelTitle,
        thumbnails: body.items[0].snippet.thumbnails.maxres.url
      };
    });
  };
  componentDidUpdate(prevProps) {
    if (this.props.q !== prevProps.q) {
      this.setState((prevProps) => {
        return { q: this.props.q };
      });
      this.searchYoutube(this.props.q);
    }
  }
  componentDidMount() {
    if (this.props.q !== this.state.q) {
      this.setState((prevProps) => {
        return { q: this.props.q };
      });
      this.searchYoutube(this.props.q);
    }
  }
  chg = () => {
    const { q } = this.state;
    const { vid } = this.props;
    //console.log(q,vid);
    vid(q);
  };
  render() {
    return (
      <div className="VideoDetail">
        <div className={this.props.video}>
          <img src={this.state.thumbnails} alt="img" onClick={this.chg} />
        </div>
        <div>
          <p onClick={this.chg}>Title : {this.state.title}</p>
          <p onClick={this.chg}>ChannelTitle : {this.state.channelTitle}</p>
          <p onClick={this.chg}>PublishedAt : {this.state.publishedAt}</p>
        </div>
      </div>
    );
  }
}
