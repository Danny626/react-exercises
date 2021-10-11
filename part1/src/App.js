import './App.css';

const Header = ({course}) => <h1>{course}</h1>;
const Part = ({name, number}) => <p>{name} {number}</p>;
const Total = ({exercises1, exercises2, exercises3}) => <p>Number of excercises {exercises1 + exercises2 + exercises3}</p>;


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part name={part1} number={exercises1} />
      <Part name={part2} number={exercises2} />
      <Part name={part3} number={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
    /* <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div> */
  )
}

export default App;
