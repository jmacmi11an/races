import RaceItem from "./RaceItem";
import { useContext } from "react";
import RacesContext from "../context/races";

function RacesList(){
    const { races, date } = useContext(RacesContext)
    const { race_summaries, next_to_go_ids } = races;

    return race_summaries &&
        next_to_go_ids
            .filter((raceId) => {
                console.log(race_summaries[raceId].advertised_start.seconds - date.getTime()/1000)
                return ((date.getTime() - 60000 )/ 1000) < race_summaries[raceId].advertised_start.seconds
            })
            .slice(0, 5)
            .map((raceId) => {
                const race = race_summaries[raceId];
                const { meeting_name, race_number, advertised_start } = race;
                return ( 
                    <RaceItem 
                        key={raceId} 
                        meetingName={meeting_name} 
                        raceNumber={race_number} 
                        startingTime={Math.floor(advertised_start.seconds - date.getTime()/1000)}
                    />
                )
            })
}

export default RacesList