import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext);
    if (!feedback || feedback.length === 0) {
        return <p>No FeedBack Yet</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((feed) => {
                return <FeedbackItem feed={feed} key={feed.id} />;
            })}
        </div>
    );
}

export default FeedbackList;
