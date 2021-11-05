import React from "react";
import PropTypes from "prop-types";
import { default as DeleteIconMui } from "@mui/icons-material/Delete";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid",
  borderColor: (theme) => theme.palette.primary.main,
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
};

const DeleteIcon = ({ item, handleDelete }) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title={t("common:delete")} arrow placement="top">
        <IconButton onClick={handleOpen}>
          <DeleteIconMui
            sx={{
              color: "#f31414",
              cursor: "pointer",
            }}
          />
        </IconButton>
      </Tooltip>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="p">
            {t("musicItem:modal.text")}
          </Typography>

          <Divider sx={{ ml: -2, mr: -2, mt: 2, mb: 2 }} />

          <Grid container gap={2} justifyContent="flex-end">
            <Grid item>
              <Button variant="outlined" onClick={handleClose}>
                {t("common:no")}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  handleDelete(item.id);
                  handleClose();
                }}
              >
                {t("common:yes")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

DeleteIcon.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteIcon;
