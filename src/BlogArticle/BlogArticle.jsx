import React from 'react'
import { CardMedia, Link, Typography, makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
      title:{
            margin:"2rem"
      },
      caption:{
        fontWeight:"bold"
      }
})
export function BlogArticle({alt,src,slug}) {
    const classes=useStyles();
    return (
        <div>
            <Link underline="none" href={`/blog/${slug}`}>
            {/* template string*/}
            <CardMedia alt={alt} src={src} component="img" height="400px"/>
            <Typography className={classes.title} variant="h4">{alt}</Typography>
            <Typography className={classes.caption}variant="caption">Read More</Typography></Link>
        </div>
    );
}