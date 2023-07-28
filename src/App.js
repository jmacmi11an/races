import { useEffect, useContext, useState } from 'react';
import RacesList from './components/RacesList';
import Dropdown from './components/Dropdown';
import RacesContext from './context/races';
import "./styles/App.css";

function App() {
  const { fetchRaces, date } = useContext(RacesContext);
  const [raceType, setRaceType] = useState('all');

  useEffect(() => {
    fetchRaces()
  }, [fetchRaces]);

  const handleSelect = (value) => setRaceType(value);

  return (
    <div className='container'>
      <h1 className='title'>Next Five Races</h1>
      <h3 className='countdown'>{date.toLocaleTimeString()}</h3>
      <Dropdown onChange={handleSelect} raceType={raceType}/>
      <RacesList className="races-list" raceType={raceType}/>
    </div>
  );
}

export default App;
