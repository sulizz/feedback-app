import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

//create the context
const FeedbackContext = createContext();

//provier
//in order for components to get access to state in context

export const FeedbackProvier = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackedit, setFeedbackedit] = useState({
        item: {},
        edit: false,
    });

    //add feedback
    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4();
    //     setFeedback([newFeedback, ...feedback]);
    // };

    //delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(
                feedback.filter((item) => {
                    return item.id !== id;
                })
            );
        }
    };

    // update feedback
    const updateFeedback = (updatedId, updatedItem) => {
        setFeedback(
            feedback.map((item) => {
                if (item.id === updatedId) {
                    return { ...item, ...updatedItem };
                } else {
                    return item;
                }
            })
        );
    };

    //set feedback to be updated
    const editFeedback = (item) => {
        setFeedbackedit({
            item: item,
            edit: true,
        });
    };

    //children are all of our components that need access to our context
    //any values that we want to pass like state or function
    return (
        <FeedbackContext.Provider
            value={{
                feedback: feedback,
                feedbackedit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
