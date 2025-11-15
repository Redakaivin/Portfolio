import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slice/themeSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
  },
});
