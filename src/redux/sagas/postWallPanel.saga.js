import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* postWallPanel(action) {
  const wallPanel = action.payload;
  try {
    const createdWall_Panel = yield axios.post("/api/wallPanel", wallPanel);
    yield put({ type: "SET_WALL_PANEL", payload: createdWall_Panel.data });
  } catch (err) {
    console.log("error in post wallPanel", err);
  }
}
function* postWallPanelSaga() {
  yield takeLatest("POST_WALL_PANEL", postWallPanel);
}
export default postWallPanelSaga;
