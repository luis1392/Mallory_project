import React, { Component } from "react";

class LittleMenuFooter extends Component {
  render() {
    return (
      <div className="col-md-3  col-md-offset-1 ">{this.props.children}</div>
    );
  }
}
export default LittleMenuFooter;
