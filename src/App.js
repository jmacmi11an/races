import { useState } from 'react';
import RacesList from './components/RacesList';
import Dropdown from './components/Dropdown';
import Countdown from './components/Countdown';
import "./styles/App.css";

function App() {
  const [raceType, setRaceType] = useState('all');
  const handleSelect = (value) => setRaceType(value);

  return (
    <div className='container'>
      <h1 className='title'>Next Five Races</h1>
      <Countdown/>
      <Dropdown onChange={handleSelect} raceType={raceType}/>
      <RacesList className="races-list" raceType={raceType}/>
    </div>
  );
}

export default App;
