function RaceItem({meetingName, raceNumber, startingTime}){
    const minutes = Math.floor(startingTime/60)
    const seconds = startingTime - (minutes * 60);
   
    return (
        <div>
            <h4>{meetingName}</h4>
            <div>venue: {raceNumber}</div>
            { startingTime > 1 
                ? <div>Time until start {minutes > 0 && minutes}:{seconds}</div>
                : <div>Race starting...</div>
            } 
        </div>
    )
};

export default RaceItem;