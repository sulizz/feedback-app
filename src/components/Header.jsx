import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header() {
    const headerStyle = {
        backgroundColor: "blue",
        color: "red",
    };
    return (
        <header style={headerStyle}>
            <div className="container">
                <Link to="/">
                    <h1>Feedback Application</h1>
                </Link>
            </div>
        </header>
    );
}

//default prop
//if a props is passed then it will get the props from the passed prop
//else the default props will be passed.

Header.defaultProps = {
    text: "hello i am a default prop",
};

Header.propTypes = {
    text: PropTypes.string,
};

export default Header;
