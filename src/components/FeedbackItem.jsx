import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimesCircle, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feed }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{feed.rating}</div>
            <div className="text-display">{feed.text}</div>
            <button onClick={() => deleteFeedback(feed.id)} className="close">
                <FaTimesCircle color="blue" />
            </button>
            <button className="edit">
                <FaEdit onClick={() => editFeedback(feed)} />
            </button>
        </Card>
    );
}

FeedbackItem.propTypes = {
    feed: PropTypes.object.isRequired,
};

export default FeedbackItem;
