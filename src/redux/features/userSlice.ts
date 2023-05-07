import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

const initialState = { value: { state: "" } };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
