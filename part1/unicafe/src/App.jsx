/* eslint-disable no-unused-vars */

import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const SubTitle = ({ text }) => (
  <h2>
    <b>{text}</b>{" "}
  </h2>
);

const StatisticLine = ({ text, value }) => (
  <>
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  </>
);

const Statistics = ({ good, neutral, bad, all }) => {
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  const formatNumber = (num) => (num % 1 !== 0 ? num.toFixed(2) : num);

  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <>
      <table>
        <tbody>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={all}></StatisticLine>
        <StatisticLine
          text="average"
          value={formatNumber(average)}
        ></StatisticLine>
        <StatisticLine
          text="positive"
          value={formatNumber(positive) + "%"}
        ></StatisticLine>
        </tbody>
      </table>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;

  return (
    <div>
      <SubTitle text="give feedback" />

      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <SubTitle text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
      ></Statistics>
    </div>
  );
}

export default App;
