import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Bekfles - Ako humrem danas bebo", duration: "2:48" },
    { title: "Bekfles - Debil", duration: "2:31" },
    { title: "Bekfles - Bicu tvoj", duration: "2:50" },
    { title: "Glavata Majmuncina - Jaguar Bog", duration: "1:18" }
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
