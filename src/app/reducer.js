import { combineReducers } from "redux";
import UI from 'features/UI/reducer';
import Users from 'features/ManageUser/reducer'; 

export default combineReducers({
  UI,
  Users
})