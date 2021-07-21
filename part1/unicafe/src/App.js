import React, { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Statistic = ({value, text}) => <tr> <td>{text}</td> <td>{value}</td> </tr>

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        Feedbacks have not yet been given
      </div>
    )    
  }
  
  const averageValue = props.average / props.all
  const positivePercentage = [(props.good/props.all)*100, ' %']

  return (
  <table>
    <Statistic value = {props.good} text = 'good' />
    <Statistic value = {props.neutral} text = 'neutral'/>
    <Statistic value = {props.bad} text = 'bad' />
    <Statistic value = {props.all} text = 'all'/>
    <Statistic value = {averageValue} text = 'average'/>
    <Statistic value = {positivePercentage} text = 'positive'/>
  </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} />
    </div>
  )
}

export default App