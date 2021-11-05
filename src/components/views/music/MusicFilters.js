import React from "react";
import PropTypes from "prop-types";
import { VIEW_TYPE } from "../../../helpers/variables";
import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import ReorderIcon from "@mui/icons-material/Reorder";
import AppsIcon from "@mui/icons-material/Apps";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
  musicFilter: {
    padding: "30px 0 14px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MusicFilters = ({ sortType, setSortType, viewType, setViewType }) => {
  const { t } = useTranslation("filter");
  const classes = useStyles();

  return (
    <Box className={`${classes.container} ${classes.musicFilter}`}>
      <Box>
        <ReorderIcon
          onClick={() => setViewType(VIEW_TYPE.LIST)}
          sx={{
            color: viewType === VIEW_TYPE.LIST && "#EEBC1D",
            width: "1.7em",
            height: "1.7em",
            cursor: "pointer",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            borderRadius: "4px",
          }}
        />
        <AppsIcon
          onClick={() => setViewType(VIEW_TYPE.GRID)}
          sx={{
            color: viewType === VIEW_TYPE.GRID && "#EEBC1D",
            width: "1.7em",
            height: "1.7em",
            cursor: "pointer",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            borderRadius: "4px",
            marginLeft: "14px",
          }}
        />
      </Box>

      <Box>
        {t("sort")}{" "}
        <Select
          id="sort-type"
          value={sortType}
          sx={{
            lineHeight: "1.2em",
            ".MuiSelect-select": {
              minHeight: "1.2em !important",
              paddingTop: "10.5px",
              paddingBottom: "10.5px",
            },
          }}
          onChange={(e) => setSortType(e.target.value)}
        >
          <MenuItem value="1">{t("sort1")}</MenuItem>
          <MenuItem value="2">{t("sort2")}</MenuItem>
          <MenuItem value="3">{t("sort3")}</MenuItem>
          <MenuItem value="4">{t("sort4")}</MenuItem>
          <MenuItem value="5">{t("sort5")}</MenuItem>
          <MenuItem value="6">{t("sort6")}</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

MusicFilters.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
  setViewType: PropTypes.func.isRequired,
};

export default MusicFilters;
