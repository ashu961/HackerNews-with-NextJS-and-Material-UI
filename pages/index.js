import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Card, Grid, Paper } from '@material-ui/core';
import MemoryIcon from '@material-ui/icons/Memory';
import { NextSeo } from "next-seo"
import { JsonLd } from "react-schemaorg";
import { register, unregister } from 'next-offline/runtime'
import Axios from "axios"
import Post from "../src/post"
const Index = ({ ids }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MemoryIcon />
          </IconButton>
          <Typography variant="h5">
            HackerNews
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={5} style={{flexFlow: '1', marginTop:'10px'}}>
      {
        ids.map(id=>(
          <Grid item md={6}>
            <Post id={id}/>
          </Grid>
        ))
      }
      </Grid>
    </div>
  )
}

Index.getInitialProps = async function () {
  const res = await Axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
  return {
    ids: res.data.slice(0, 20)
    // ids: ['cann','caknkn']
  };
};
export default Index
//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty