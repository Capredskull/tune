import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		getUserProgress: false,
		updateUserProgress: false,
		likeSongProgress: false,
		deleteUserProgress: false,
		error: false,
	},
	reducers: {
		getUserStart: (state) => {
			state.getUserProgress = true;
		},
		getUserSuccess: (state, action) => {
			state.user = action.payload;
			state.getUserProgress = false;
		},
		getUserFailure: (state) => {
			state.getUserProgress = false;
			state.error = true;
		},

		updateUserStart: (state) => {
			state.updateUserProgress = true;
		},
		updateUserSuccess: (state, action) => {
			state.user = action.payload;
			state.updateUserProgress = false;
		},
		updateUserFailure: (state) => {
			state.updateUserProgress = false;
			state.error = true;
		},

		likeSongStart: (state) => {
			state.likeSongProgress = true;
		},
		likeSongSuccess: (state, action) => {
			const index = state.user.likedSongs.indexOf(action.payload);
			index === -1
				? state.user.likedSongs.push(action.payload)
				: state.user.likedSongs.splice(index, 1);
			state.likeSongProgress = false;
		},
		likeSongFailure: (state) => {
			state.likeSongProgress = false;
			state.error = true;
		},
		deleteUserStart: (state) => {
			state.isFetching = true;
		},
		deleteUserSuccess: (state, action) => {
			state.user = state.user.filter((user) => user._id !== action.payload);
			state.isFetching = false;
		},
		deleteUserFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},
	},
});

export const {
	getUserStart,
	getUserSuccess,
	getUserFailure,
	updateUserStart,
	updateUserSuccess,
	deleteUserStart,
	deleteUserSuccess,
	deleteUserFailure,
	updateUserFailure,
	likeSongStart,
	likeSongSuccess,
	likeSongFailure,
} = userSlice.actions;

export default userSlice.reducer;
