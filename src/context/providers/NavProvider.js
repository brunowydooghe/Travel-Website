import { useReducer } from "react";
import Navcontext from "../NavContext";
import NavReducer from "../reducer/NavReducer";
 
const NavProvider = (props) => {
    const [state, dispatch] = useReducer(NavReducer, false);
    return (
        <Navcontext.Provider value={{state, dispatch}}>
            {props.children}
        </Navcontext.Provider>
    );
};
export default NavProvider;