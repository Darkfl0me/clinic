import UserCard from "common/components/UserCard";
import { useState } from "react";
import { Grid, Box, Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_SEARCH, SET_SEARCH_VALUE } from "features/ManageUser/actionTypes";
import { getSearchResult } from "../selector";

const SearchUser = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(getSearchResult);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }
  const handleSearch = (event) => {
    dispatch({ type: SET_SEARCH_VALUE, payload: searchValue });
  }
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_SEARCH });
    }
  }, [])
  return (
    <Box padding={4}>
      <Grid container spacing={2} xs={12} justifyContent="center">
        <Grid item>
          <TextField label="Search User" variant="outlined" name="search" value={searchValue} onChange={handleChange}s />
          <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} xs={12}>
        {users.map((user, index) => (
          <Grid item xs={4} key={index}>
            <UserCard user={user} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SearchUser;