import React from "react";
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import ReactTransitionExample, {
  TRANSITION_EXAMPLE_CODE,
  ReactTransitionGroupExample,
  CSS_TRANSITION_GROUP,
  CSS_TRANSITION_GROUP_STYLESHEET,
  ReactMotionExample,
  REACT_MOTION_CODE,
  REACT_TRANSITION_GROUP_CODE
} from './react-examples';

require("normalize.css");
import './main.css';

const theme = createTheme({
  primary: "white",
  secondary: "#03A9FC",
  tertiary: "#ffcc00",
  quarternary: "#1F2022"
}, {
  primary: "Amatic SC",
  secondary: "Helvetica"
});

import {CodeSnippet} from './CodeSnippet';
import {STYLED_COMPONENTS} from './code-examples';
import {PopMotionExample, POPMOTION_CODE} from './js-library-examples';

const RAF = `
const animateCircle = () => {
  const draw = () {
    // read/write style of node
  };
  
  requestAnimationFrame(animateCircle);

  // vs. setTimeout(animateCircle, 1000/60);
};

animateCircle();
`;

const ANIMATION_WEB = `
const ball = document.querySelector('.ball');
const keyframes = [
  {opacity: 0, transform: 'translateY(0)'}, 
  {opacity: 1, transform: 'translateY(-300px)'}
];

ball.animate(keyframes, {
    duration: 2000,
    iterations: Infinity
});

ball.pause()
ball.play()
ball.finish();
`


export default class Presentation extends React.Component {
  _animateWithRAF() {
    requestAnimationFrame(() => {
      const currentStyle = this._ref.style.transform.slice(this._ref.style.transform.indexOf('-'), this._ref.style.transform.indexOf('p'));
      const newStyle = parseInt(currentStyle) - 1 || -1;
      this._ref.style.transform = `translateY(${newStyle}px)`;
      
      if (newStyle > -250) {
        this._animateWithRAF();
      }
    });
  }

  _animateUsingWebAPI() {
    const keyframes = [
      {opacity: 0, transform: 'translateY(0)', color: "#fff"}, 
      {opacity: 1, transform: 'translateY(-300px)', color: "#000"},
    ];

    this._ref.animate(keyframes, {
        duration: 2000,
        iterations: Infinity
    });
  }

