import About from "./components/About";
import React from "react";
import { useState } from "react";
import Home from "./components/Home";

const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem assumenda in impedit excepturi cum commodi earum quis, veritatis molestiae esse sint, rerum dolores aspernatur soluta obcaecati alias labore mollitia illum?";

export const MyContext = React.createContext(null);

function App() {
  const [counter, setCounter] = useState(88);
  const mySetCounter = () => {
    setCounter((pre) => pre + 1);
    setCounter((pre) => pre + 1);
    setCounter((pre) => pre + 1);
  };
  return (
    <div className="component">
      <h1>APP</h1>
      <h2>{counter}</h2>
      {text}
      <MyContext.Provider value={{ text, counter, setCounter }}>
        <About />
      </MyContext.Provider>

      <button onClick={mySetCounter}>INCREMENT</button>
      {/* <Home /> */}
    </div>
  );
}

export default App;
