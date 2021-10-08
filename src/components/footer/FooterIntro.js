import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const FooterIntro = () => {
    const [state] = useState({
        logo: '/assets/footer/logo.png',
        intro: 'Travel friends is a traveling agency , we arrange tours around the world to the most famous and beautifull countires, since 2010 we provide high services to our vaulable customers.'
    })
    return (
        <div className="footer__intro">
            <div className="footer__intro__img animation">
                <LazyLoadImage src={state.logo} alt="footer logo"/>
            </div>
            <p className="footer__intro__msg animation">{state.intro}</p>
        </div>
    )
}
export default FooterIntro;