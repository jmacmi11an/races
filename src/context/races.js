import { createContext, useState, useEffect } from "react";
import useRefreshTime from "../hooks/useRefreshTime";
import axios from 'axios';

const RacesContext = createContext();

function Provider({ children }) {
    const [races, setRaces] = useState([]);
    const currentMinute = useRefreshTime(60000)

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10");
                setRaces(response.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [currentMinute])

    return <RacesContext.Provider value={{races}}>
        {children}
    </RacesContext.Provider>
}

export { Provider };
export default RacesContext;
