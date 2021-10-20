import React, { useState } from 'react'


const NextButton = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ( {text} ) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{text}</p>
    </div>
  )
}

const Votes = ({quantity}) => {
  return (
    <p>has {quantity} votes</p>
  )
}

const VoteButton = ({handleClick}) => {
  return (
    <button onClick={handleClick}>vote</button>
  )
}

const MostVoted = ({anecdote}) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{ anecdote }</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
  /* const points = [0, 0, 0, 0, 0, 0, 0]; */
   
  const [selected, setSelected] = useState(0);
  const [counters, setCounters] = useState(points);

  const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;;
  };

  const handleVote = (selected) => {
    const copy = { ...counters };
    copy[selected] += 1;
    setCounters(copy);
  };

  const getMostVoted = () => {
    const arr = Object.values(counters);
    const max = Math.max(...arr);
    const result = arr.indexOf(max);

    return anecdotes[result];
  };

  return (
    <div>
      <Anecdote text={anecdotes[selected]} />
      <Votes quantity={ counters[selected] }/>

      <VoteButton handleClick={ () =>  handleVote(selected) } />
      <NextButton text='next anecdote' handleClick={ () => setSelected( getRandomNumber(7, 0) ) } />

      <MostVoted anecdote={getMostVoted()} />
    </div>
  )
}

export default App;
