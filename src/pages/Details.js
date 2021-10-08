import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS , CITIES} from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/DestinationsInfo";
import Cities from "../components/cities/Cities";
import Footer from "../components/footer/Footer";

const Details = () => { 
    const { destinationsData , dispatch } = useContext(DestinationsContext);
    const {details, filteredCities } = destinationsData;
    window.scrollTo(0,0);
    const {id} = useParams();
    useEffect(() => {
        dispatch({type: DETAILS,  payload: id});
        dispatch({type: CITIES, payload: id});
    },[id]);
    return ( 
    <>
    <Helmet>
        <title>{details.name}</title>
    </Helmet>
    <Header heading={details.name} image={details.bigImage}> </Header>
    <DestinationInfo details={details}/>
    <Cities cities={filteredCities} name={details.name}/>
    <Footer/>
    </>
    );
};
export default Details;