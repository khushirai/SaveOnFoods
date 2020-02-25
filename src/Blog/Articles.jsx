import React, { useEffect, useState } from "react";
import {
    makeStyles,
    Grid,
    Button,
    Link,
    CircularProgress,
    Typography
} from "@material-ui/core";
import { BlogArticles } from "./BlogArticles";
import { useParams } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {Link as RouterLink}  from "react-router-dom";

const useStyles = makeStyles({
    BlogImages: {
        margin: "10rem"
    },
    body:{
        margin:"2rem",
        textAlign:"left"
    },
    body1:{
        marginBottom:"10rem",
        marginLeft:"2rem",
        textAlign:"left"
    },
    date:{
        fontSize:"100%",
        textAlign:"center"
    },
    header:{
        textAlign:"center"
    },
    button:{
        fontSize:"50px",
        boxShadow:"none",  
        "&:hover": {
            boxShadow: "none",
            transition: ".25s ease-in-out",
            backgroundColor: "transparent",
        }
    }
});

export function Articles() {
    const classes = useStyles();

    let param = useParams();
    const [blogArticle, setblogArticle] = useState(null);
    const [nextArticle, setNextArticle] = useState(null);
    const [prevArticle, setPrevArticle] = useState(null);

    useEffect(() => {
        getArticle(param.id);
    }, [param.id]);

    const getArticle = id => {
        const index = BlogArticles.findIndex(
            blogArticle => blogArticle.slug === id
        );
        setblogArticle(BlogArticles[index]);
        setNextArticle(index + 1);
        setPrevArticle(index - 1);
    };

    return (
        <div className={classes.BlogImages}>
            {blogArticle ? (
                <div className={classes.header}>
                    <Typography className={classes.date} variant="overline">{blogArticle.date}</Typography>
                    <Typography  variant="h1">{blogArticle.name}</Typography>
                    <Typography className={classes.body} variant='body1'>{blogArticle.description}</Typography>
                    <Typography className={classes.body1} variant='body1'>{blogArticle.summary}</Typography>
                    <Grid container justify="space-between">
                        <Grid item>
                            {prevArticle >= 0 ? (
                                <Link underline="none"
                                    to={`/blog/${BlogArticles[prevArticle].slug}`} component={RouterLink}
                                >
                                    <Button className={classes.button}
                                        size="large"
                                        color="primary"
                                    >
                                        <ArrowBackIosIcon />
                                        {BlogArticles[prevArticle].name}
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                        <Grid item>
                            {BlogArticles.length > nextArticle ? (
                                <Link underline="none"
                                    to={`/blog/${BlogArticles[nextArticle].slug}`}  component={RouterLink}
                                >
                                    <Button className={classes.button}
                                        size="large"
                                        color="primary"
                                    >    
                                        {BlogArticles[nextArticle].name}
                                        <ArrowForwardIosIcon />
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}
