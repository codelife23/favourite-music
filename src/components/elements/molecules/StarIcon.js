import React from "react";
import PropTypes from "prop-types";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { default as StarIconMui } from "@mui/icons-material/Star";
import { indexInBestList } from "../../../helpers";
import { IconButton, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const StarIcon = ({ item, bestList, handleToggleBest }) => {
  const { t } = useTranslation();

  const inBestList = indexInBestList(item.id, bestList) > -1;

  return (
    <Tooltip
      title={inBestList ? t("common:removeFromBest") : t("common:addToBest")}
      arrow
      placement="top"
    >
      <IconButton onClick={() => handleToggleBest(item)}>
        {inBestList ? (
          <StarIconMui
            sx={{
              color: "#EEBC1D",
              cursor: "pointer",
            }}
          />
        ) : (
          <StarBorderIcon
            sx={{
              color: "#EEBC1D",
              cursor: "pointer",
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
};

StarIcon.propTypes = {
  item: PropTypes.object.isRequired,
  bestList: PropTypes.array.isRequired,
  handleToggleBest: PropTypes.func.isRequired,
};

export default StarIcon;
