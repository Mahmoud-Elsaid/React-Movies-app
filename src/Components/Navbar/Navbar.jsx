import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3  ">
                <div className="container-fluid">
                    <a className="fw-bold pb-3 navbar-brand" href="#">Noxe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="text-white fa-solid fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            {props.userData?
                            <>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Movies">Movie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Tvshows">Tv shwo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="People">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="About">About</Link>
                            </li>

                            
                                
                            
                            
                            </>

                            
                            :""
                            }

                            
                            
                        </ul>

                        {props.userData ? <h3 className="welcome fw-bold">Hello {(props.userData.sub)}</h3> :""}

                        <ul className=" ms-auto d-flex list-unstyled navbar-nav  mb-2 mb-lg-0">

                            
                            {props.userData?
                            <>
                                
                                <div className=" mt-2 d-flex align-items-center nav-icons">
                                    <Link target="_blank" to="https://www.linkedin.com/in/mahmoud-elsaid-a55a29239/"><i className="social-icon mx-3 text-white fa-brands fa-linkedin"></i></Link>
                                    <Link target="_blank" to="https://github.com/Mahmoud-Elsaid"><i className="social-icon mx-3 text-white fa-brands fa-github"></i></Link>
                                    <Link target="_blank" to="https://developer.themoviedb.org/reference/trending-people"><i className="social-icon mx-3 text-white fa-brands fa-youtube"></i></Link>
                                
                                    
                                </div>
                                <li className="nav-item mx-3">
                                    <span onClick={()=>props.logout()} className="logout nav-link" to="Login">Logout</span>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link" to="Login">Login</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link" to="Register">Register</Link>
                                </li>
                            </>
                            }


                            
                            
                            
                        </ul>
        
                    </div>
                </div>
            </nav>
        </>
    )
}







