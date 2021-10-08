import { useContext, useState } from "react";
import DestinationsContext from "../context/DestinationsContext";
import DestinationsList from "./DestinationsList";


const Destinations = () => {
    const { destinationsData: {destinations} } = useContext(DestinationsContext);
    const [state] = useState({
        heading: 'Discover the most engaging places in the world with Us',
        paragraph: 'Travel is art of enjoying life. It makes you feel better and descover new places new people traveling is the art of descovering new things in life !'
    });
    return (
        <div className="destinations">
            <div className="container">
                <div className="row ml-minus-15 mr-minus-15">
                    <div className="col-6 p-15">
                        <h3 className="destinations__heading animation">{state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className="destinations__paragraph animation">
                            {state.paragraph}
                        </p>
                    </div>
                </div>

        <div className="destinations__block">
            <div className="row ml-minus-15 mr-minus-15">
                {destinations.map((destination) => (
                    <DestinationsList destination={destination} key={destination.id}
                    />
                ))}
            </div>
        </div> 
    </div>
</div>
    );
};

export default Destinations;