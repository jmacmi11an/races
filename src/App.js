import { useEffect, useContext, useState } from 'react';
import RacesList from './components/RacesList';
import Dropdown from './components/Dropdown';
import RacesContext from './context/races';

function App() {
  const { fetchRaces, date } = useContext(RacesContext);
  const [raceType, setRaceType] = useState('all');

  useEffect(() => {
    fetchRaces()
  }, [fetchRaces]);

  const handleSelect = (value) => setRaceType(value);

  return (
    <div>
      <h1>Next Five Races</h1>
      <h3>{date.toLocaleTimeString()}</h3>
      <Dropdown onChange={handleSelect} raceType={raceType}/>
      <RacesList raceType={raceType}/>
    </div>
  );
}

export default App;
