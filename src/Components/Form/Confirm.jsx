import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, address, city, incident }
    } = this.props;
    return (
      <Box
        sx={{ display: 'inline-block', mx: '10px', transform: 'scale(0.8)' }}
      >

        <AppBar title="Confirm User Data" />
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary={address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Incident" secondary={incident} />
          </ListItem>
        </List>
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
        >Confirm & Continue</Button>
      </Box>

    );
  }
}

export default Confirm;
