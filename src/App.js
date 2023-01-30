import './App.css';
import { useState } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';
import DynamicTime from './DynamicTime';
import Time from './Time';

function App() {
  return (
   <div>
    <CurrentDate />
    <CurrentTime />
    {/* <DynamicTime/> */}
    <Time />
   </div>
  );
}

export default App;
