import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Logo from "./transparent-logo2.png"

export const NavBar = (props) => {

   

    return (
        <>
            <div className="header">
                <div className="nav__bar">
                    <div className="left__navigation">
                        <div className="logo">
                            <img className="navbar__logo" src={Logo} />
                        </div>
                    
                        <div className="navbar__item home__link">
                            <Link className="navbar__link" to="/happyhours">Home</Link>
                        </div>
                    </div>
                    <div className="right__navigation">
                        <div className="navbar__item favorites__link">
                            <Link className="navbar__link" to="/favorites">Favorites</Link>
                        </div>
                        <div className="navbar__item profile__link">
                            <Link className="navbar__link" to="/profile">Profile</Link>
                        </div>
                   
                        <div className="navbar__item">
                            {
                                (localStorage.getItem("hhs_token") !== null) ?
                                    <div className="navbar__item">
                                        <button className="nav-link logout navbar__item"
                                            onClick={() => {
                                                localStorage.removeItem("hhs_token")
                                                props.history.push({ pathname: "/happyhours" })
                                            }}
                                        >Logout</button>
                                    </div> :
                                    <>
                                        <div className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </div>
                                        <div className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </div>
                                    </>
                            }
                        </div>
                
                    </div>
                </div>
            </div>
           
        </>
    )
}
