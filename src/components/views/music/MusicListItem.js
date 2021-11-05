import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Paper, Typography } from "@mui/material";
import { dateFormat } from "../../../helpers";
import { makeStyles } from "@mui/styles";
import StarIcon from "../../elements/molecules/StarIcon";
import DeleteIcon from "../../elements/molecules/DeleteIcon";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  firstItem: {
    flex: "1 1 auto",
    padding: "16px",
  },
  secondItem: {
    flex: "0 0 auto",
    display: "flex",
    padding: "0 8px 0 0",
  },
});

const MusicListItem = ({ bestList, item, handleDelete, handleToggleBest }) => {
  const classes = useStyles();
  const { t } = useTranslation("musicItem");

  return (
    <Grid item xs={12}>
      <Paper>
        <Box className={classes.container}>
          <Link to={`/music/${item.id}`} className={classes.firstItem}>
            <Typography variant="h2" style={{ fontSize: "1.5rem" }}>
              {item.name}
            </Typography>
            <Typography sx={{ mt: 1 }} color="text.secondary">
              {t("createdAt")}: {dateFormat(item.createdAt)}
            </Typography>
          </Link>

          <Box className={classes.secondItem}>
            <StarIcon
              item={item}
              bestList={bestList}
              handleToggleBest={handleToggleBest}
            />

            <DeleteIcon item={item} handleDelete={handleDelete} />
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

MusicListItem.propTypes = {
  bestList: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggleBest: PropTypes.func.isRequired,
};

export default MusicListItem;
