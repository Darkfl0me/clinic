import { useRef } from "react";
import { AppBar, Toolbar, List, Typography, Drawer, IconButton,Box, CircularProgress, ListItem, CssBaseline } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "features/UI/action";
import useClickOutside from "common/hooks/useClickOutside";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import AddUser from "features/ManageUser/AddUser";
import SearchUser from "features/ManageUser/SearchUser";
import { useEffect } from "react";
import { FETCH_USER_REQUESTED } from "features/ManageUser/actionTypes";
import EditUser from "features/ManageUser/EditUser";


const DefaultLayout = () => {
  const isSidebarOpen = useSelector(state => state.UI.isSidebarOpen);
  const isUserLoading = useSelector(state => state.UI.isUserLoading)
  const dispatch = useDispatch();
  const drawerRef = useRef();
  useEffect(() => {
    dispatch({ type: FETCH_USER_REQUESTED });
  }, []);
  useClickOutside(drawerRef, () => dispatch(toggleSidebar()))
  return (
    <div>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton color="inherit"
            onClick={() => dispatch(toggleSidebar())}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography>MyClinic</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer anchor='left' open={isSidebarOpen}>
          <div ref={drawerRef}>
            <List component="nav">
              <ListItem>
                <Link to="/add-user">
                  <AddIcon />
                  Add User
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/search-user">
                  <SearchIcon />
                  Search
                </Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main>
          <Box mt={10}>
            {isUserLoading ?
              <CircularProgress color="primary" /> :
              <Switch>
                <Route path='/add-user'>
                  <AddUser />
                </Route>
                <Route path='/search-user'>
                  <SearchUser />
                </Route>
                <Route path='/edit-user/:id'>
                  <EditUser />
                </Route>
                <Redirect from="/" to="/search-user"  />
              </Switch>
            }
          </Box>
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout;