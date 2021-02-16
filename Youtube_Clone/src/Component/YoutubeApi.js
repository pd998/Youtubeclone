import "../styles.css";
import React from "react";
import YouTube from "react-youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
export default class YoutubeApi extends React.Component {
  state = {
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    q: ""
  };
  searchYoutube = async (q) => {
    q = encodeURIComponent(q);
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?q=" +
        q +
        "&type=video&key=AIzaSyBri2LCjC-USCO_u3tYSctWEweeoL4t7bQ"
    );
    const body = await response.json();
    //console.log(body);
    this.setState((prevProps) => {
      return {
        item1: body.items[0].id.videoId,
        item2: body.items[1].id.videoId,
        item3: body.items[2].id.videoId,
        item4: body.items[3].id.videoId,
        item5: body.items[4].id.videoId
      };
    });
  };
  componentDidUpdate(prevProps){
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
  chg = (pd) => {
    if(this.state.item2===pd)
    {
      let item=this.state.item1;
      this.setState((prevProps) => {
        return {
          item1: pd,
          item2: item
        };
      });
    }
    else if(this.state.item3===pd)
    {
      let item=this.state.item1;
      this.setState((prevProps) => {
        return {
          item1: pd,
          item3: item
        };
      });
    }
    else if(this.state.item4===pd)
    {
      let item=this.state.item1;
      this.setState((prevProps) => {
        return {
          item1: pd,
          item4: item
        };
      });
    }
    else if(this.state.item5===pd)
    {
      let item=this.state.item1;
      this.setState((prevProps) => {
        return {
          item1: pd,
          item5: item
        };
      });
    }

   };

  render() {
    
    

    const opts = {
      height: "600",
      width: "1000"
    };
    // console.log(this.state.item1);
    return (
      <div className="middle">
        <div className="main">
          <YouTube videoId={this.state.item1} opts={opts} />
          <VideoDetail q={this.state.item1} video="video1"/>
        </div>
        <VideoList
          video1={this.state.item2}
          video2={this.state.item3}
          video3={this.state.item4}
          video4={this.state.item5}
          pd={this.chg}
        />
      </div>
    );
  }
}
