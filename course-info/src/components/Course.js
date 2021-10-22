import React from 'react';

const Header = ({name}) => {
    return (
        <h1>{name}</h1>
    );
};

const Content = ({content, exercises}) => {
    return (
        <p>{content} {exercises}</p>
    );
};

const Total = ({total}) => {
    return (
        <p><strong>total of {total} exercises</strong></p>
    );
};

const Course = ({course}) => {

    const total = course.parts.reduce( (acc, curr) => {
        return acc + curr.exercises;
    }, 0);

    return (
        <div>
            <Header name={course.name} />

            { course.parts
                .map( part => <Content key={part.id} content={part.name} exercises={part.exercises} /> )
            }

            <Total total={total} />
        </div>
    );
};

export default Course;