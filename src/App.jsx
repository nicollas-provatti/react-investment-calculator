import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
import Result from "./components/Result";

const INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investment, setInvestment] = useState(INVESTMENT);

  const investmentResults = calculateInvestmentResults({
    initialInvestment: Number(investment.initialInvestment),
    annualInvestment: Number(investment.annualInvestment),
    expectedReturn: Number(investment.expectedReturn),
    duration: Number(investment.duration),
  });

  function handleChangeInput(key, value) {
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [key]: value,
      };
    });
  }

  const inputIsValid = investment.duration >= 1;

  return (
    <>
      <Header />
      <main>
        <UserInput investment={investment} onChange={handleChangeInput} />
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero</p>
        )}
        {inputIsValid && (
          <Result
            investmentResults={investmentResults}
            investment={investment}
          />
        )}
      </main>
    </>
  );
}

export default App;
