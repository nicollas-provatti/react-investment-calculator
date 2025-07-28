export default function UserInput({ investment, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">INITIAL VALUE</label>
          <input
            type="number"
            name="initialInvestment"
            id="initialInvestment"
            value={investment.initialInvestment}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">ANUAL INVESTMENT</label>
          <input
            type="number"
            name="annualInvestment"
            id="annualInvestment"
            value={investment.annualInvestment}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            name="expectedReturn"
            id="expectedReturn"
            value={investment.expectedReturn}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={investment.duration}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
