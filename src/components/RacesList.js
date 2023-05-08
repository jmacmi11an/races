import RaceItem from "./RaceItem";
import { useContext } from "react";
import RacesContext from "../context/races";

function RacesList({raceType}){
    const { races, date } = useContext(RacesContext)
    const { race_summaries, next_to_go_ids } = races;

    const checkRaceType = (raceType) => {
        if (raceType === 'greyhound'){
            return '9daef0d7-bf3c-4f50-921d-8e818c60fe61'
        }
        if (raceType === 'harness'){
            return '161d9be2-e909-4326-8c2c-35ed71fb460b'
        }
        if (raceType === 'horse') {
            return '4a2788f8-e825-4d36-9894-efd4baf1cfae'
        }
    }


    return race_summaries &&
        next_to_go_ids
            .filter((raceId) => {
                return ((date.getTime() - 60000 )/ 1000) < race_summaries[raceId].advertised_start.seconds
            })
            .filter((raceId) => {
                const currentRaceType = race_summaries[raceId].category_id
                if (raceType === 'all') return true
                return checkRaceType(raceType) === currentRaceType
            })
            .slice(0, 5)
            .map((raceId) => {
                const race = race_summaries[raceId];
                const { meeting_name, race_number, advertised_start, category_id } = race;
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