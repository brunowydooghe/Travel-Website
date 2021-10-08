import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const NotFound = () => {
    const [state] = useState({
        heading:'Oops, 404',
        paragraph: 'Sorry, the page you are looking for does not exist.',
        image: '/assets/images/404.jpg'
    });
    return(
        <>
        <Helmet>
            <title>Not Found</title>
            <meta name="description" content="Travel With Us not found page"></meta>
        </Helmet>
     <Header heading={state.heading} paragraph={state.paragraph} image={state.image}>
        <Link to="/" className='btn-default'>
            Go to Home Page 
        </Link>
     </Header>
     </>
    );
};

export default NotFound;