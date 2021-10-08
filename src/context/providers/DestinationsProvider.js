import { useReducer } from "react";
import destinationsContext from "../DestinationsContext";
import destinationsReducer from "../reducer/DestinationsReducer";
import { destinations } from "../../data/destinations";
import Cities from "../../data/cities";

const DestinationsProvider = (props) => {
    const [destinationsData, dispatch] = useReducer(destinationsReducer, {
        destinations,
        details: {},
        cities: Cities,
        filteredCities: [],
    });
    return (
        <destinationsContext.Provider value={{destinationsData, dispatch}}>
            {props.children}
        </destinationsContext.Provider>
    );
};
export default DestinationsProvider;