import Card from "../shared/Card";
import { Link } from "react-router-dom";
function About() {
    return (
        <Card>
            <h4>This is a feedback application using react</h4>
            <Link to="/">Back to home</Link>
        </Card>
    );
}

export default About;
