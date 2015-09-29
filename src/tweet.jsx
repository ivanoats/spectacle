/*global twttr */
import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class Tweet extends Base {
  componentDidMount() {
    if (!this.state.initialized) {
      console.log("not initialized");
      /*
      const js = document.createElement("script");
      js.id = "twitter-wjs";
      js.src = "//platform.twitter.com/widgets.js";
      this.link.parentNode.appendChild(js);
      twttr.widgets.createTweet(
        "20",
        document.getElementById(this.refs.findDOMNode().id),
        {
          theme: "dark"
        }
      );
      */
      this.state.initialized = true;

    } else {
      console.log("already initialized");
      // this.link = this.refs.findDOMNode();
    }
  }
  render() {
    const styles = {
      width: this.props.width || "",
      height: this.props.height || "",
      display: this.props.display || ""
    };
    return (
      <div style={[
        this.context.styles.components.image,
        this.getStyles(),
        styles,
        this.props.style]}
        className="twitter-embedded-tweet">
      </div>
    );
  }
}

Tweet.propTypes = {
  tweetID: React.PropTypes.number,
  display: React.PropTypes.string,
  style: React.PropTypes.object
};

Tweet.contextTypes = {
  styles: React.PropTypes.object
};

export default Tweet;
