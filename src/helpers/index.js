import { SORT_TYPE } from "./variables";

export const getMusicFromLocalStore = () => {
  const saved = localStorage.getItem("music");
  const music = JSON.parse(saved);

  return music;
};

export const indexInBestList = (itemId, bestList) =>
  bestList.findIndex((bestItem) => bestItem.id === itemId);

export const dateFormat = (time) => {
  const date = new Date(time);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();

  if (month < 10) month = `0${month}`;

  if (day < 10) day = `0${day}`;

  if (minutes < 10) minutes = `0${minutes}`;

  if (seconds < 10) seconds = `0${seconds}`;

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

export const sortList = (sortType, musicList) => {
  const sort = SORT_TYPE[sortType];

  const sortedMusicList = musicList.sort((firstEl, secondEl) => {
    const value1 = firstEl[sort.sortBy];
    const value2 = secondEl[sort.sortBy];

    if (sort.sortBy === "createdAt")
      return sort.orderBy === "desc"
        ? new Date(value2) - new Date(value1)
        : new Date(value1) - new Date(value2);

    if (value1 < value2) {
      return sort.orderBy === "desc" ? -1 : 1;
    }
    if (value1 > value2) {
      return sort.orderBy === "asc" ? -1 : 1;
    }

    return 0;
  });

  return sortedMusicList;
};
