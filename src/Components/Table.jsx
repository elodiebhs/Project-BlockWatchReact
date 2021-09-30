import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Confirm from './Form/Confirm';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'lastname', label: 'lastName', minWidth: 170 },
  { id: 'address', label: 'address', minWidth: 170 },
  { id: 'date', label: 'date', minWidth: 170 },
  { id: 'incident', label: 'incident', minWidth: 170 },
  
];

function createData(name, lastname, address, date, incident) {
  
  return { name, lastname, address, date, incident };
}

const rows = [
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  createData('Elodie', 'Bouthors', 'Haliburton Street', '10/10/2020', 'xxxxxx example'),
  
  
];

// props has to be declared explicitly in fuctional componenet
export default function ColumnGroupingTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

//  console.log("props update", props);


  // like class consrtuctor  beacuse of empty array
  React.useEffect(() => {
    console.log("child table ue");
    console.log(props.userDetails);
    if(props.userDetails.firstName){
      const {
        firstName, lastName, address, incident
      } = props.userDetails;
      console.log(firstName,lastName);
  
      const newRowItem = createData(firstName, lastName, address,new Date().toLocaleString(), incident)
      setData([...data,newRowItem])
  
    }
  }, [props.userDetails]) // [] is a dependency array, only execute useeffect if any value in dependency array has changed


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}