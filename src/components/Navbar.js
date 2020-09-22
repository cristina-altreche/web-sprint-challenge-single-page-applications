import React from "react";
import { Route, Link } from "react-router-dom";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  order: {
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: "1rem",
  },
  rightNav: {
    display: "flex",
    alignItems: "center",
  },
  links: {
    textDecoration: "none",
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ backgroundColor: "#006491" }}>
          <Toolbar className={classes.root}>
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Link className={classes.links} to="/">
                {" "}
                Dominos
              </Link>
            </Typography>
            <div className={classes.rightNav}>
              <div>
                <Typography variant="b2" className={classes.order}>
                  <Link className={classes.links} to="/Form">
                    {" "}
                    Order Online
                  </Link>
                </Typography>
              </div>
              <IconButton>
                <ShoppingCartIcon
                  className={classes.title}
                  style={{ color: "white" }}
                />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
