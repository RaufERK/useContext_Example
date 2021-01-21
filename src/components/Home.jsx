import { useContext } from "react";
import { MyContext } from "../App";

const Home = () => {
  const { text, counter, setCounter } = useContext(MyContext);
  console.log(text);
  return (
    <div className="component">
      <h1>Home</h1>
      {text}
      <button onClick={() => setCounter((pre) => pre + 1)}>-= BUTTON =-</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default Home;
