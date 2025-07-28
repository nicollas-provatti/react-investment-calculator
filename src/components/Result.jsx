import { formatter } from "../util/investment";

export default function Result({investmentResults, investment}) {
    return (
        <section>
          <table id="result">
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Invest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {investmentResults.map(investmentResult => (
                <tr className="center" key={investmentResult.year}>
                  <td>{investmentResult.year}</td>
                  <td>{formatter.format(investmentResult.valueEndOfYear)}</td>
                  <td>{formatter.format(investmentResult.interest)}</td>
                  <td>{formatter.format(investmentResult.valueEndOfYear - (investment.initialInvestment + (investment.annualInvestment * investmentResult.year)))}</td>
                  <td>{formatter.format(investment.initialInvestment + (investment.annualInvestment * investmentResult.year))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
    )
}