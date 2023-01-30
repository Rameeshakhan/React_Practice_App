import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';
import DynamicTime from './DynamicTime';

function App() {
  return (
   <div>
    <CurrentDate />
    <CurrentTime />
    <DynamicTime/>
   </div>
  );
}

export default App;
