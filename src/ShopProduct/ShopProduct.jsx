import React from "react";
import { CardMedia, Typography, makeStyles } from "@material-ui/core";

const useStyles=makeStyles({
    header:{
        margin:"2rem"
    },
    price:{
        margin:"2rem"
    }
});

export function ShopProduct({ alt, src ,price}) {
    const classes=useStyles();
    return (
        <div>
            <CardMedia src={src} alt={alt} price={price}component="img" height="300px"></CardMedia>
            <Typography className={classes.header} variant="h4">{alt}</Typography>
            <Typography className={classes.price} variant="body1">$10</Typography>
        </div>
    );
}
