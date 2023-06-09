function RaceItem({meetingName, raceNumber, startingTime}){
    const minutes = Math.floor(startingTime/60)
    const seconds = (startingTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2});
   
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