import { LOADING_USERS } from "features/UI/actionTypes";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { ADD_USER_FORM_SUBMITTED, ADD_USER_FORM_SUCCESS, EDIT_USER_FORM_SUBMITTED, EDIT_USER_FORM_SUCCESS, FETCH_USER_REQUESTED, FETCH_USER_SUCCESS } from "./actionTypes";
import { Api } from "./api";

function* addUser(action) {
  const { payload } = action;
  const data = yield call(Api.saveUser, payload);
  yield put({ type: ADD_USER_FORM_SUCCESS, payload: data });
}

function* editUser(action) {
  const { payload } = action;
  yield call(Api.editUser, payload);
  yield put({ type: EDIT_USER_FORM_SUCCESS, payload });
}

function* fetchUser(action) {
  yield put({ type: LOADING_USERS, payload: true });
  const data = yield call(Api.fetchUser);
  yield put({ type: FETCH_USER_SUCCESS, payload: data });
  yield put({ type: LOADING_USERS, payload: false });
}

export function* watchForm() {
  yield all([
    takeLatest(ADD_USER_FORM_SUBMITTED, addUser),
    takeLatest(EDIT_USER_FORM_SUBMITTED, editUser),
    takeLatest(FETCH_USER_REQUESTED, fetchUser),
  ])
}