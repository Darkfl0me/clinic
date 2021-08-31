import { createSelector } from 'reselect';

const getUsers = (state) => state.Users;
const getSearchKeyword = state => state.UI.searchValue;

export const getSearchResult = createSelector(
  [getUsers, getSearchKeyword],
  (users, searchValue) => {
    return users.filter((user) => {
      return user.mobileNumber.includes(searchValue) || user.firstName.concat(user.lastName).includes(searchValue)
    })
  }
)