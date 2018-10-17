import React, { Component } from "react";

class Logo extends Component {
  render() {
    const { url, style } = this.props;
    return <img src={url} className={style} alt="logo" />;
  }
}

export default Logo;
