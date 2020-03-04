import React from "react";
import cn from "classname";
export default class NewComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  selectLeft = () => this.setActive("left");

  selectRight = () => this.setActive("right");

  setActive = active => {
    this.setState({ active });
  };

  render() {
    const { active } = this.state;

    const sharedClasses = {
      btn: true,
      "btn-secondary": true
    };

    const leftButtonClass = {
      ...sharedClasses,
      left: true,
      active: active === "left"
    };

    const rightButtonClass = {
      ...sharedClasses,
      right: true,
      active: active === "right"
    };

    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img alt="" className="d-block w-100" src="/images/first.jpeg" />
          </div>
          <div className="carousel-item active">
            <img alt="" className="d-block w-100" src="/images/second.jpeg" />
          </div>
          <div className="carousel-item">
            <img alt="" className="d-block w-100" src="/images/third.jpeg" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
