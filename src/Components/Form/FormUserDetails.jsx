import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (


      <Box
        sx={{ display: 'inline-block', mx: '10px', transform: 'scale(0.8)' }}
      >
        <AppBar title="Enter User Details" />
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          margin="normal"
          fullWidth
        />

        <br />
        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >Continue</Button>
      </Box>
    );
  }
}

export default FormUserDetails;