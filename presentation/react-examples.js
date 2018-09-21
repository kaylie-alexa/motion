import React from "react";
import Transition from "react-transition-group/Transition";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CodeSnippet } from "./CodeSnippet";
import { Motion, spring } from "react-motion";

const defaultStyle = {
  opacity: 0,
  transform: "translateY(0)"
};

const transitionStyles = {
  entering: { opacity: 0.25, transform: "translateY(-150px)" },
  entered: { opacity: 1, transform: "translateY(-300px)" },
  exiting: { opacity: 0.25, transform: "translateY(-150px)" },
  exited: { opacity: 0, transform: "translateY(0)" }
};

const _getTransitionStyle = num => ({
  entering: { opacity: 0.25 },
  entered: { opacity: 1, transform: `translateY(${num / 5 * -300}px)` },
  exiting: { opacity: 0.25, transform: "translateY(0)" },
  exited: { opacity: 0, transform: "translateY(0)" }
});

export const TRANSITION_EXAMPLE_CODE = `
import Transition  from 'react-transition-group/Transition';

const transitionStyles = {
    entering: {opacity: 0.25},
    entered: {opacity: 1},
    exiting: {opacity: 0.25},
    exited: {opacity: 0}
};

export default class ReactTransitionExample extends React.Component {
    render() {
        const {in} = this.props;
        
        return (
            <Transition
                in={in}
                timeout={500}
            >
                {(state) => (<div style={transitionStyles[state] />)}
            </Transition>
        );
}
`;

export const CSS_TRANSITION_GROUP = `
import {CSSTransition} from 'react-transition-group'
  
const Example = ({children, in}) =>  (
    <CSSTransition
        in={in}
        timeout={500}
        classNames="fade"
        
        // or define them individually
        classNames={{
            enter: 'my-enter',
            enterActive: 'my-active-enter',
            exit: 'my-exit',
            exitActive: 'my-active-exit',
        }}
    >
        {children}
    </CSSTransition>
);
`;

export const CSS_TRANSITION_GROUP_STYLESHEET = `
// style.css

.fade-enter {
    opacity: 0.01;
}
  
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
}

.fade-exit {
    opacity: 1;
}

.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
}
`;

export const REACT_TRANSITION_GROUP_CODE = `
import {Transition, TransitionGroup} from 'react-transition-group'

const Example = ({items, enter, exit}) => (
    <TransitionGroup enter={enter} exit={exit}>
        {
            items.map((item) => 
                <Transition key={item}>
                    {item}
                </Transition>
            )
        }
    </TransitionGroup>
);
`;
export default class ReactTransitionExample extends React.Component {
  state = {
    mode: ""
  };

  _handleTransition(mode, node) {
    this.setState({ mode });
  }

  _handleClick() {
    this.setState(({ in: previousIn }) => ({ in: !previousIn }));
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Transition
            in={this.state.in}
            onEnter={this._handleTransition.bind(this, "entering")}
            onEntered={this._handleTransition.bind(this, "entered")}
            onExit={this._handleTransition.bind(this, "exiting")}
            onExited={this._handleTransition.bind(this, "exited")}
            timeout={500}
          >
            {state => (
              <div
                className="squash-and-stretch squash-and-stretch--css-transition"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              />
            )}
          </Transition>
        </div>
        <div
          onClick={this._handleClick.bind(this)}
          style={{ fontSize: "5rem" }}
        >
          Mode: {this.state.mode}
        </div>
      </div>
    );
  }
}

export class ReactTransitionGroupExample extends React.Component {
  state = { items: new Set() };

  componentDidMount() {
    this.setState({ items: new Set([1, 2, 3, 4, 5]) });
  }

  _handleClick(item) {
    this.setState(({ items: previousItems }) => ({
      in: previousItems.delete(item) && previousItems
    }));
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TransitionGroup>
          {Array.from(this.state.items).map(num => (
            <Transition key={num} timeout={500}>
              {state => {
                console.log(state);
                return (
                  <div
                    className="squash-and-stretch squash-and-stretch--css-transition"
                    style={{
                      ...defaultStyle,
                      display: "inline-block",
                      ..._getTransitionStyle(num)[state]
                    }}
                    onClick={this._handleClick.bind(this, num)}
                  />
                );
              }}
            </Transition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export const REACT_MOTION_CODE = `
import {Motion, spring} from 'react-motion';

export default class ReactMotionExample extends React.Component {
    render() {
        return (
            <Motion defaultStyle={{x: 0}} style={{x: spring(600)}}>
                {nextStyle => <div style={{transform: \`translateX(\${nextStyle.x}px)\`}} />}
            </Motion>
        );
    }
}
`;

const springs = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};

export const ReactMotions = () => (
  <div>
    {Object.keys(springs).map(key => (
      <Motion
        defaultStyle={{ x: 0 }}
        style={{ x: spring(500, springs[key]) }}
        key={key}
      >
        {interpolatingStyle => (
          <div
            className="squash-and-stretch squash-and-stretch--physics"
            style={{ transform: `translateX(${interpolatingStyle.x}px)` }}
          />
        )}
      </Motion>
    ))}
  </div>
);

export class ReactMotionExample extends React.Component {
  state = {
    mode: ""
  };

  componentDidMount() {
    this._interval = setInterval(this._handleClick.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  _handleClick() {
    this.setState(({ in: previousIn }) => ({ in: !previousIn }));
  }

  render() {
    let component = <ReactMotions />;

    if (this.state.in) {
      component = null;
    }

    return (
      <div style={{ display: "flex" }}>
        <div>
          {Object.keys(springs).map(key => (
            <div style={{ padding: "15px", textAlign: "left" }} key={key}>
              {`${key}`}
              <br />
              <span style={{ fontSize: "1.5rem", textAlign: "left" }}>
                {JSON.stringify(springs[key])}
              </span>
            </div>
          ))}
        </div>
        {component}
      </div>
    );
  }
}
