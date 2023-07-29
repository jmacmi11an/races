import "../styles/RaceItem.css";

function RaceItem({meetingName, raceName, startingTime}){
    const minutes = Math.floor(startingTime/60)
    const seconds = (startingTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2});

    const isPulse = startingTime > 1
        ? ""
        : "pulse"

    return (
        <div className="race-item">
            <h4 className="race-item-title">{meetingName}</h4>
            <div>- {raceName}</div>
            { startingTime > 1 
                ? <div>Countdown until race {minutes > 0 && minutes}:{seconds}</div>
                : <div className={isPulse}>Race starting...</div>
            } 
        </div>
    )
};

export default RaceItem;