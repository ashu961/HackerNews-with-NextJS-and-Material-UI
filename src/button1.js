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
const useStyles = makeStyles(theme => ({
    root: {
        color: theme.color,
    },
}));
function Button1() {
    const classes = useStyles();
    return (
        <p className={classes.root}>acmlmlascm</p>
    );
}

export default Button1
