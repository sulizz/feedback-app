// import FeedbackList from "./FeedbackList";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    //cacluate the average

    // let avg = 0;
    // feedback.forEach((feed) => {
    //     avg = avg + feed.rating;
    // });
    // avg = avg / feedback.length;

    let average =
        feedback.reduce((accumelator, current) => {
            return accumelator + current.rating;
        }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, "");

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

export default FeedbackStats;
