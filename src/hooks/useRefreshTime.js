import { useState, useEffect } from "react";


const useRefreshTime = (interval) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    
    const refreshTime = () => setCurrentTime(new Date());

        useEffect(() => {
        const timerId = setInterval(refreshTime, interval);
        return () => {
        clearInterval(timerId);
        };
        }, [interval]);

    return currentTime;
}

export default useRefreshTime
