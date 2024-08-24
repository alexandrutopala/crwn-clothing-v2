import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
    return (
        // a Fragment is an element that won't be rendered.
        // It is used then the top level component is used only for wrapping multiple children components, and it has no other use
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    {/*Link is the anchor tag equivalent in react. It's used to navigate to other routes within the application*/}
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                </div>
            </div>
            {/*Outlets represents the nested component that will be rendered*/}
            {/*This pattern ensures we'll keep the navigation bar on the current and the nested routes*/}
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
