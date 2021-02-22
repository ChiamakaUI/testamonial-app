import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Cormorant Garamond",
  },
  para: {
    fontSize: "25px",
    textAlign: "center",
  },
  large: {
    width: '120px',
    height: '120px',
  },
})); 

const FeedbackDetails = ({ feedback }) => {
    const classes = useStyles();
            <p className={classes.para}>Our Testimonies</p>

    
    return (
        <div>
            {/* <h3>{feedback.name}</h3>
            <p>{feedback.message}</p> */}

          <div>
       <div>
         <h3>{feedback.name}</h3>
         <p>{feedback.message}</p>

        </div>
       </div>

        </div>
        
    )
    
    
}

export default FeedbackDetails;
