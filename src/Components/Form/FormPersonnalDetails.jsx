import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';


export class FormPersonnalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (

      <Box
        sx={{ display: 'inline-block', mx: '10px', transform: 'scale(0.8)' }}
      >
        <AppBar title="Enter Personal Details" />
        <TextField
          placeholder="Enter Your Address"
          label="Address"
          onChange={handleChange('address')}
          defaultValue={values.address}
          margin="normal"
          fullWidth
        />
        <br />
        
        <br />
        <TextField
          placeholder="Enter Details of the event"
          label="Incident"
          onChange={handleChange('incident')}
          defaultValue={values.incident}
          margin="normal"
          fullWidth
        />
        <br />

        <Button
          color="secondary"
          variant="contained"
          onClick={this.back}
        >Back</Button>

        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >Continue</Button>
      </Box>

    );
  }
}

export default FormPersonnalDetails;
