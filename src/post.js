import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Card, CardHeader, Avatar, CardContent, CardActions, Button } from '@material-ui/core';
import Axios from "axios";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Post = ({ id }) => {
    const [postData, setPostData] = useState({})
    const getDetails = async () => {
        let res = await Axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        res.data.avatar=res.data.by[0].toUpperCase()
        setPostData(res.data)
    }
    useEffect(() => {
         getDetails();
    })
    const colors=['red','blue','green','yellow','orange','pink']
    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" style={{backgroundColor: colors[Math.random(0,5)]}}>
                        {postData.avatar}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={postData.title}
                    subheader={'By ' +postData.by}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    199 likes
                    <Button size="small" color="primary" style={{marginLeft: 'auto'}}>
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post;