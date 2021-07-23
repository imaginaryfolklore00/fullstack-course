import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const exercises = parts.map(part => part.exercises)
  const sum = exercises.reduce((a, b) => a + b, 0)
  return (
    <p><b>total of {sum} exercises</b></p>
  ) 
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part part={part} />)}
    </div>
  )
}

const Course = ({ course }) => {
  const parts = course.parts
  return (
    <>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    </>
  )
}

export default Course
