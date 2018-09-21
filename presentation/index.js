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
} from "./react-examples";

require("normalize.css");
import "./main.css";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#03A9FC",
    tertiary: "#ffcc00",
    quarternary: "#1F2022"
  },
  {
    primary: "Kalam",
    secondary: "Helvetica"
  }
);

import { CodeSnippet } from "./CodeSnippet";
import { STYLED_COMPONENTS } from "./code-examples";
import {
  PopMotionExample,
  ReactPoseExample,
  StyledComponentsExample
} from "./js-library-examples";

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
`;

export default class Presentation extends React.Component {
  _animateWithRAF() {
    requestAnimationFrame(() => {
      const currentStyle = this._ref.style.transform.slice(
        this._ref.style.transform.indexOf("-"),
        this._ref.style.transform.indexOf("p")
      );
      const newStyle = parseInt(currentStyle) - 1 || -1;
      this._ref.style.transform = `translateY(${newStyle}px)`;

      if (newStyle > -250) {
        this._animateWithRAF();
      }
    });
  }

  _animateUsingWebAPI() {
    const keyframes = [
      { opacity: 0, transform: "translateY(0)", color: "#fff" },
      { opacity: 1, transform: "translateY(-300px)", color: "#000" }
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
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Motion in React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Kaylie Kwon (@kaylie_alexa)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Image
            style={{ width: "auto", height: "380px", marginTop: "24px" }}
            src="./kaylie.jpg"
          />
          <Heading margin="10px 0 0" textColor="primary" size={4}>
            Previously @eventbrite, @yarnpkg
            <br />
            Now UI Tools & Operations at @netflix
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="This has been quite a change for me, for me to be lucky enough to be able to spend 100% of my time on improving developer experience and building cutting edge tools"
        >
          <Image
            style={{ width: "100%", marginTop: "24px" }}
            src="./wonderwoman.gif"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="in reality, it's a lot of battling things from all fronts, testing, ci, and cd, and there are tons of areas that could use improvement, esp. given the pace of innovation"
        >
          <Image
            style={{ width: "100%", marginTop: "24px" }}
            src="./tools.gif"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Tools & Motion Design seem very far apart
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} caps lineHeight={1} textColor="primary">
            CSS Makes Me Feel Like
          </Heading>
          <Image style={{ width: "auto", marginTop: "24px" }} src="./css.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} caps lineHeight={1} textColor="primary">
            Then learning css...
          </Heading>
          <Image
            style={{ width: "auto", height: "500px", marginTop: "24px" }}
            src="./cat.jpg"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Image
            style={{ marginTop: "28px", width: "100%" }}
            src="./existential.gif"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Users and usability
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <BlockQuote>
            <Quote>A good dev tool provides...</Quote>
            <Cite>Abstraction without hindering knowledge</Cite>
            <Cite>Intuitive and timely feedback</Cite>
            <Cite>Portability and integration</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          textColor="primary"
          notes="critical to mobile design"
        >
          <BlockQuote>
            <Quote>A good motion design provides</Quote>
            <Cite>Affordance, content, and accessibility</Cite>
            <Cite>Communication between brand and user</Cite>
            <Cite>Conformity to existing behavior</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary" caps>
            Let's make some tweens!
          </Heading>
          <Image style={{ width: "400px", height: "auto" }} src="./tween.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <Image
            style={{ width: "300px", height: "auto" }}
            src="http://pngimg.com/uploads/google/google_PNG19644.png"
          />
          <BlockQuote>
            <Quote>But like, front end development in 2018...</Quote>
            <Cite>CSS Transitions</Cite>
            <Cite>CSS Animations</Cite>
            <Cite>Request Animation Frame</Cite>
            <Cite>Web Animations</Cite>
            <Cite>Third Party JS Animation Libraries</Cite>
            <Cite>React Transition Group</Cite>
            <Cite>React Animation Libraries</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Image
            style={{ width: "auto", height: "500px", marginTop: "24px" }}
            src="./drink.webp"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="quarternary">
          <Heading textColor="secondary" size={1} bold>
            Environment
          </Heading>
          <Heading textColor="tertiary" size={1} bold>
            Language
          </Heading>
          <Heading textColor="secondary" size={1} bold>
            Framework
          </Heading>
          <Heading textColor="tertiary" size={1} bold>
            Library
          </Heading>
          <Heading textColor="secondary" size={1} bold>
            YOUR Code!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Environment
          </Heading>
          <Text textColor="secondary" size={1} bold>
            determines your rendering engine, languages, and capabilities
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="(Gecko, Webkit, Blink). What is your equivalent of a DOM? What language features of JS/CSS can you use? Do you have RAF? WebGL?"
        >
          <Heading textColor="secondary" size={2} bold>
            Web
          </Heading>
          <Heading textColor="tertiary" size={2} bold>
            Mobile
          </Heading>
          <Heading textColor="secondary" size={2} bold>
            Email
          </Heading>
          <Heading textColor="tertiary" size={2} bold>
            TV
          </Heading>
          <Heading textColor="secondary" size={2} bold>
            VR
          </Heading>
          <Heading textColor="tertiary" size={2} bold>
            IOT
          </Heading>
          <Heading textColor="secondary" size={2} bold>
            ...more!
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="Netflix's TVUI team uses a framework built on top of JSC to communicate across various device APIs. The easiest analogy I can think of is probably the Electron framework for TV, but the main idea is that we don't have a traditional browser environment/HTML/CSS to work with."
        >
          <Heading textColor="primary" size={2} bold>
            No HTML/CSS, wut?
          </Heading>
          <Image style={{ width: "100%", height: "auto" }} src="./demo.gif" />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="not just how to implement it, but what to implement in the first place. How you convey information varies by your platform even if it's aiming for the same goal"
        >
          <Image
            style={{ marginTop: "10px", width: "100%", height: "auto" }}
            src="https://cdn-images-1.medium.com/max/2000/1*boQYFGPLtlDof3RRs124bQ.gif"
          />
          <Text margin="10px 0 0" textColor="quarternary" size={2}>
            <i className="em em-thinking_face" />
            <Link
              textColor="primary"
              href="https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc"
            >
              Creating Usability with Motion
            </Link>
            <i className="em em-thinking_face" />
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="swiping gesture from Tinder, which feels sleek on mobile doesn't quite translate the same way on desktop. On the right side you see an ad of Tinder for Desktop. First of all, I don't know those who are brave enough to use it on desktop and have a computer from the 90s. If you get past that, you will notice that even though visual direction is similar, the context is different between swiping  and dragging"
        >
          <Heading textColor="tertiary" size={3} bold>
            Mobile and desktop,<br />not the same...
          </Heading>
          <div style={{ display: "flex" }}>
            <Image
              style={{ width: "50%", height: "50%", marginRight: "10px" }}
              src="./tinder.gif"
            />
            <Image
              style={{ width: "50%", height: "50%" }}
              src="./tinder_desktop.gif"
            />
          </div>
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} lineHeight={1} textColor="primary" caps>
            12 Principles of Animation
          </Heading>
          <Image
            style={{ marginTop: "10px", width: "100%", height: "auto" }}
            src="https://octuweb.com/wp-content/uploads/12-Principles-of-Animation.gif"
          />
          <Text margin="10px 0 0" textColor="quarternary" size={2}>
            <i className="em em-racehorse" />
            <Link textColor="primary" href="http://the12principles.tumblr.com/">
              The Illusion of Life
            </Link>
            <i className="em em-racehorse" />
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={1} textColor="primary" caps>
            Anticipation -> Loader
          </Heading>
          <Text textColor="secondary">
            prepares the user for the next action
          </Text>
          <div style={{ display: "flex" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src="./anticipation.gif"
            />
            <Image
              style={{ width: "100%", height: "100%" }}
              src="./loading.gif"
            />
          </div>
        </Slide>
       */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} lineHeight={1} textColor="primary">
            But back to web, where we have CSS and Friends
          </Heading>
          <Image
            width="500"
            src="https://media.giphy.com/media/jy556kAY2XYhG/giphy.gif"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={2} textColor="primary" caps>
            CSS Transition
          </Heading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="squash-and-stretch squash-and-stretch--css"
              ref={node => {
                if (node) {
                  setTimeout(
                    () =>
                      (node.className += " squash-and-stretch--css-transition"),
                    500
                  );
                }
                return node;
              }}
            />
            <List margin="10px 0px 0 100px" textColor="tertiary" size={2}>
              <ListItem>Declarative API</ListItem>
              <ListItem>Transition states using pseudo selectors</ListItem>
              <ListItem>Timing, easing, and duration</ListItem>
              <ListItem>
                Access to other css features like media queries
              </ListItem>
              <ListItem>Browser performance & compatibility</ListItem>
            </List>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} lineHeight={2} textColor="primary" caps>
            CSS Animation
          </Heading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="squash-and-stretch squash-and-stretch--css-animation" />
            <List margin="10px 0px 0 30px" textColor="tertiary" size={2}>
              <ListItem bold>Everything from CSS Transition</ListItem>
              <ListItem>Key frame Api</ListItem>
              <ListItem>Infinite Loops (Ex. Loading States)</ListItem>
            </List>
          </div>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="The gold standard of performance is 60fps. A single frame can have any of these 5 steps, from running your javascript code to filling in the actual pixels and ordering your elements. Because they happen in a waterfall fashion, you want to try and use the processes in the later stages, such as paint or composite, over layout. The goal would be to get it under 16ms."
        >
          <Heading textColor="tertiary" size={4}>
            Not all CSS properties are equal
            <Image
              style={{ width: "2000px", height: "auto" }}
              src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg"
            />
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
            <Link href="https://csstriggers.com/">CSS Triggers</Link>
            <i className="em em-boom" />
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={4} lineHeight={1} textColor="primary" caps>
            CSS seems pretty great, so when do you need JS?
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="css transitions and animations are fire and forget, for example, you can't stop animation."
        >
          <Heading size={2} bold textColor="tertiary">
            Complex interactions across user behavior, multiple components and
            data sources
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="It works well if your animation is self-contained, and doesn't care about the user or anything else happening on the rest of the page. "
        >
          <Image
            style={{ width: "300px", height: "auto" }}
            src="./twitter-splash.gif"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="Separation of concerns (You passed presentation vs. behavior)"
        >
          <Image
            style={{ width: "70%", height: "auto" }}
            src="./twitter-profile.gif"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <List textColor="tertiary">
            <Heading size={4} lineHeight={1} textColor="primary">
              Coordination between different components or data sources
            </Heading>
            <Heading size={4} lineHeight={1} textColor="tertiary">
              -> State Management
            </Heading>
            <Heading size={4} lineHeight={1} textColor="primary">
              Interaction with user behavior
            </Heading>
            <Heading size={4} lineHeight={1} textColor="tertiary">
              -> Event Loop
            </Heading>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading
            size={3}
            caps
            lineHeight={1}
            textColor="primary"
            notes="Changing an element's attributes, such as class, id, and style"
          >
            Examples IRL
          </Heading>
          <List textColor="tertiary">
            <Heading size={5} lineHeight={1} textColor="primary">
              Coordination between different components or data sources
            </Heading>
            <ListItem>
              Notification bar that toggles between success and fail states
              based on form submission
            </ListItem>
            <ListItem>Tooltip that appears on button hover</ListItem>
            <ListItem>
              Data visualizations that animate differently based on data
            </ListItem>
            <Heading size={5} lineHeight={1} textColor="primary">
              Interaction with user behavior
            </Heading>
            <ListItem>Parallax effect on scroll event</ListItem>
            <ListItem>
              Page turning, snap to grid, Drag and drop (touchstart/touchend)
            </ListItem>
            <ListItem>Game development and storytelling</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            JS gives us a hook into the rendering process.
          </Heading>
          <Text size={6} fit lineHeight={1} textColor="tertiary">
            AKA Request Animation Frame (RAF)!
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="While setTimeout isn't synchronized with frame boundaries"
        >
          <Text margin="10px 0 0" textColor="tertiary" size={2}>
            If we think of browser as having a lifecycle of many frames
            <span style={{ display: "flex" }}>
              <Image
                style={{ width: "200px", height: "30px" }}
                src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg"
              />
              <Image
                style={{ width: "200px", height: "30px" }}
                src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg"
              />
              <Image
                style={{ width: "200px", height: "30px" }}
                src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg"
              />
              <Image
                style={{ width: "200px", height: "30px" }}
                src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg"
              />
              <Image
                style={{ width: "200px", height: "30px" }}
                src="https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg"
              />
            </span>
            setTimeout has no idea where in the process it gets executed
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text
            style={{ position: "absolute", top: "300", left: "240" }}
            textColor="tertiary"
            size={2}
          >
            setTimeout
          </Text>
          <Image style={{ width: "100%" }} src="./settimeout.gif" />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="With React 16, it's a hard environment requirement, browser figures out inactive tabs. Previously you might've done something hacky like firing a setTimeout function at 1000/60 to achieve 16ms per frame. Note that RAF doesn't get passed in an interval because it relies on the browser to find the optimal time. In browsers like Chrome, the browser will actually slow down your animation in an inactive tab"
        >
          <div
            style={{
              margin: "-20px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image style={{ width: "600px", height: "100%" }} src="./RAF.png" />
          </div>
          <List margin="0px 0px 0 30px" textColor="tertiary">
            <ListItem bold size={4}>
              Doesn't take in interval as an argument because the browser
              determines the refresh rate (~60fps)
            </ListItem>
            <ListItem>
              Each subsequent RAF is guaranteed to be called in the next frame
            </ListItem>
            <ListItem>Avoids layout thrashing and `jank`</ListItem>
          </List>
          <Text textColor="tertiary" size={2}>
            <i className="em em-clap" />
            <Link href="https://twitter.com/jaffathecake/status/961980260194684928">
              Jake Archibald's Talk on Event Render Loop
            </Link>
            <i className="em em-clap" />
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="we're experimenting with in-depth transition using 3D rendering techniques. We need JS in this case, not only because we don't have CSS, but because we need to be able to dynamically calculate what box images you'll be getting based on recommendation logic, and we want to prioritize some images more than others via distance away from the camera"
        >
          <Image style={{ width: "100%", height: "auto" }} src="./depth.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <BlockQuote>
            <Quote>
              Also, JS community has solved a lot of the problems css hasn't yet
            </Quote>
            <List textColor="tertiary">
              <ListItem bold>Modularity, portability, and testability</ListItem>
              <ListItem bold>Polyfill and Babel ecosystem</ListItem>
            </List>
          </BlockQuote>
        </Slide>

        <Slide transition={["zoom"]} bgColor="quarternary">
          <Heading size={2} bold textColor="tertiary">
            So like, JS > CSS??
          </Heading>
          <Image src="./use_js.gif" />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="what's exciting is that there are efforts to bridge the two together"
        >
          <Image style={{ width: "100%", height: "auto" }} src="./merge.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src="./separation.png" />
          <Text margin="10px 0 0" textColor="quarternary" size={2}>
            <i className="em em-lightning" />
            <Link
              textColor="tertiary"
              href="https://www.youtube.com/watch?v=js9BihmW9ak"
            >
              Get That CSS out of My Javascript!
            </Link>
            <i className="em em-thinking_face" />
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="primary" caps>
            Animating with CSS in JS
          </Heading>
          <StyledComponentsExample
            style={{ width: "60%", height: "100%", margin: "auto" }}
            src="./styledComponents.png"
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          onActive={this._animateUsingWebAPI.bind(this)}
          notes="An experiemental web API that gives animation a first class status and you'd have methods like animate on the elements themselves"
        >
          <Heading size={3} lineHeight={1} textColor="secondary" caps>
            Web Animations
          </Heading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              style={{ width: "450px", height: "100%", margin: 0 }}
              src="./webAnimations.png"
            />
            <div className="squash-and-stretch" ref={this._setRef.bind(this)} />
          </div>
          <Text margin="10px 0 0" textColor="quarternary" size={2}>
            <i className="em em-right-facing_fist" />
            <Link
              href="https://mozdevs.github.io/Animation-examples/"
              textColor="primary"
            >
              RAF vs. Web Animations
            </Link>
            <i className="em em-left-facing_fist" />
          </Text>
          <Text margin="10px 0 0" textColor="quarternary" size={2}>
            <i className="em em-rabbit" />
            <Link
              href="https://codepen.io/rachelnabors/pen/eJyWzm"
              textColor="primary"
            >
              Web Animations Demo
            </Link>
            <i className="em em-rabbit" />
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="gives a developer building blocks in JavaScript to interact with the browser's implementation"
        >
          <Heading size={3} lineHeight={1} textColor="secondary" caps>
            Houdini
          </Heading>
          <Image
            style={{ width: "100%", height: "auto" }}
            src="./houdiniready.png"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="Previously dealing with css property values would be a pain because the type of value you set it to would not always return back as the same type. Like if you set opacity to a numerical value, the next time you read the value back, it'd return you back a string, which then you'd have to parse, strip, and calculate to provide it the next value. Now the elements have an attributeStyleMap, you have specific getters and setters that adhere to specific types and therefore will optimize and improve the interoperability of your code"
        >
          <Heading size={3} lineHeight={1} textColor="secondary" caps>
            CSS Typed Object Model
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={2}>
            el.style.opacity = value ->
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={2}>
            el.attributeStyleMap.set('opacity', value);
          </Text>
          <Text margin="50px 0 0" textColor="primary" size={2}>
            typeof el.style.opacity === 'string' ->
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={2}>
            typeof el.attributeStyleMap.get('opacity') === 'number'
          </Text>
          <Text margin="50px 0 0" textColor="primary" size={2}>
            .has(), .delete(), .clear()
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="Now you can also define your own paint functions or add custom css properties"
        >
          <Heading size={3} lineHeight={1} textColor="secondary" caps>
            Custom CSS Properties & Paint API
          </Heading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              style={{ width: "400px", height: "100%", margin: 0 }}
              src="./houdini.png"
            />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary" caps>
            Unlock more!
          </Heading>
          <Image style={{ width: "100%" }} src="./chromeflags.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Framework
          </Heading>
          <Text textColor="secondary" size={1} bold>
            determines the libraries and code you use based on your programming
            paradigm and priorities
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="React isn't opinionated about how you do your animation in particular"
        >
          <Heading size={2} caps lineHeight={1} textColor="primary">
            In React, we care about
          </Heading>
          <Text textColor="secondary" size={1} bold>
            Functional Reactive Programming
          </Text>
          <Text textColor="tertiary" size={1} bold>
            Composition and Abstraction
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary" caps>
            Some Third Party Animation Libraries
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            GSAP
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Anime.js
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Popmotion
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Three.js
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Lottie
          </Heading>
          <Heading size={5} lineHeight={1} textColor="quarternary">
            ...and many more!
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <PopMotionExample />
          <Image
            style={{ width: "80%", height: "100%", margin: "auto" }}
            src="./popmotion.png"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary" caps>
            Animating with Third Party Libraries
          </Heading>
          <div style={{ textAlign: "left" }}>
            <Heading size={5} lineHeight={1} textColor="secondary">
              Pros
            </Heading>
            <Heading size={5} lineHeight={1} textColor="quarternary">
              Performant, Browser Compatible, and Community-tested
            </Heading>
            <Heading size={5} lineHeight={1} textColor="secondary">
              Cons
            </Heading>
            <Heading size={5} lineHeight={1} textColor="quarternary">
              Requires DOM Access, No access to React lifecycle
            </Heading>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} caps lineHeight={1} textColor="primary">
            What do we need React for?
          </Heading>
          <Text textColor="tertiary" size={1} bold>
            Composition and Abstraction
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} lineHeight={1} textColor="primary" caps>
            React Transition Group
          </Heading>
          <Heading size={5} lineHeight={1} textColor="tertiary">
            (Previously known as React CSS Transition Group)
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="React doesn't offer a hook like 'shouldComponentUnmount', so Internally manages artificial state for you, so that you can do things like animating before they unmount."
        >
          <Heading size={2} lineHeight={1} textColor="primary" caps>
            Transition
          </Heading>
          <Text textColor="tertiary">
            Low Level API for hooking into component's mount/unmount states
          </Text>
          <Image
            style={{ width: "60%", height: "100%", margin: "auto" }}
            src="./transition.png"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="componentize-motion by passing it's current state to children and the children just key off the state"
        >
          <Heading size={1} lineHeight={1} textColor="primary" caps>
            Transition
          </Heading>
          <ReactTransitionExample />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="Transition component doesn't care how you animate, it only really passes down the current transition state. one level above by providing it how to animate, via the onEntering hook. I.e. it manually calls reflow by reading off node.scrollTop and then adding the classname;"
        >
          <Heading size={2} lineHeight={1} textColor="primary" caps>
            CSS Transition
          </Heading>
          <Text textColor="tertiary" size={2}>
            High level API wrapped over React Transition
          </Text>
          <Image
            style={{ width: "50%", height: "100%", margin: "auto" }}
            src="./cssTransition.png"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} lineHeight={1} textColor="primary" caps>
            Transition Group
          </Heading>
          <img style={{ width: "600px" }} src="./transitionGroup.png" />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="componentize-motion"
        >
          <ReactTransitionGroupExample />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="reduce like syntax, cubic-bezier curve only gives you control over two points (time and position). but js means we can apply actual physics rule, like Hooke's Law of Springs"
        >
          <Heading size={2} lineHeight={1} textColor="primary" caps>
            React Motion
          </Heading>
          <List margin="10px 0px 0 30px" textColor="tertiary" size={2}>
            <ListItem>Astracted, Declarative API for 95% of Use Case</ListItem>
            <ListItem>
              Allow physics, rather than timing to determine movement
            </ListItem>
            <ListItem>Spring motion / Hooke's Law F = kX</ListItem>
          </List>
          <img style={{ width: "90%" }} src="./reactMotion.png" />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="The end effect of using spring motion instead of a simple curve is that you give a lifelike weight to your objects, similar to techniques used in animation like pixar films"
        >
          <Heading size={1} lineHeight={1} textColor="primary" caps>
            React Motion
          </Heading>
          <ReactMotionExample />
          <Text margin="10px 0 0" textColor="tertiary" size={2}>
            <i className="em em-rocket" />
            <Link
              href="https:/ /www.youtube.com/watch?v=1tavDv5hXpo"
              textColor="primary"
            >
              Cheng Lou's Talk ons State of Animation
            </Link>
            <i className="em em-rocket" />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} caps lineHeight={1} textColor="primary">
            Cool, but what if I want everything?
          </Heading>
          <Text textColor="secondary" size={1} bold>
            Css in JS + Functional Programming + React Components
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes="React Pose is built by the same folks at Popmotion, and I love the simple interface that works well with Styled Components. Note that it doesn’t require you to explicitly define how to animate between two states. Based on the property you configure, it'll use tween or spring and take that decision away from the developer. It's mostly just the declarative object that captures two different states"
        >
          <Heading size={4} lineHeight={1} textColor="primary">
            Animating with Styled Components + React Pose
          </Heading>
          <ReactPoseExample pose="thumbnail" />
        </Slide>

        {/* <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary" caps>
            Choose your own adventure
          </Heading>
          <Image style={{ width: "80%", height: "100%" }} src="./chart.png" />
        </Slide> */}
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <BlockQuote>
            <Quote>The tl;dr?</Quote>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          textColor="primary"
          notes="The way we're moving towards using GraphQL on the client and features like React Suspense tells us we should carea bout in-between loading states before waiting for data and animation will play a bigger role"
        >
          <BlockQuote>
            <Quote>Have motion be part of your design spec</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="primary">
          <BlockQuote>
            <Quote>Have a framework for introducing frameworks</Quote>
            <Cite>
              Pros? Performance, More Control, Composition, Resuability
            </Cite>
            <Cite>Cons? Build Process, Bundle Size, Developer Overhead</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            THANKS!!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Kaylie Kwon (Twitter: @kaylie_alexa, Github: kaylie-alexa)
          </Text>
        </Slide>
      </Deck>
    );
  }
}
