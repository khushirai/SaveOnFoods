import React from "react";
import {
    makeStyles,
    Grid
} from "@material-ui/core";
import { BlogArticle } from "../BlogArticle/BlogArticle";
import { BlogArticles } from "./BlogArticles";

const useStyles = makeStyles({
    BlogImages: {
        margin: "10rem"
    }
});
export function Blog() {
    const classes = useStyles();

    return (
        <div className={classes.BlogImages}>
                    <Grid container spacing={8}>
                        {BlogArticles.map(({ name, src, alt, slug }, index) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    md={8}
                                    lg={6}
                                    key={index + name}
                                >
                                    <BlogArticle
                                        name={name}
                                        src={src}
                                        alt={alt}
                                        slug={slug}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>             
        </div>
    );
}
