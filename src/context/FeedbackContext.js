import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const FeedbackContext = createContext();

const FeedbackContextProvider = (props) => {
    const [feedbacks, setFeedback] = useState([
        { name: 'Chiamaka', message: 'You guys are amazing', id: 1 },
        { name: 'Chiamaka', message: 'You guys are amazing', id: 2 },
        
    ]);


    const addFeedback = (name, message) => {
        setFeedback([...feedbacks, { name, message, id: uuidv4() }]);
    };

    return (
        <FeedbackContext.Provider value={{feedbacks, addFeedback}}>
            {props.children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContextProvider;
