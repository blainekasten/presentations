import React from "react";
import notes from './notes';
import {
  ComponentPlayground,
  BlockQuote,
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
import images from './images';

const jeststyle = {
  position: 'fixed',
  left: '10%',
  top: '19%',
  transform: 'rotate(-10deg)',
};

const mochastyle = {
  position: 'fixed',
  left: '70%',
  top: '29%',
  transform: 'rotate(20deg)',
};

const avastyle = {
  position: 'fixed',
  left: '30%',
  top: '69%',
  transform: 'rotate(7deg)',
};

const rendererstyle = {
  background: 'white',
  padding: '2.5rem',
  position: 'fixed',
  left: '10%',
  top: '0%',
  transform: 'rotate(20deg)',
};

const rendererstyle2 = {
  background: 'purple',
  color: 'white',
  padding: '2.5rem',
  position: 'fixed',
  left: '10%',
  top: '30%',
  transform: 'rotate(-20deg)',
};

const rendererstyle3 = {
  background: 'darkgreen',
  color: 'blue',
  padding: '2.5rem',
  position: 'fixed',
  left: '10%',
  top: '20%',
  transform: 'rotate(-10deg)',
};

const rendererstyle4 = {
  background: 'black',
  color: 'pink',
  padding: '2.5rem',
  position: 'fixed',
  left: '10%',
  top: '10%',
  transform: 'rotate(10deg)',
};

const assertionstyle = {
  position: 'fixed',
  left: '10%',
  top: '-50%',
  transform: 'rotate(-10deg)',
};

const camerastyle = {
  position: 'fixed',
  left: '70%',
  top: '-29%',
  transform: 'rotate(18deg)',
};

const depthstyle = {
  position: 'fixed',
  left: '25%',
  top: '52%',
  transform: 'rotate(-18deg)',
  background: 'yellow',
  padding: '2rem',
};

const shallowstyle = {
  position: 'fixed',
  left: '25%',
  top: '-100%',
};

export default (
  <Slide bgImage={images.landscape} transition={["fade"]} notes={notes.two}>
    <Heading fit size={1} caps textColor="secondaryText">{"React's Testing Landscape"}</Heading>

    <Appear>
      <Heading size={1} caps textColor="primary">Test Runners</Heading>
    </Appear>

    <Appear>
      <span>
        <span style={jeststyle}><Image src={images.jest} width="50%" /></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={mochastyle}><Image src={images.mocha} width="50%" /></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={avastyle}><Image src={images.ava} width="50%" /></span> </span>
    </Appear>

    <Appear>
      <span>
        <span style={rendererstyle}><Heading size={1}>Test Rendererz</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={rendererstyle2}><Heading size={1}>React Test Renderer</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={rendererstyle3}><Heading size={1}>Enzyme</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={rendererstyle4}><Heading size={1}>React Test Utils</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={rendererstyle}><Heading size={1}>Test Approaches</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={assertionstyle}><Heading size={1} textColor="primary">Assertion</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={camerastyle}><Heading size={1}>📸</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={depthstyle}><Heading size={1}>D E P T H $</Heading></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={shallowstyle}><Image src={images.shallow} width="75%" /></span>
      </span>
    </Appear>

    <Appear>
      <span>
        <span style={shallowstyle}><Image src={images.deep} width="50%" /></span>
      </span>
    </Appear>
  </Slide>
)
