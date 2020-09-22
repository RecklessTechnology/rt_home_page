import 'aframe';
import 'aframe-particle-system-component';

import {Entity, Scene} from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {
  return (
    <Scene>
      <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: -0.25, y: 0, z: -5}}/>
      <Entity geometry={{primitive: 'box'}} material={{color: 'green'}} position={{x: 0, y: 0, z: -5}}/>
      <Entity geometry={{primitive: 'box'}} material={{color: 'blue'}} position={{x: 0.25, y: 0, z: -5}}/>
      <Entity particle-system={{preset: 'snow'}}/>
      <Entity light={{type: 'point'}}/>
      <Entity text={{value: 'Hello, WebVR!'}}/>
    </Scene>
  );
}

export default App;
