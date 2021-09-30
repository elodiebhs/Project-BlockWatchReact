import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

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

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {rows
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}