import { makeStyles } from "@mui/styles";
import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: "56px",
    paddingBottom: "60px",
    minHeight: "calc(100vh - 48px)",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "64px",
    },
  },
}));

const AppTemplate = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.wrapper}>{children}</div>
      <Footer />
    </>
  );
};

export default AppTemplate;
