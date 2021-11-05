import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getMusicFromLocalStore, indexInBestList } from "../../../helpers";
import { VIEW_TYPE } from "../../../helpers/variables";

const useMusic = () => {
  const [musicList, setMusicList] = useState([]);
  const [musicToAdd, setMusicToAdd] = useState("");
  const [bestList, setBestList] = useState([]);
  const [sortType, setSortType] = useState("1");
  const [viewType, setViewType] = useState(VIEW_TYPE.LIST);

  const handleChange = (e) => {
    setMusicToAdd(e.target.value);
  };

  // add album to music list
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!musicToAdd) return;

    const listItemToAdd = {
      id: uuidv4(),
      name: musicToAdd,
      createdAt: new Date(),
    };

    setMusicList((state) => [...state, listItemToAdd]);
    setMusicToAdd("");
  };

  // remove album from music list
  const handleDelete = (id) => {
    if (!musicList.length) return;

    const indexInBest = indexInBestList(id, bestList);

    if (indexInBest > -1) {
      // Delete item from bestList
      const newBestList = bestList.filter((_, index) => index !== indexInBest);
      setBestList(newBestList);
    }

    // Delete item from musicList
    const newMusicList = musicList.filter((item) => item.id !== id);
    setMusicList(newMusicList);
  };

  // add/remove from best of the best list
  const handleToggleBest = (musicItem) => {
    const indexInBest = indexInBestList(musicItem.id, bestList);

    if (indexInBest < 0) {
      // Add item to bestList
      setBestList((state) => [...state, musicItem]);
      return;
    }

    // Delete item from bestList
    const newBestList = bestList.filter((_, index) => index !== indexInBest);

    // olso we can use splice, just for example
    // const res = [
    //   ...[...bestList].splice(0, indexInBest),
    //   ...[...bestList].splice(indexInBest + 1, bestList.length),
    // ];

    setBestList(newBestList);
  };

  useEffect(() => {
    if (!musicList.length) {
      const initialValue = getMusicFromLocalStore();
      initialValue && setMusicList(initialValue);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("music", JSON.stringify(musicList));
    // eslint-disable-next-line
  }, [JSON.stringify(musicList)]);

  return {
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
  };
};

export default useMusic;
