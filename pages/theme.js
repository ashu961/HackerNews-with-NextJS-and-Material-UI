import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Card, Grid, Paper } from '@material-ui/core';
import MemoryIcon from '@material-ui/icons/Memory';
import { register, unregister } from 'next-offline/runtime'
import Axios from "axios"
import Button from '@material-ui/core/Button';
import dynamic from "next/dynamic"
import { getThemeProps } from '@material-ui/styles';
import Button1 from "../src/button1"
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    multi: {
        color: 'red',
        '& p': {
            margin: 0,
            color: 'green',
            '& span': {
                color: 'blue',
            },
        },
        '& span': {
            color: 'yellow'
        }
    },
    propHelper: {
        color: props => props.color,
    }
})
const theme = {
    color: "red"
}
const Theme = () => {

    const props = {
        color: "pink"
    }

    const classes = useStyles(props);
    return (
        <ThemeProvider theme={theme}>
            <Button1 />
        </ThemeProvider>
    )
}
export default dynamic(() => Promise.resolve(Theme), {
    ssr: false
});