import RaceItem from "./RaceItem";
import { useContext } from "react";
import RacesContext from "../context/races";
import useRefreshTime from "../hooks/useRefreshTime";

const RacesList = (({ raceType }) => {
  const { races } = useContext(RacesContext);
  const { race_summaries, next_to_go_ids } = races;

  const checkRaceType = (raceType) => {
    const raceTypeMap = {
      greyhound: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      harness: "161d9be2-e909-4326-8c2c-35ed71fb460b",
      horse: "4a2788f8-e825-4d36-9894-efd4baf1cfae"
    };
    return raceTypeMap[raceType] || null;
  };

  const currentSecond = useRefreshTime(1000)
  const filteredRaceIds = next_to_go_ids && next_to_go_ids.filter((raceId) => {
    const race = race_summaries[raceId];
    return (
      race &&
      (currentSecond.getTime() - 60000) / 1000 < race.advertised_start.seconds &&
      (raceType === "all" ||
        checkRaceType(raceType) === race.category_id)
    );
  });
  
  const racesToShow = race_summaries && filteredRaceIds
  .map((raceId) => {
    const { meeting_name, race_name, advertised_start } = race_summaries[raceId];
    return {
      raceId,
      meetingName: meeting_name,
      raceName: race_name,
      startingTime: Math.floor(advertised_start.seconds - currentSecond.getTime() / 1000),
    };
  })
  .sort((raceA, raceB) =>
    raceA.startingTime !== raceB.startingTime
      ? raceA.startingTime - raceB.startingTime // Sort by advertised_start first
      : raceA.meetingName.localeCompare(raceB.meetingName) // If advertised_start is the same, sort alphabetically by meeting_name
  )
  .slice(0, 5)
  .map(({ raceId, meetingName, raceName, startingTime }) => (
    <RaceItem
      key={raceId}
      meetingName={meetingName}
      raceName={raceName}
      startingTime={startingTime}
    />
  ));


    console.log(racesToShow)
  return racesToShow;
});

export default RacesList;
