import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
// to link the pages do not use href because it
// refreshes the client side and we want it to be done
// immediately on the client side

function AboutIconLink() {
    return (
        <div className="about-link">
            <Link to="/about">
                <FaQuestion size={30} />
            </Link>
        </div>
    );
}

export default AboutIconLink;
