import { useState , useContext} from "react";
import ServicesLeft from "./ServicesLeft";
import ServicesList from "./ServicesList";
import SharedContext from "../../context/SharedContext";


const Services = () => {
    const {sharedData: {servicesData} } = useContext(SharedContext);
    console.log(servicesData);
    const [state] = useState ({
        heading: 'Whu customers love traveling because we provide unique experiences',
        subHeading: 'Our aim is to provide profesional and unique services to customers, and we have provided high quality services to our customers thats whu they love traveling' ,
    });
    return (
        <div className="services">
            <div className="services__contents"> 
                <div className="container">
                    <div className="row ml-minus-15 mr-minus-15 services__contents__container">
                        <div className="col-6 p-15">
                            <ServicesLeft heading={state.heading} subHeading={state.subHeading}/>
                        </div>
                        <div className="col-6 p-15">
                            <ServicesList services={servicesData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Services;