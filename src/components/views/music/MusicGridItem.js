import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dateFormat } from "../../../helpers";
import StarIcon from "../../elements/molecules/StarIcon";
import DeleteIcon from "../../elements/molecules/DeleteIcon";

const MusicGridItem = ({ bestList, item, handleDelete, handleToggleBest }) => {
  const { t } = useTranslation("musicItem");

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ textAlign: "center" }}>
        <Link to={`/music/${item.id}`}>
          <CardContent>
            <Typography variant="h2" style={{ fontSize: "1.5rem" }}>
              {item.name}
            </Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
              {t("createdAt")}: {dateFormat(item.createdAt)}
            </Typography>
          </CardContent>
        </Link>

        <CardActions sx={{ justifyContent: "center" }}>
          <StarIcon
            item={item}
            bestList={bestList}
            handleToggleBest={handleToggleBest}
          />

          <DeleteIcon item={item} handleDelete={handleDelete} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MusicGridItem;
