import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const { addFeedback, feedbackedit, updateFeedback } =
        useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackedit.edit) {
            setReview(feedbackedit.item.text);
            setRating(feedbackedit.item.rating);
            setbtnDisabled(false);
        }
    }, [feedbackedit]);

    const handleTextChange = (e) => {
        // {target: {value}}
        if (e.target.value === "") {
            setbtnDisabled(true);
            setMessage(null);
        } else if (e.target.value !== "" && review.trim().length < 10) {
            setbtnDisabled(true);
            setMessage(
                `Message should be 10 characters long ${e.target.value.length} `
            );
        } else {
            setMessage(null);
            setbtnDisabled(false);
        }

        setReview(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review.trim().length > 10) {
            const newFeedback = {
                text: review,
                rating, //short form rating:rating
            };

            if (feedbackedit.edit) {
                updateFeedback(feedbackedit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            setReview("");
            setRating(10);
            setbtnDisabled(true);
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect
                    select={(rating) => {
                        setRating(rating);
                    }}
                />
                <div className="input-group">
                    <input
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Write a review..."
                        value={review}
                    />
                    <Button
                        type="submit"
                        version="secondary"
                        isDisabled={btnDisabled}
                    >
                        Submit
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
