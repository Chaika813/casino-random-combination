import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingLeft: '7em'

  },
  accoutAvatar: {
    marginRight: theme.spacing(2),
  },
  userName: {
    marginRight: theme.spacing(2)
  },
  form: {
    flexDirection: 'row'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedBalance = localStorage.getItem(`balance`);
    debugger
    if (loggedInUser && loggedBalance) {
      const foundUser = loggedInUser;
      const foundBalance = JSON.parse(loggedBalance);
      props.setUsername(foundUser);
      props.setBalance(foundBalance); 
      props.setAuth(true);
    }
  }, []);

  const handleChange = (e) => {
    if (!props.auth) {
      props.setAuth(e.target.checked);
      localStorage.setItem('user', props.username);
      localStorage.setItem(`balance`, props.balance)
    } else {
      props.setUsername("Guest");
      props.setAuth(false);
      props.setBalance(10);
      props.setRows([])
      localStorage.clear();
    }

  };

  const handleChangeUsername = (e) => {
    props.setUsername(e.target.value);
  }



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="avatar">
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzsAS2V7F2FBqNUA0XubUMGVggaG-BVDL5g&usqp=CAU" />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Casino
          </Typography>
          <FormGroup className={classes.form}   >
            <FormControlLabel
              control={<Switch checked={props.auth}  onChange={handleChange} aria-label="login switch" />}
              label={props.auth ? 'Logout' : 'Login'}
            />
            {props.auth ? null :
              <div>
                <InputLabel htmlFor="account-name-input">Enter your name</InputLabel>
                <Input id="account-name-input" value={props.username} onChange={handleChangeUsername}/>
              </div>
            }
          </FormGroup>
          {props.auth &&
            (<div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle className={classes.accoutAvatar} />
                <Typography className={classes.userName} >{props.username}</Typography>
                <div>${props.balance.toFixed(2)}</div>
              </IconButton>
            </div>)
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
