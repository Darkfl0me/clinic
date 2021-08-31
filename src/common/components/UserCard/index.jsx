import { Paper, Grid, Avatar, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  button: {
    alignSelf: "flex-end"
  }
}))

const UserCard = ({ user, index }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Box padding={2}>
        <Grid container direction="row">
          <Grid item xs={5}>
            <Avatar className={classes.large}>
              {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
            </Avatar>
          </Grid>
          <Grid item xs={7} container justifyContent="flex-start" alignItems="flex-start" direction="column">
            <Typography align="left">{`${user.firstName} ${user.lastName}`}</Typography>
            <Typography align="left">{`${user.permanentAddress ? user.permanentAddress : ''} ${user.permanentCity ? user.permanentCity : ''}`}</Typography>
            <Typography align="left">{`${user.age ? user.age : ''} ${user.gender ? user.gender : ''}`}</Typography>
            <Button variant="contained" component={Link} to={`/edit-user/${index}`} className={classes.button}>Edit</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
};

export default UserCard;