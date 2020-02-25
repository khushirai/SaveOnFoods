import React from "react";
import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
    footnote: {
        fontSize: "20px",
        textAlign: "left",
        marginLeft:"60px",
        flexGrow:4
    },
    footerColor: {
        backgroundColor:"#6B5B95"
    },
    heading:{
        marginBottom:"1rem"
    },
    InstagramIcon:{
     flexGrow:1,
     marginRight:"5px"
    }
});

export function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.footerColor}>
            <Grid item className={classes.footnote}>
                <Typography className={classes.heading} variant="h4">Khushi Rai</Typography>
                <Typography variant="body1">123 ABC Street</Typography>
                <Typography variant="body1">Toronto, Ontario</Typography>
                <Typography variant="body1">778-241-9289</Typography>
            </Grid>
            <Grid item className={classes.InstagramIcon}>
                <Button size="large">
                    <InstagramIcon />
                </Button>
            </Grid>
        </Grid>
    );
}
