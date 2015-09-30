/*global window document */
import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class Tweet extends Base {
  componentDidMount() {
    const js = document.createElement("script");
    js.id = "twitter-wjs";
    js.src = "//platform.twitter.com/widgets.js";
    js.setAttribute("type", "text/javascript");
    React.findDOMNode(this).parentNode.appendChild(js);
  }
  componentDidUpdate() {
    console.log(this.props.tweetID);
    console.log(React.findDOMNode(this));
    window.twttr.widgets.createTweet(
      this.props.tweetID,
      React.findDOMNode(this),
      {
        theme: "dark"
      }
    );
  }
  render() {
    const styles = {
      width: this.props.width || "",
      height: this.props.height || "",
      display: this.props.display || ""
    };
    return (
      <div
        style={[
          this.context.styles.components.tweet,
          this.getStyles(),
          styles,
          this.props.style]}
        className="twitter-embedded-tweet"
        ref="tweet">
      </div>
    );
  }
}

Tweet.propTypes = {
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  tweetID: React.PropTypes.number,
  display: React.PropTypes.string,
  style: React.PropTypes.object
};

Tweet.contextTypes = {
  styles: React.PropTypes.object
};

export default Tweet;
