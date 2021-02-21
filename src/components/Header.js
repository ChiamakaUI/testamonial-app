import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import { Typography } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import vasiti from "./vasiti.png";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Cormorant Garamond",
  },
  nav: {
    backgroundColor: "#fff",
  },
    title: {
      fontSize: '2rem',
  },
}));

const Header = () => {
  const classes = useStyles()
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <img src={vasiti} alt="brandlogo" />
          <p className={classes.title}>
            About Us
          </p>
{/* 
          <Typography variant="h6" className={classes.title}>
            Stories
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar> 
          </AppBar>
          
    </div>
  );
};

export default Header;


