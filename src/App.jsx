import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './App.css';

const App = () => {
  const workouts = [
    { name: 'leg press', completed: true },
    { name: 'push up', completed: false },
    { name: 'squat', completed: true },
  ];

  return (
    <>
      <h1>Workout Routine </h1>
      <ul>
        {workouts.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : 'not-completed'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
