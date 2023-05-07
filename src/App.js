import { useEffect, useContext } from 'react';
import RacesList from './components/RacesList';
import RacesContext from './context/races';

function App() {
  const { fetchRaces, date } = useContext(RacesContext);

  useEffect(() => {
    fetchRaces()
  }, [fetchRaces]);

  return (
    <div>
      <h1>Next Five Races</h1>
      <h3>{date.toLocaleTimeString()}</h3>
      <RacesList />
    </div>
  );
}

export default App;
