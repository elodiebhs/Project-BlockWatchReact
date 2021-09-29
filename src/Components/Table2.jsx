import React, { Component, useState } from 'react'
import '../Components/Table2.css'
import data from "../mock-data.json"
import Form from '../Components/Form'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Table2 = () => {

  //set state using useState Hook with data from mock data
  const [contacts, setContacts] = useState(data)

  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    incident: "",

  })

  //
  const handleAddFormChange = (event) => {
    event.preventDefault();
    //get the name attribut of the input the user has changed
    const fieldName = event.target.getAttribute("name");
    //get the actual value the user added in input
    const fieldValue = event.target.value;
    //copy of the form data
    const newFormData = { ...addFormData };
    //update the object with the new value the user has typed
    newFormData[fieldName] = fieldValue;
    //sent it to state
    setAddFormData(newFormData);
  };





  return (
    <>
      <div className='form-container'> </div>


      <form>
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="Enter a last name..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter the address..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="incident"
          required="required"
          placeholder="Enter details on the incident"
          onChange={handleAddFormChange}
        />
      </form>

      {/* <Box
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


    </Box> */}

      <div className="table-container">
        <table>
          {/* column */}
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Incident</th>
          </tr>
          {/* rows */}
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.FirstName}</td>
                <td>{contact.LastName}</td>
                <td>{contact.Address}</td>
                <td>{contact.Incident}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </>
  )
}

export default Table2
