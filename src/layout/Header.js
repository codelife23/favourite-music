import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { INITIAL_LANGUAGE } from "../helpers/variables";

const useStyle = makeStyles(() => ({
  logo: {
    color: "#fff",
  },
}));

const Header = () => {
  const [language, setLanguage] = useState(INITIAL_LANGUAGE);
  const classes = useStyle();
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit" component="div">
          <Link className={classes.logo} to="/">
            Music
          </Link>
        </Typography>

        <Select id="language" value={language} onChange={handleLanguageChange}>
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="pl">PL</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
