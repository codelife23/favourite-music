import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 0",
    height: "calc(100vh - 56px - 48px - 60px)",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px - 48px - 60px)",
    },
  },
  text: {
    "&.MuiTypography-root": {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "36px",
      color: theme.palette.grey[700],
      [theme.breakpoints.up("sm")]: {
        fontSize: "56px",
      },
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.wrap}>
        <Typography className={classes.text}>404 Page Not Found</Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
