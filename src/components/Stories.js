import React, { useContext } from "react";
import { FeedbackContext } from '../context/FeedbackContext';
import FeedbackDetails from './FeedbackDetails';
import { Link } from "react-router-dom";






const Stories = () => {
 
  const { feedbacks } = useContext(FeedbackContext);


  return (
    <div>
      {feedbacks.map((feedback) => {
        return <FeedbackDetails feedback={feedback} key={feedback.id} />;
      })}
      <Link to="/FormInput">Share your story</Link>
    </div>
  );
};

export default Stories;
