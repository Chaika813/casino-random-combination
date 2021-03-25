import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { TimelineSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '40%',
        height: '55%',
    },
    button: {
        margin: theme.spacing(2),
        color: 'blue',
    },
    slot: {
        width: '20%',
        textAlign: 'center'
    }
}));

export default function Game(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [slots, setSlots] = useState({ firstSlot: null, secondSlot: null, thirdSlot: null });
    const [row, setRow] = useState({
        slotOne: null,
        slotTwo: null,
        slotThree: null,
        time: ''
    })

    const handleOpen = () => {
        setOpen(true);
        props.setAuth(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSlots({ firstSlot: null, secondSlot: null, thirdSlot: null })
    };

    const debugSlots = () => {
        setSlots({ firstSlot: 7, secondSlot: 7, thirdSlot: 7 })
    }

    const addNewResult = () => {
        debugger
        props.setRows(prevState => [...prevState, row])
    }

    const playSlots = (e) => {
        props.setBalance(prevState => prevState - 1);
        const firstNum = Math.floor(Math.random() * 9);
        const secondNum = Math.floor(Math.random() * 9);
        const thirdNum = Math.floor(Math.random() * 9);
        setSlots({ firstSlot: firstNum, secondSlot: secondNum, thirdSlot: thirdNum });
        if (slots.firstSlot === slots.secondSlot || slots.secondSlot === slots.thirdSlot) {
            props.setBalance(prevState => prevState + 0.5);
        } else if (slots.firstSlot === slots.secondSlot && slots.firstSlot === slots.thirdSlot) {
            props.setBalance(prevState => prevState + 5);
        } else if (slots.firstSlot === 7 && slots.secondSlot === 7 && slots.thirdSlot) {
            props.setBalance(prevState => prevState + 10);
        }
        let time = new Date().toLocaleTimeString();
        debugger
        setRow({
            slotOne: firstNum,
            slotTwo: secondNum,
            slotThree: thirdNum,
            time: time
        })
        addNewResult();
    }


    return (
        <div>
            <Button variant="contained" textSizeLarge className={classes.button} onClick={handleOpen}>
                Play Game!
      </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Game</h2>
                        <p id="transition-modal-description" style={{ marginBottom: '4em' }}>Spin the wheel and try your luck</p>
                        <Grid container direction="row" style={{ textAlign: 'center' }} spacing={3}>
                            <Grid item xs={4}>
                                <InputLabel htmlFor="readOnly-input" >Slot 1</InputLabel>
                                <TextField
                                    id="slot-one"
                                    variant="outlined"
                                    className={classes.slot}
                                    value={slots.firstSlot}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <InputLabel htmlFor="readOnly-input">Slot 2</InputLabel>
                                <TextField
                                    id="slot-two"
                                    variant="outlined"
                                    className={classes.slot}
                                    value={slots.secondSlot}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <InputLabel htmlFor="readOnly-input">Slot 3</InputLabel>
                                <TextField
                                    id="slot-three"
                                    variant="outlined"
                                    className={classes.slot}
                                    value={slots.thirdSlot}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant='outlined' fullWidth color="primary" onClick={playSlots}>Play</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant='outlined' fullWidth color='inherit' onClick={debugSlots}>Debugger</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant='outlined' fullWidth color="secondary" onClick={handleClose}>Close</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
