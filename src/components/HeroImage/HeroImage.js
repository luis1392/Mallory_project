import React, { Component } from "react";

class HeroImage extends Component {
  state = {
    bgImage: `url(/images/landing-splash-bg.png)`
  };
  handleUpdateState = () => {
    this.setState({
      bgImage: `url(/images/category-${this.props.bgImage}.png)`
    });
  };
  componentDidMount = () => {
    if (this.props.bgImage) {
      this.handleUpdateState();
    }
  };
  componentDidUpdate = prevProps => {
    if (this.props.bgImage !== prevProps.bgImage) {
      this.handleUpdateState();
    }
  };
  render() {
    const { bgImage } = this.state;
    const { title, subtitle, stitle } = this.props;
    return (
      <div
        className="jumbotron"
        style={{
          backgroundImage: bgImage
        }}
      >
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <span>{stitle}</span>
      </div>
    );
  }
}

export default HeroImage;
