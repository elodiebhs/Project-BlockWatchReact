import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function ComposedTextField() {
  const [name, setName] = React.useState('');
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [lastName, setLastName] = React.useState('');
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const [address, setAddress] = React.useState('');
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const [incident, setIncident] = React.useState('');
  const handleChangeIncident = (event) => {
    setIncident(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChangeName}
          label="Name"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={lastName}
          onChange={handleChangeLastName}
          label="LastName"
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Address</InputLabel>
        <Input
          id="component-simple"
          value={address}
          onChange={handleChangeAddress}
          label="address" />
      </FormControl>



      <TextField
        id="filled-multiline-flexible"
        label="Incident"
        multiline
        maxRows={4}
        value={incident}
        onChange={handleChangeIncident}
        variant="filled"
      />

      <Button variant="contained" color="success">
        Submit
      </Button>


    </Box>
  )

}