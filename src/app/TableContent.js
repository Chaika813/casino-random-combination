import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Game from './Game';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'slotOne',
    headerName: 'Slot 1',
    type: 'number',
    width: 150,
    sortable: false
  },
  {
    field: 'slotTwo',
    headerName: 'Slot 2',
    type: 'number',
    width: 150,
    sortable: false
  },
  {
    field: 'slotThree',
    headerName: 'Slot 3',
    type: 'number',
    width: 150,
    sortable: false
  },
  {
    field: 'time',
    headerName: 'Time',
    type: 'string',
    width: 150,
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: '3em',
  },
  container: {
    maxHeight: 440,
  },
  table: {
    width: '120vh',
    margin: 'auto',
    marginBottom: '3em'
  }
});

export default function DataTable(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Game setBalance={props.setBalance} setRows={props.setRows} setAuth={props.setAuth} />
      <div >
        <DataGrid className={classes.table} rows={props.rows} autoHeight  disableColumnMenu  pageSize={10} columns={columns} />
      </div>
    </Container>
  );
}

