import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getMusicFromLocalStore } from "../../../helpers";
import NotFound from "../not-found/NotFound";

const MusicDetails = () => {
  const [item, setItem] = useState({});
  const { musicId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const initialValue = getMusicFromLocalStore();

    const item =
      initialValue && initialValue.find((initial) => initial.id === musicId);
    item && setItem(item);
    // eslint-disable-next-line
  }, [musicId]);

  return (
    <>
      {Object.keys(item).length ? (
        <>
          <Container sx={{ paddingTop: "30px" }}>
            <Typography variant="h1" style={{ fontSize: "2rem" }}>
              {item.name}
            </Typography>
            <Typography component={"p"}>{t("common:examplePage")}</Typography>
          </Container>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MusicDetails;
