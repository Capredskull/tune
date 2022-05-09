import { createSlice } from "@reduxjs/toolkit";

export const audioPlayer = createSlice({
  name: "audioPlayer",
  initialState: {
    currentSong: null,
    nextSong: null,
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setNextSong: (state, action) => {
      state.nextSong = action.payload;
    },
  },
});

export const { setCurrentSong, setNextSong } = audioPlayer.actions;

export default audioPlayer.reducer;
