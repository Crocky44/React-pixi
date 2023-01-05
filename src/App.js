import './App.css';
import {useReducer, useTick, useRef} from 'react';
import {Sprite, Stage, Container} from '@pixi/react-pixi';
import * as PIXI from 'pixi.js';

const App = () => {
  return(
    <div className="App">
  <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
  <Container position={[150, 150]}>
    <Sprite
      anchor={0.5}
      x={-75}
      y={-75}
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
    />
    <Sprite
      anchor={0.5}
      x={0}
      y={0}
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
    />
    <Sprite
      anchor={0.5}
      x={75}
      y={75}
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
    />
  </Container>
</Stage>
</div>)};

const Bibi = () => {

  return (
  <p className="small">

    Bonjour
  </p>)
};



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}
*/
export default App;
