import produce from "immer";
import { ADD_USER_FORM_SUCCESS, APP_INIT, FETCH_USER_SUCCESS, EDIT_USER_FORM_SUCCESS } from "./actionTypes";

const initialState = []

export default (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action; 
    switch(type) {
      case APP_INIT:
        break;
      case ADD_USER_FORM_SUCCESS:
        draft.push(payload);
        break;
      case EDIT_USER_FORM_SUCCESS:
        const { id, userData } = payload;
        draft[id] = userData;
        break;
      case FETCH_USER_SUCCESS:
        draft.push(...payload);
        break;
      default:
        return draft
    }
  })