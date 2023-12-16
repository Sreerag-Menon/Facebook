import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    username: null,
    image: null,
  },
};
export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const { username, image } = action.payload;
      state.user.username = username;
      state.user.image = image;
    },
  },
});
export const { createUser } = userSlice.actions;
export default userSlice.reducer;
