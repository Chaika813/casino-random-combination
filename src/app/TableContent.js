import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Game from './Game';

 


const useStyles = makeStyles({
  root: {
    marginTop: '3em'
  },
  paper: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableContent(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container className={classes.root}>
      <Game setBalance={props.setBalance} setRows={props.setRows} />
    <Paper className={classes.paper}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="center">Slot 1</TableCell>
              <TableCell align="center">Slot 2</TableCell>
              <TableCell align="center">Slot 3</TableCell>
              <TableCell align="center">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => {
              idx=+1
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell >
                        {props.username + '-' + idx}
                      </TableCell>
                      <TableCell align="center">
                        {row.slotOne}
                      </TableCell >
                      <TableCell align="center">
                        {row.slotTwo}
                      </TableCell>
                      <TableCell align="center">
                        {row.slotThree}
                      </TableCell>
                      <TableCell align="center">
                        {row.time}
                      </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
}
