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
    this.createTweet();
  }
  createTweet() {
    if (this.state.tweetEmbedded) {
      return;
    } else {
      window.setTimeout(() => {
        window.twttr.widgets.createTweet(
          this.props.tweetID,
          React.findDOMNode(this),
          {
            theme: "light"
          }
        );
      }, 850);
      this.setState({tweetEmbedded: true});
    }
  }
  render() {
    const styles = {
      width: this.props.width || "auto",
      height: this.props.height || "auto",
      display: this.props.display || ""
    };
    return (
      <div
        style={[
          this.context.styles.components.tweet,
          this.getStyles(),
          styles,
          this.props.style]}
        className="twitter-embedded-tweet tw-embed-center"
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
