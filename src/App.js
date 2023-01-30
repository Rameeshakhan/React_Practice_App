import './App.css';
import { useState } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';
import DynamicTime from './DynamicTime';
import "bootstrap/js/dist/base-component";
import Time from './Time';
import Form from './Form';

function App() {
  return (
   <div>
    {/* <CurrentDate /> */}
    {/* <CurrentTime /> */}
    {/* <DynamicTime/> */}
    {/* <Time /> */}
    <Form heading="Enter text For conversion"/>
   </div>
  );
}

export default App;
