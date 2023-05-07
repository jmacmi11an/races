function RaceItem({meetingName, raceNumber, raceStart}){
    return (
        <div>
            <h4>{meetingName}</h4>
            <div>venue: {raceNumber}</div>
            <div>advertised start {raceStart}</div>
        </div>
    )
};

export default RaceItem;