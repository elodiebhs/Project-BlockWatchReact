import React, { Component, useState } from 'react'
import '../Components/Table2.css'
import data from "../mock-data.json"

const Table2 = () => {

  //set state using useState Hook with data from mock data
  const [contacts, setContacts] = useState(data)

    return (
      <div className="table-container">
        <table>
          {/* column */}
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Incident</th>
            </tr>
          {/* rows */}
          <tbody>
            <tr>
              <td>Elodie</td>
              <td>160chemin</td>
              <td>xxxxx</td>
            </tr>
          </tbody>

        </table>

      </div>
    )
}

export default Table2
