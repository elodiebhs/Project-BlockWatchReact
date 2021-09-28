import React, { Component } from 'react'
import '../Components/Table2.css'

const Table2 = () => {


    return (
      <div className="table-container">
        <table>
          {/* column */}
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Adress</th>
              <th>Incident</th>
            </tr>
          {/* rows */}
          <tbody>
            <tr>
              <td>Elodie</td>
              <td>Bouthors</td>
              <td>160chemin</td>
              <td>xxxxx</td>
            </tr>
          </tbody>

        </table>

      </div>
    )
}

export default Table2
