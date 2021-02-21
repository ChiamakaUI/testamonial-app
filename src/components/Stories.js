import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
// import Link from "@material-ui/core/Link";
import ada from "./ada.jpg";
import { Link } from "react-router-dom";



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

const Stories = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.para}>Our Testimonies</Typography>

      <div>
        <Avatar src={ada} alt="customerImage" className={classes.large} />
        <h3>My name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit harum
          rerum asperiores delectus similique! Ratione vel qui animi quo at nemo
          voluptas ea voluptatem delectus.
        </p>

        
          <Link to="/FormInput">Share your story</Link>
        
        
      </div>
    </div>
  );
};

export default Stories;
