import React from "react";
import { transform, spring, easing, tween, styler } from "popmotion";
import styled, { keyframes } from "styled-components";
import posed from "react-pose";

export const POPMOTION_CODE = `
import {tween, styler} from 'popmotion';

export class PopMotionExample extends React.Component {
    _animate = () => {
        tween({
            from: {x: 0, rotate: 0, backgroundColor: '#000'},
            to: {x: 600, rotate: 180, backgroundColor: '#FF0000'},
            duration: 1000,
            flip: Infinity,
        }).start(styler(this._ref).set);
    }

    _setRef = (ref) => {
        this._ref = ref;
    }

    render() {
        return (
            <div className="square" onClick={this._animate} ref={this._setRef} />
        );
    }
}
`;

export class PopMotionExample extends React.Component {
  _animate() {
    tween({
      from: { x: 0, rotate: 0, backgroundColor: "#000" },
      to: { x: 700, rotate: 180, backgroundColor: "#FF0000" },
      duration: 1000,
      ease: easing.backOut,
      flip: Infinity
    }).start(styler(this._ref).set);
  }

  _setRef(ref) {
    this._ref = ref;
  }

  render() {
    return (
      <div
        className="square"
        onClick={this._animate.bind(this)}
        ref={this._setRef.bind(this)}
      />
    );
  }
}

const Box = styled(
  posed.img({
    fullscreen: {
      width: "550px",
      height: "550px"
    },
    thumbnail: {
      width: "100px",
      height: "100px"
    }
  })
)``;

export class ReactPoseExample extends React.Component {
  state = { pose: "thumbnail" };

  _handleClick = () => {
    this.setState(({ pose: prevPose }) => ({
      pose: prevPose === "thumbnail" ? "fullscreen" : "thumbnail"
    }));
  };

  render() {
    return (
      <Box
        pose={this.state.pose}
        onClick={this._handleClick}
        src="./reactpose.png"
      />
    );
  }
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledComponentsExample = styled.img`
  animation: ${rotate360} 2s linear;
`;
