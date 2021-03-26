import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      bottom: 0,
    },

  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="primary" className={classes.root}>
          <Container maxWidth="md" >
            <Toolbar>
              <Typography variant="body1"  color="inherit">
                © 2021 Chaika813
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}