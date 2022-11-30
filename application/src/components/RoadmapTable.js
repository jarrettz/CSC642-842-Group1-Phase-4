import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(course, units) {
  return { course, units };
}

const rows = [
  createData('CSC210', 3,),
  createData('CSC211', 1,),
  createData('ENG114', 3,),
  createData('MATH226', 4,),
  createData('GE Area A', 3,),
];

export default function RoadmapTable() {
  return (
    <TableContainer component={Paper}
      style={{
        display: 'flex',
        width: 'fit-content',
        alignSelf: 'center'
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell align="right">Units</TableCell>      
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.course}
              </TableCell>
              <TableCell align="right">{row.units}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
