import React, { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const DisplayStat = ({value, text}) => <p>{text} {value}</p>
const DisplayStatPercent = ({value, text}) => <p>{text} {value} %</p>

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
      <Button handleClick = {handleGood} text = 'good' />
      <Button handleClick = {handleNeutral} text = 'neutral' />
      <Button handleClick = {handleBad} text = 'bad' />

      <h2>statistics</h2>
      <DisplayStat value = {good} text = 'good' />
      <DisplayStat value = {neutral} text = 'neutral'/>
      <DisplayStat value = {bad} text = 'bad' />
      <DisplayStat value = {all} text = 'all'/>
      <DisplayStat value = {average/all} text = 'average'/>
      <DisplayStatPercent value = {(good/all)*100} text = 'positive'/>
    </div>
  )
}

export default App