export default function Bio(): JSX.Element {
  return (
    <div className="bio">
      <div className="bio--text">
        <div className="bio--heading">Who are you?</div><br />
        <div className="bio--summary">
          I'm a recovering accountant learning to code working in Fintech.<br /> 
          Always looking for new problems to solve (or scream quietly about).<br /> 
        </div>
        <div className="bio--heading">What do I work with?</div><br />
        <div className="bio--summary">
          I've been learning:<br />
          <ul className="bio--list">
            <li><strong>JavaScript & TypeScript</strong></li>
            <li><strong>HTML & CSS</strong></li> 
            <li><strong>React & SQL</strong></li>
          </ul>
          I've also got lost in the code woods and <br />stumbled across Python, Swift & C#<br /> 
        </div>
        <div className="bio--heading">What are you working on lately?</div><br />
        <div className="bio--summary">
          I'm completing my code bootcamp with Academy, after which I'll be heading back to work in FinTech.<br />
          On the side, I'm working on some other projects:<br /> 
          <ul className="bio--list">
            <li>An app using combinations to reverse the coin-counting problem</li>
            <li>An app using combinations, recursive functions, and APIs give a user travel options</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
