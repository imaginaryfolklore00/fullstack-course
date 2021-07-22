import React, { useState } from 'react'

const Header2 = ({text}) => <h2>{text}</h2>

const Button = ({ handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const DisplayAnecdote = (props) => (
  <div>
  {props.anecdotes[props.anecdoteIndex]}
  <br/>
  has {props.points[props.anecdoteIndex]} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const getRandomInt = (val, max) => {
    let randInt = Math.floor(Math.random() * max)
    while (randInt === val) {
      randInt = Math.floor(Math.random() * max)
    }
    return(randInt)
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7))
  console.log(points)

  const RandomAnecdote = () => setSelected(getRandomInt(selected, 6))
  const Vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const maxIndex = points.indexOf(Math.max(...points))

  return (
    <div>
      <Header2 text='Anecdote  of the day' />
      <DisplayAnecdote anecdotes={anecdotes} anecdoteIndex={selected} points={points} />
      <Button handleClick={RandomAnecdote} text='next anecdote' />
      <Button handleClick={Vote} text='vote' />
      <Header2 text='Anecdote with most votes' />
      <DisplayAnecdote anecdotes={anecdotes} anecdoteIndex={maxIndex} points={points} />
    </div>
  )
}

export default App