  _setRef(ref) {
    this._ref = ref;
  }

  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Motion in React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Kaylie Kwon (@kaylie_alexa)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>Frontend Engineer @Eventbrite</Heading>
          <Image style={{width: 'auto', height: '380px', 'marginTop': '24px'}} src="https://drive.google.com/uc?id=1NwFwnCuV6zRSoqQ4eFk895g51WI3OFeB" />
          <Link href="https://www.eventbrite.com/careers/">
            <i  className="em em-man-with-bunny-ears-partying" />
            We're hiring!
            <i className="em em-woman-with-bunny-ears-partying"></i>
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>Things I Like</Heading>
          <Heading size={1} textColor="secondary">Javascript</Heading>
          <Heading size={2} textColor="secondary">Node</Heading>
          <Heading size={3} textColor="secondary">Bash</Heading>
          <Heading size={4} textColor="secondary">CLIs</Heading>
          <Text size={6} textColor="secondary">UI</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={2} textColor="primary">
              CSS Makes Me Feel Like
            </Heading>
            <Text textColor="tertiary" size={2}>
              <i style={{width: '150px', height: '150px'}} className="em em-cold_sweat" />
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Me Adding Motion Like
            </Heading>
            <Image style={{marginTop: '28px'}} src="https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <Image style={{borderRadius: '50%', width: '100px', 'height': 'auto'}} src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAgtAAAAJGM2ZWJhZjMwLTZkZjEtNDEyOS1hNDU5LWFlOWU3NTQ5NDBmNw.jpg" />
          <BlockQuote>
            <Quote>Hey Dave, why motion?</Quote>
            <Cite>Provides affordance, content, and accessibility</Cite>
            <Cite>Part of brand personality</Cite>
            <Cite>Critical to mobile design</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} lineHeight={1} textColor="primary" caps>12 Principles of Animation
          </Heading>
          <Image style={{marginTop: '10px', width: '100%', 'height': 'auto'}} src="https://octuweb.com/wp-content/uploads/12-Principles-of-Animation.gif" />
          <Text margin="10px 0 0" textColor="quarternary" size={2}>
              <i className="em em-racehorse" /> 
              <Link textColor="primary" href="http://the12principles.tumblr.com/">
                The Illusion of Life
              </Link>
              <i className="em em-racehorse" /> 
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={1} textColor="primary" caps>Squash and Stretch
          </Heading>
          <Text textColor="secondary">gives the illusion of weight and flexibility to a character as they move</Text>
          <Image style={{marginTop: '10px', width: '500px', 'height': 'auto'}} src="https://media.giphy.com/media/l2JJIfI6nUkm5AzoQ/giphy.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Image style={{marginTop: '10px', width: '100%', 'height': 'auto'}} src="https://cdn-images-1.medium.com/max/2000/1*boQYFGPLtlDof3RRs124bQ.gif" />
          <Text margin="10px 0 0" textColor="quarternary" size={2}>
              <i className="em em-thinking_face" /> 
              <Link textColor="primary" href="https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc">
              Creating Usability with Motion
              </Link>
              <i className="em em-thinking_face" /> 
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <Image style={{width: '300px', 'height': 'auto'}} src="http://pngimg.com/uploads/google/google_PNG19644.png" />
          <BlockQuote>
            <Quote>Hey Internet, how to motion?</Quote>
            <Cite>CSS Transitions</Cite>
            <Cite>CSS Animations</Cite>
            <Cite>Request Animation Frame</Cite>
            <Cite>Web Animations</Cite>
            <Cite>Third Party JS Animation Libraries</Cite>
            <Cite>React Transition Group</Cite>
            <Cite>React Animation Libraries</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} lineHeight={2} textColor="primary" caps>CSS and Friends</Heading>
          <Image width="500" src="https://media.giphy.com/media/jy556kAY2XYhG/giphy.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="10px 0 0" textColor="tertiary" size={2}>
            Not all CSS Properties are Equal
              <Image style={{width: '2000px', 'height': 'auto'}} src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg" />
            </Heading>
            <List margin="10px 0 0" textColor="tertiary" size={2}>
              "Cheap"
              <ListItem>Opacity</ListItem>
              <ListItem>Transform (translate, scale, rotate)</ListItem>
            </List>
            <List margin="10px 0 0" textColor="secondary" size={2}>
              "Not so cheap"
              <ListItem>Width, height</ListItem>
              <ListItem>Position (top, left, right, bottom)</ListItem>
              <ListItem>Padding, margin</ListItem>
            </List>
            <Text margin="10px 0 0" textColor="quarternary" size={2}>
              <i className="em em-boom" /> 
              <Link href="https://csstriggers.com/">
                CSS Triggers
              </Link>
              <i className="em em-boom" /> 
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={2} textColor="primary" caps>CSS Transition</Heading>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="squash-and-stretch squash-and-stretch--css-transition" />
          <List margin="10px 0px 0 30px" textColor="tertiary" size={2}>
            <ListItem>Declarative API</ListItem>
            <ListItem>Transition states using pseudo selectors</ListItem>
            <ListItem>Timing, easing, and duration</ListItem>
            <ListItem>Access to other css features like media queries</ListItem>
            <ListItem>Browser performance & compatibility</ListItem>
          </List>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={2} textColor="primary" caps>CSS Animation</Heading>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="squash-and-stretch squash-and-stretch--css-animation" />
          <List margin="10px 0px 0 30px" textColor="tertiary" size={2}>
            <ListItem bold>Everything from CSS Transition</ListItem>
            <ListItem>Key frame Api</ListItem>
            <ListItem>Infinite Loops (Ex. Loading States)</ListItem>
          </List>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" notes="css transitions and animations are fire and forget, for example, you can't stop animation, totally depends on the browser to execute, e.g. dragging, also discuss houdini">
          <Heading size={1} lineHeight={1} textColor="primary" caps>CSS seems pretty great, so when do you need JS?</Heading>
          <List textColor="tertiary">
            <ListItem bold>Separation of concerns (presentation vs. behavior)</ListItem>
            <ListItem bold>Modularity, portability, and testability</ListItem>
            <Image style={{width: '450px', 'height': 'auto'}} src="https://media.giphy.com/media/nfMJvK5TCGm9a/giphy.gif" />
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary" caps>Animating with CSS in JS</Heading>
            <CodeSnippet code={STYLED_COMPONENTS} />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={4} lineHeight={1} textColor="primary" caps>CSS seems pretty great, so when do you need JS?</Heading>
            <Heading size={2} bold textColor="tertiary">Complex interactions across user behavior, multiple components and data sources</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
            <List textColor="tertiary">
            <Heading size={4} lineHeight={1} textColor="primary">Coordination between different components or data sources</Heading>
            <Heading size={4} lineHeight={1} textColor="tertiary">-> State Management</Heading>
            <Heading size={4} lineHeight={1} textColor="primary">Interaction with user behavior</Heading>
            <Heading size={4} lineHeight={1} textColor="tertiary">-> Event Loop</Heading>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
            <Heading size={1} caps lineHeight={1} textColor="primary" notes="Changing an element's attributes, such as class, id, and style">
              Examples IRL
            </Heading>
            <List textColor="tertiary">
            <Heading size={4} lineHeight={1} textColor="primary">Coordination between different components or data sources</Heading>
            <ListItem>Notification bar that toggles between success and fail states based on form submission</ListItem>
            <ListItem>Tooltip that appears on button hover</ListItem>
            <ListItem>Data visualizations that animate differently based on data</ListItem>
            <Heading size={4} lineHeight={1} textColor="primary">Interaction with user behavior</Heading>
            <ListItem>Parallax effect on scroll event</ListItem>
            <ListItem>Page turning, snap to grid, Drag and drop (touchstart/touchend)</ListItem>
            <ListItem>Game development and storytelling</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} lineHeight={2} textColor="primary" caps>Fine, we'll use JS</Heading>
          <Image width="400" src="https://media.giphy.com/media/rDkX4wvlwOcWQ/giphy.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              set Timeout is an anti-pattern
            </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} fit caps lineHeight={1} textColor="tertiary">
              ..it isn't synchronized with frame boundaries
            </Text>
            <Text margin="10px 0 0" textColor="tertiary" size={2}>
              <Image style={{width: '350px', 'height': 'auto'}} src="https://drive.google.com/uc?id=1XbhzH8Y8IibagQwVYfibQlKa014SYFbG" />
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text margin="10px 0 0" textColor="tertiary" size={2}>
              If we think of browser as having a lifecycle of many frames
              <span style={{display: 'flex'}}>
              <Image style={{width: '200px', 'height': '30px'}} src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg" />
              <Image style={{width: '200px', 'height': '30px'}} src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg" />
              <Image style={{width: '200px', 'height': '30px'}} src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg" />
              <Image style={{width: '200px', 'height': '30px'}} src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg" />
              <Image style={{width: '200px', 'height': '30px'}} src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg" />
              </span>
              setTimeout has no idea where in the process it gets executed
            </Text>
            <Text margin="100px 0 0" textColor="tertiary" size={2}>
              <i className="em em-clap" /> 
              <Link href="https://twitter.com/jaffathecake/status/961980260194684928">
                Jake Archibald's Talk on Event Render Loop
              </Link>
              <i className="em em-clap" /> 
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" notes="With React 16, it's a hard environment requirement, browser figures out inactive tabs">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Instead, use requestAnimationFrame (RAF)
            </Heading>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <CodeSnippet code={RAF} />
            </div>
            <List margin="10px 0px 0 30px" textColor="tertiary" size={2}>
              <ListItem bold>Doesn't take in interval as an argument because the browser determines the refresh rate (~60fps)</ListItem>
              <ListItem>Each subsequent RAF is guaranteed to be called in the next frame</ListItem>
              <ListItem>Avoids layout thrashing and `jank`</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" onActive={this._animateUsingWebAPI.bind(this)}>
          <Heading size={3} lineHeight={1} textColor="secondary" caps>New updates: Web Animations & Houdini</Heading>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <CodeSnippet code={ANIMATION_WEB} />
              <div className="squash-and-stretch" ref={this._setRef.bind(this)} />
            </div>
            <Text margin="10px 0 0" textColor="quarternary" size={2}>
              <i className="em em-right-facing_fist" />
              <Link href="https://mozdevs.github.io/Animation-examples/" textColor="primary">
                RAF vs. Web Animations
              </Link>
              <i className="em em-left-facing_fist" /> 
            </Text>
            <Text margin="10px 0 0" textColor="quarternary" size={2}>
              <i className="em em-rabbit" /> 
              <Link href="https://codepen.io/rachelnabors/pen/eJyWzm" textColor="primary">
                Web Animations Demo
              </Link>
              <i className="em em-rabbit" /> 
            </Text>
            <Text margin="10px 0 0" textColor="quarternary" size={2}>
              <i className="em em-tophat" /> 
              <Link href="https://github.com/w3c/css-houdini-drafts" textColor="primary">
                Houdini
              </Link>
              <i className="em em-tophat" /> 
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary" caps>Back to RAF, here are some Third Party Animation Libraries</Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">GSAP</Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">Anime.js</Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">Popmotion</Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">Three.js</Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">Lottie</Heading>
          <Heading size={5} lineHeight={1} textColor="quarternary">...and many more!</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary" caps>Let's make some tweens!</Heading>
          <Image style={{width: '400px', height: 'auto'}} src="https://s2.r29static.com//bin/entry/88b/0,592,2000,1500/x,80/1742582/image.jpg" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <PopMotionExample />
          <CodeSnippet code={POPMOTION_CODE} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary" caps>Animating with Third Party Libraries</Heading>
          <div style={{textAlign: 'left'}}>
          <Heading size={5} lineHeight={1} textColor="secondary">Pros</Heading>
          <Heading size={5} lineHeight={1} textColor="quarternary">Performant, Browser Compatible, and Community-tested</Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">Cons</Heading>
          <Heading size={5} lineHeight={1} textColor="quarternary">Requires DOM Access, No access to React lifecycle</Heading>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} lineHeight={1} textColor="primary" caps>React Transition Group</Heading>
          <Heading size={5} lineHeight={1} textColor="quarternary">(Previously known as React CSS Transition Group)</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" notes="componentize-motion by default the children are mounted by default with the parent and not unmounted on exit">
          <Heading size={1} lineHeight={1} textColor="primary" caps>Transition</Heading>
          <Text textColor="tertiary">Low Level API for hooking into component's mount/unmount states</Text>
          <CodeSnippet code={TRANSITION_EXAMPLE_CODE} />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" notes="componentize-motion">
          <Heading size={1} lineHeight={1} textColor="primary" caps>Transition</Heading>
            <ReactTransitionExample />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={1} textColor="primary" caps>CSS Transition</Heading>
            <Text textColor="tertiary" size={2}>High level API wrapped over React Transition</Text>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', marginRight: '20px'}}>
              <CodeSnippet code={CSS_TRANSITION_GROUP_STYLESHEET} />
              </div>
              <CodeSnippet code={CSS_TRANSITION_GROUP} />
            </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={1} textColor="primary" caps>Transition Group</Heading>
          <CodeSnippet code={REACT_TRANSITION_GROUP_CODE} />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" notes="componentize-motion">
          <Heading size={1} lineHeight={1} textColor="primary" caps>Transition Group</Heading>
          <ReactTransitionGroupExample />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" notes="reduce like syntax, cubic-bezier curve only gives you control over two points (time and position). but js means we can apply actual physics rule, like Hooke's Law of Springs">
          <Heading size={1} lineHeight={1} textColor="primary" caps>React Motion</Heading>
            <List margin="10px 0px 0 30px" textColor="tertiary" size={2}>
              <ListItem>Astracted, Declarative API for 95% of Use Case</ListItem>
              <ListItem>Allow physics, rather than timing to determine movement</ListItem>
              <ListItem>Spring motion / Hooke's Law   F = kX</ListItem>
            </List>
            <CodeSnippet code={REACT_MOTION_CODE} />
            <Text margin="10px 0 0" textColor="tertiary" size={2}>
              <i className="em em-rocket" /> 
              <Link href="https://www.youtube.com/watch?v=1tavDv5hXpo" textColor="primary">
                Cheng Lou's Talk on The State of Animation
              </Link>
              <i className="em em-rocket" /> 
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" notes="cubic-bezier curve only gives you control over two points (time and position). but js means we can apply actual physics rule, like Hooke's Law of Springs">
          <Heading size={1} lineHeight={1} textColor="primary" caps>React Motion</Heading>
            <ReactMotionExample />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} lineHeight={2} textColor="secondary" caps>Choose your own adventure</Heading>
          <div style={{textAlign: 'left'}}>
          <Heading size={5} lineHeight={1} textColor="primary">Performance -> Control -> React Ecosystem</Heading>
          <Heading size={5} lineHeight={1} textColor="quarternary">CSS Transition/Animation -> JS Libraries -> React Libraries</Heading>
          </div>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            THANKS!!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Kaylie Kwon (Twitter: @kaylie_alexa, Github: kaylieEB)
          </Text>
        </Slide>
      </Deck>
    );
  }
}
