import { useState , useEffect} from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";

const Contact = () => {
    const [state] = useState({
        heading: 'Contact us',
        pageHeading: 'Leave your message !',
        message:'We will answer as soon as poissible !',
    });
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <>
        <Helmet>
            <title>Contact Us</title>
            <meta name="description" content="Travel the world with us"/>
        </Helmet>
        <PageContainer data={state}>
            <ContactForm/>
        </PageContainer>
        </>
    );
};

export default Contact;