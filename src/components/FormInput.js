import React, { useContext, useState } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: '100%',
    height: '150px',
    margin: "20px",
    padding: "20px",

  },

  formInput: {
    display: 'block',
  },


  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();
  const { addFeedback } = useContext(FeedbackContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addFeedback(name, message);
    setName('');
    setMessage('');
    history.replace('/');
    
}



  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.form}>
        <input
          className={classes.formInput}
          type="text"
          placeholder="Your name"
          value={name}
          variant="outlined"
          margin="normal"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <input
          className={classes.formInput}
          type="textarea"
          placeholder="Your Feedback"
          value={message}
          variant="outlined"
          margin="normal"
          required
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          type="submit"
          value="add Feedback"
          variant="contained"
          color="primary"
          className={classes.submit}
        />
      </div>
    </form>
  );
};

export default SignIn;
