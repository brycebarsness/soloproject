import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import setOneJobReducer from "./setOneJob.reducer";
import setOneWallReducer from "./setOneWall.reducer";
import setPanelReducer from "./setPanel.reducer";
import setWallPanelReducer from "./setWallPanel.reducer";
import setWallPanelsPerWallReducer from "./setWallPanelsPerWall.reducer";
import setWallPanelsPerJobReducer from "./setWallPanelsPerJob.reducer";
import setAllJobsReducer from "./setAllJob.reducer";
import setWallsPerJobReducer from "./setWallsPerJob.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  setAllJobsReducer,
  setWallPanelsPerJobReducer,
  setWallPanelsPerWallReducer,
  setPanelReducer,
  setOneWallReducer,
  setWallPanelReducer,
  setWallsPerJobReducer,
  setOneJobReducer,
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
