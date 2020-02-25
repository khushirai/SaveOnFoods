import React from "react";
import { Button, makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    headings: {
        marginTop: "5rem",
        marginBottom:"3rem"
    },
    buttons:{
            flexDirection:"column",
    }
});
export default function Checkout() {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.headings} variant="h4">
                Checkout
            </Typography>
            <Grid container className={classes.buttons}>
                <Button variant="contained">1.Your Email</Button>
                <Button variant="contained">2.Shipping</Button>
                <Button variant="contained">3.Payment</Button>
                <Button variant="contained">4.Review and Purchase</Button>
            </Grid>
        </div>
    );
}
