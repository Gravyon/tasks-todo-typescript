import React from 'react';
import './App.css';
import InputField from './components/InputField';

// React.FC = functional component
const App: React.FC = () => {
  return (<div className="App">
  <span className="heading">Taskify</span>
  <InputField/>
  </div> 
  );
};
// hello
export default App;
  