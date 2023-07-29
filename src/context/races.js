import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const RacesContext = createContext();

function Provider({ children }) {
    const [races, setRaces] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const [date, setDate] = useState(new Date());

    const refreshTime = () => setDate(new Date());
    const refetchRaces = () => setRefetch(true);

    useEffect(() => {
        const timerId = setInterval(refreshTime, 1000);
        return () => {
        clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10");
                setRaces(response.data.data);
                setRefetch(false)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [refetch])

    const valuesToShare = {
        races, 
        date,
        refetchRaces
    }

    return <RacesContext.Provider value={valuesToShare}>
        {children}
    </RacesContext.Provider>
}

export { Provider };
export default RacesContext;
