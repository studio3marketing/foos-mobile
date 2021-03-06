import { combineReducers } from "redux";
import nav from "./nav_reducer";
import auth from "./auth_reducer";
import games from "./games_reducer";
import user from "./user_reducer";
import teams from "./teams_reducer";
import errors from "./errors_reducer";
import success from "./success_reducer";

const rootReducer = combineReducers({
  nav,
  auth,
  user,
  teams,
  games,
  errors,
  success
});

export default rootReducer;
