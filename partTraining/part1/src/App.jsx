/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);

function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter} />
      <Button onClick={decreaseByOne} text="Minus" />
      <Button onClick={setToZero} text="0" />
      <Button onClick={increaseByOne} text="Plus" />
    </>
  );
}

export default App;
