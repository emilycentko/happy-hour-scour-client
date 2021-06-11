import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Logo from "./HHSlogo.png"

export const NavBar = (props) => {

   

    return (
        <>
            <div className="header">
                <ul className="navbar">
                    <li className="logo">
                        <img className="navbar__logo" src={Logo} />
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/favorites">Favorites</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/profile">Profile</Link>
                    </li>
                   
                    <div className="navbar__item">
                        {
                            (localStorage.getItem("hhs_token") !== null) ?
                                <li className="navbar__item">
                                    <button className="nav-link fakeLink navbar__item"
                                        onClick={() => {
                                            localStorage.removeItem("hhs_token")
                                            props.history.push({ pathname: "/" })
                                        }}
                                    >Logout</button>
                                </li> :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                        }
                    </div>
                </ul>
                <hr></hr>
            </div>
        </>
    )
}
