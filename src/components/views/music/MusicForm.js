import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import formBg from "../../../images/formBg.jpg";

const useStyles = makeStyles(() => ({
  box: {
    textAlign: "center",
    padding: "40px 0",
    background: `url(${formBg}) 50% 50%/cover no-repeat`,
  },
  form: {
    display: "block",
    maxWidth: 700,
    margin: "30px auto 0",
  },
  input: {
    background: "red",
  },
}));

const MusicForm = ({ handleSubmit, handleChange, value }) => {
  const { t } = useTranslation("addForm");
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container>
        <Typography
          variant="h1"
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#EEBC1D",
          }}
        >
          {t("heading")}
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={8} md={10}>
              <TextField
                type="text"
                value={value}
                variant="outlined"
                fullWidth
                size="small"
                sx={{
                  ".MuiInputBase-input": {
                    background: "#f4f6f8",
                    borderRadius: "4px",
                  },
                }}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={4} md={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ padding: "7px 22px" }}
              >
                {t("add")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default MusicForm;
