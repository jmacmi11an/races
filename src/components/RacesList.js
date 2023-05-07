import RaceItem from "./RaceItem";
import { useContext } from "react";
import RacesContext from "../context/races";

function RacesList(){
    const { races, date } = useContext(RacesContext)
    const { race_summaries, next_to_go_ids } = races;

    return race_summaries &&
        next_to_go_ids
            .filter((raceId) => {
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
                        raceStart={new Date(advertised_start.seconds * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                    />
                )
            })
}

export default RacesList