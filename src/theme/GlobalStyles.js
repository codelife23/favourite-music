import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      body: {
        backgroundColor: "#f4f6f8",
        fontFamily: "Roboto",
      },
      a: {
        textDecoration: "none",
      },
    },
  })
);

export const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
