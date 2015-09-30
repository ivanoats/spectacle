/*global twttr */
import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class Tweet extends Base {
  componentDidMount() {
    console.log("twitter code not added yet");

    const js = document.createElement("script");
    js.id = "twitter-wjs";
    js.src = "//platform.twitter.com/widgets.js";
    js.setAttribute('type', 'text/javascript');

    console.log(js);

    React.findDOMNode(this).parentNode.appendChild(js);

    console.log(twttr);
    console.log("twitter code added")
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
        className="twitter-embedded-tweet">
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
