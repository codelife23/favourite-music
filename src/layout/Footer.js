import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "48px",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.grey[400],
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("sm")]: {
      padding: "0 24px",
    },
  },
}));

const Footer = () => {
  const { t } = useTranslation("footer");
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box>
        &copy; {new Date().getFullYear()}. {t("text")}
      </Box>
    </footer>
  );
};

export default Footer;
