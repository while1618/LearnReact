import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "s1", duration: "3:01" },
    { title: "s2", duration: "3:02" },
    { title: "s3", duration: "3:03" },
    { title: "s4", duration: "3:04" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});