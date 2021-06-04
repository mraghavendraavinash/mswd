

import React from 'react'

const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    );
};



const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};



const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
    );
};



const Total = ({parts}) => {
    return (
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    );
};




const App = () => {
    const course = {
        name: 'half Stack web application development',
        parts: [
            {
            name: 'Introduction to React',
            exercises: 15
            },
            {
            name: 'Fundamentals of React',
            exercises: 15
            },
            {
            name: 'A more complex state, debugging React apps',
            exercises: 8
            },
            {
            name: 'State of a component',
            exercises: 10
            }
        
            
        ]
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};



export default App