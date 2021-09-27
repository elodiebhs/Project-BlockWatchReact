import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@mui/material/Box';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Box
        sx={{ display: 'inline-block', mx: '10px', transform: 'scale(0.8)' }}
      >


        <AppBar title="Success" />
        <h1>Thank You For Your Submission</h1>
        <p>Your incident is going to be added to our data.</p>
      </Box>

    );
  }
}

export default Success;

