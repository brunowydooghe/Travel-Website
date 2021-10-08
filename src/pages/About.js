import { useState , useEffect} from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";
const About = () => {
    const [state] = useState({
        heading: 'about us',
        pageHeading: 'World best travel agency since 2010',
        message:'Travel with Us discover with Us',
    });
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Travel the world with us"/>
        </Helmet>
        <PageContainer data={state} >
            <AboutImage/>
        </PageContainer>
        </>
    );
};

export default About;