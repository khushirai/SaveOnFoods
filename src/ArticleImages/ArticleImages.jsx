import React from "react";
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    header: {
        margin: "2rem",
        transition: ".50s"
    }
});

export function ArticleImages({ alt, src }) {
    const classes = useStyles();
    return (
        <div>
                <CardMedia src={src} alt={alt} component="img"></CardMedia>
        </div>
    );
}
