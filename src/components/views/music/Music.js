import React from "react";
import { sortList } from "../../../helpers";
import { VIEW_TYPE } from "../../../helpers/variables";
import MusicForm from "./MusicForm";
import MusicListItem from "./MusicListItem";
import MusicGridItem from "./MusicGridItem";
import MusicFilters from "./MusicFilters";
import { Container, Grid } from "@mui/material";

import useMusic from "./useMusic";

const Music = () => {
  const {
    handleSubmit,
    handleChange,
    handleDelete,
    handleToggleBest,
    bestList,
    musicList,
    musicToAdd,
    sortType,
    setSortType,
    viewType,
    setViewType,
  } = useMusic();

  return (
    <>
      <MusicForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={musicToAdd}
      />

      <Container>
        <MusicFilters
          sortType={sortType}
          setSortType={setSortType}
          viewType={viewType}
          setViewType={setViewType}
        />

        <Grid container spacing={2}>
          {sortList(sortType, musicList).map((item) => (
            <React.Fragment key={item.id}>
              {viewType === VIEW_TYPE.LIST ? (
                <MusicListItem
                  bestList={bestList}
                  item={item}
                  handleDelete={handleDelete}
                  handleToggleBest={handleToggleBest}
                />
              ) : (
                <MusicGridItem
                  bestList={bestList}
                  item={item}
                  handleDelete={handleDelete}
                  handleToggleBest={handleToggleBest}
                />
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Music;
