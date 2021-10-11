import React, { useState } from 'react'
import './App.css';

const TitleStatistics = () => { return <h1>Statistics</h1> }

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  
  if ( !good && !neutral && !bad ) return (
    <div>
      <p>No feedback given</p>
    </div>
  )

  const calculateTotal = good + neutral + bad
  const calculateAverage = (good - bad) / (good + neutral + bad)
  const calculatePositivePerc = ((good + neutral + bad) > 0 ? ((100 * good) / (good + neutral + bad)): 0) + ' %'

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={calculateTotal}/>
        <StatisticLine text='average' value={calculateAverage}/>
        <StatisticLine text='positive' value={calculatePositivePerc}/>
      </tbody>
    </table>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const divStyle = {
    margin: 20
  };

  return (
    <div style={divStyle}>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />

      <TitleStatistics/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
