import { Grid, Paper, TextField, Box, FormLabel, RadioGroup, Radio, FormControlLabel, MenuItem, FormControl, Select, Divider, Typography, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";;

const useStyles = makeStyles(theme => ({
  paper: {
    height: "100%"
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: "0 auto"
  },
  select: {
    minWidth: '150px'
  },
}))

const UserForm = ({ formData = {}, handleChange, handleSubmit, label = 'Add' }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Grid container justifyContent="flex-start" xs={12}>
              <Grid item xs={12}>
                <Avatar variant="circle" className={classes.large} />
                <Typography>Patient Name</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper>
            <Box padding={2}>
              <form onSubmit={handleSubmit}>
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item xs={12} justifyContent="flex-start">
                    <Typography color="primary" align="left">Personal details</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <FormLabel>Patient Name</FormLabel>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField name="firstName" variant="filled" required label="First Name" value={formData.firstName} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField name="lastName" variant="filled" label="Last Name" required value={formData.lastName} onChange={handleChange} />
                  </Grid>
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Grid item xs={6}>
                    <Grid container direction="row" spacing={2} alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Select Gender</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <RadioGroup name="gender" row value={formData.gender} onChange={handleChange}>
                          <FormControlLabel value="male"  label="Male" control={<Radio />}/>
                          <FormControlLabel value="female" label="Female"control={<Radio />} />
                          <FormControlLabel value="other" label="Other" control={<Radio />}/>
                        </RadioGroup>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2} alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Marital Status</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <RadioGroup name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} row>
                          <FormControlLabel value="Married"  label="Married" control={<Radio />}/>
                          <FormControlLabel value="Unmarried" label="Unmarried" control={<Radio />} />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
                      <Grid item xs={4}>
                        <FormLabel>Mobile Number</FormLabel>
                      </Grid>
                      <Grid item container xs={8} justifyContent="flex-start">
                        <TextField name="mobileNumber" value={formData.mobileNumber} required variant="filled" onChange={handleChange} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
                      <Grid item xs={4}>
                        <FormLabel>Date of birth</FormLabel>
                      </Grid>
                      <Grid item container xs={8} justifyContent="flex-start">
                        <TextField type="date" name="dob" variant="filled" value={formData.dob} onChange={handleChange} />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
                      <Grid item xs={4}>
                        <FormLabel>Occupation</FormLabel>
                      </Grid>
                      <Grid item container xs={8} justifyContent="flex-start">
                        <FormControl variant="filled">
                          <Select
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            className={classes.select}
                          >
                            <MenuItem value="Professor">Professor</MenuItem>
                            <MenuItem value="Engineer">Engineer</MenuItem>
                            <MenuItem value="Designer">Designer</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
                      <Grid item xs={4}>
                        <FormLabel>Email</FormLabel>
                      </Grid>
                      <Grid item container xs={8} justifyContent="flex-start">
                        <TextField name="email" onChange={handleChange} variant="filled" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" xs={12}>
                  <Grid item>
                    <Typography color="primary">Communication Details</Typography>
                  </Grid>
                  <Divider />
                </Grid>
                <Grid container direction="row" spacing={2}>
                  <Grid item container xs={6}>
                    <Grid item xs={4}>
                      <FormLabel>Temporary Address</FormLabel>
                    </Grid>
                    <Grid item xs={8} container direction="column" alignItems="flex-start" spacing={2}>
                      <Grid item>
                        <TextField name="tempAddress" value={formData.tempAddress} onChange={handleChange} variant="filled" />
                      </Grid>
                      <Grid item>
                        <TextField name="tempCity" value={formData.tempCity} onChange={handleChange} variant="filled" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item container xs={6}>
                    <Grid item xs={4}>
                      <FormLabel>Permanent Address</FormLabel>
                    </Grid>
                    <Grid item xs={8} container direction="column" alignItems="flex-start" spacing={2}>
                      <Grid item>
                        <TextField name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} variant="filled" />
                      </Grid>
                      <Grid item>
                        <TextField name="permanentCity" value={formData.permanentCity} onChange={handleChange} variant="filled" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button variant="contained" color="primary" type="submit">{ label }</Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserForm;