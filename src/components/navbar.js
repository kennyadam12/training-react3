import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default function Navbar(){
    return(
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/interest">Interest</Link></li>
            <li><Link to="/awards">Awards</Link></li>
        </nav>
    )
}