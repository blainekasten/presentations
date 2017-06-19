import React from "react";
import {
  ComponentPlayground,
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  ListItem,
  Slide,
  List,
  Quote,
  Text,
  Image,
  Appear,
  Layout, Fill,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


import images from './images';
import notes from './notes';
import slide2 from './slide2';

import preloader from "spectacle/lib/utils/preloader";
preloader(images);



const theme = createTheme({
  primary: '#1F2022',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE',
  primaryText: 'white',
  secondaryText: '#f37522',
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="none">
        <Slide transition={["zoom"]} bgColor="primary" notes={notes.one}>
          <Heading size={1} caps textColor="primaryText">
            HOT REACT TESTING PRACTICES
          </Heading>
          <Heading size={1}>🔥🔥🔥</Heading>
        </Slide>

        {slide2}

        <Slide transition={["slide"]} bgColor="primary" notes={notes.three}>
          <Heading size={6} textColor="primaryText">a little bit</Heading>
          <Heading size={1} caps textColor="secondaryText">Overwhelming</Heading>
        </Slide>

        <Slide transition={["zoom"]} bgImage={images.stepback} notes={notes.four}>
          <Heading size={1} caps textColor="primaryText">{"Let's take a step back"}</Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondaryText" notes={notes.five}>
          <Heading size={1} caps textColor="primaryText">{"Want"}</Heading>
          <List>
            <Appear><ListItem textColor="primaryText">Maintainable</ListItem></Appear>
            <Appear><ListItem textColor="primaryText">UI/UX</ListItem></Appear>
            <Appear><ListItem textColor="primaryText">!Overlap</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["none"]} bgColor="primary" notes={notes.six}>
          <Heading size={1} fit caps textColor="secondaryText">{"NEED"}</Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary" notes={notes.seven}>
          <Heading size={1} textColor="primaryText">{"✋"}</Heading>
          <Heading size={6} textColor="primaryText">{"if you've ever deleted a test because it didn't pass"}</Heading>
        </Slide>

        <Slide transition={["none"]} bgColor="quartenary" notes={notes.seven}>
          <Heading size={1} textColor="primary">{"✋"}</Heading>
          <Heading size={6} textColor="primary">{"if you've ever rewrote a failing test without checking if the failure was legitimate"}</Heading>
        </Slide>

        <Slide transition={["none"]} bgColor="secondary" bgImage={images.laziness} notes={notes.seven}>
          <Heading size={6} fit textColor="primaryText">laziness</Heading>
        </Slide>

        <Slide transition={["none"]} bgColor="secondary" bgImage={images.pressure} notes={notes.eight}>
          <Heading size={6} fit textColor="primaryText">pressure</Heading>
        </Slide>

        <Slide transition={["none"]} bgColor="secondary" bgImage={images.confusion} notes={notes.nine}>
          <Heading size={6} fit textColor="primaryText">confusion</Heading>
        </Slide>

        <Slide transition={["none"]} bgColor="secondary" notes={notes.ten}>
          <CodePane lang="javascript" source={require('raw-loader!../assets/test-example1.code')} />
        </Slide>

        <Slide transition={["none"]} bgColor="secondary" notes={notes.seven}>
          <Heading size={6} fit textColor="primaryText">{"! Maintainable"}</Heading>
        </Slide>
      </Deck>
    );
  }
}
