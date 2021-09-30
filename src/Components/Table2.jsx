import React, { Component, useState } from 'react'
import '../Components/Table2.css';
import data from "../mock-data.json";


const Table2 = () => {

  //set state using useState Hook with data from mock data
  const [contacts, setContacts] = useState(data)



  //store data in an object
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    incident: "",

  })


  const handleAddFormChange = (event) => {
    //preventDefault event cancelts the event if it is cancelable
    event.preventDefault();
    //get the name attribut of the input the user has changed
    const fieldName = event.target.getAttribute('name');
    //get the actual value the user added in input
    const fieldValue = event.target.value;
    //copy of the form data
    const newFormData = { ...addFormData };
    //update the object with the new value the user has typed
    newFormData[fieldName] = fieldValue;
    //sent it to state
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      address: addFormData.address,
      incident: addFormData.incident,

    };
    //create a new contact array to avoid mutating th state
    //copy current contact and add new contact object we created
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };



  return (
  
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
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.address}</td>
              <td>{contact.incident}</td>
            </tr>
          ))}

        </tbody>

      </table>


      <form onSubmit={handleAddFormSubmit}>
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

        <button>Add</button>
      </form>
    </div>

  )
}

export default Table2
