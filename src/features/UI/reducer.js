import { CLEAR_SEARCH, SET_SEARCH_VALUE } from "features/ManageUser/actionTypes";
import produce from "immer";
import { LOADING_USERS, TOGGLE_SIDEBAR } from "./actionTypes";

const initialState = {
  isSidebarOpen: false,
  isUserLoading: false,
  searchValue: ''
};

export default (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action; 
    switch (type) {
      case TOGGLE_SIDEBAR:
        draft.isSidebarOpen = !state.isSidebarOpen
        break;
      case LOADING_USERS:
        draft.isUserLoading = action.payload;
        break;
      case SET_SEARCH_VALUE:
        draft.searchValue = payload;
        break;
      case CLEAR_SEARCH:
        draft.searchValue = '';
        break;
      default:
        return draft;
    }
  })