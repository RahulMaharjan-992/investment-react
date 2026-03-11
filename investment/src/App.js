import { calculateInvestmentResults, formatter } from "./util/investment.js";
import { useState } from "react";
import Header from "./components/header";
import HeaderImg from "./components/headerImg.jsx";
import Income from "./components/income.jsx";
import Time from "./components/time.jsx";
import Interest from "./components/interest.jsx";

export default function App() {
  const [result, setResult] = useState([]);
  const [income, setIncome] = useState(0);
  const [time, setTime] = useState(0);
  const [interest, setInterest] = useState(0);

  function handleCalculate() {
    const data = calculateInvestmentResults({
      initialInvestment: income,
      annualInvestment: income,
      expectedReturn: interest,
      duration: time,
    });
    setResult(data);
  }
  return (
    <>
      <div id="header">
        <HeaderImg />
        <h2>
          <Header />
        </h2>
      </div>
      <div id="user-input">
        <Income value={income} setValue={setIncome} />
        <Time value={time} setValue={setTime} />
        <Interest value={interest} setValue={setInterest} />
        <button onClick={handleCalculate}>calculate</button>
      </div>
      <div id="result .center">
        {result.map((item) => (
          <div id="result thead" key={item.year}>
            Year: {item.year}, Value: {formatter.format(item.valueEndOfYear)},
            Interest: {formatter.format(item.interest)}
          </div>
        ))}
      </div>
    </>
  );
}
