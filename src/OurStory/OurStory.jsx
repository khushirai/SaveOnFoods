import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    OurStoryheader: {
        marginLeft: "6rem",
        marginBottom: "2rem",
        marginTop: "3rem",
        textAlign: "left"
    },
    OurStorybody: {
        marginLeft: "10rem",
        marginRight: "10rem",
        marginBottom: "6rem",
        textAlign: "left",
        fontSize: "26px",
        fontWeight:"300"
    },
    OurStoryheading: {
        marginLeft: "10rem",
        marginRight: "10rem",
        marginBottom: "2rem",
        textAlign: "left",
        fontSize: "32px"
    },
    image: {
        maxWidth: "100%",
        marginBottom: "6rem"
    }
});
export function OurStory() {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.OurStoryheader} variant="h3">
                Our Story
            </Typography>
            <div>
                <Typography variant="body1" className={classes.OurStorybody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut ornare lectus sit amet est placerat in egestas.
                    Tincidunt vitae semper quis lectus nulla at volutpat diam
                    ut. A erat nam at lectus urna duis convallis. Faucibus vitae
                    aliquet nec ullamcorper sit amet risus nullam.
                </Typography>
            </div>
            <img
                src="/OurStory/supermarket-4052658_1920.jpg"
                alt="OurStory"
                className={classes.image}
            ></img>
            <div>
                <Typography variant="h6" className={classes.OurStoryheading}>
                    Est velit egestas dui id ornare. Lorem mollis aliquam ut
                    porttitor leo a diam. Suspendisse potenti nullam ac tortor
                    vitae purus faucibus. Quam elementum pulvinar etiam non quam
                    lacus suspendisse faucibus interdum. Cras adipiscing enim eu
                    turpis egestas pretium aenean pharetra. Proin sed libero
                    enim sed faucibus turpis in eu.
                </Typography>
                <Typography variant="body1" className={classes.OurStorybody}>
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed
                    risus. Nulla facilisi cras fermentum odio eu feugiat pretium
                    nibh. Facilisi etiam dignissim diam quis enim lobortis.
                    Egestas purus viverra accumsan in. Dictum at tempor commodo
                    ullamcorper a lacus vestibulum sed. Tempor commodo
                    ullamcorper a lacus vestibulum sed arcu. Quis lectus nulla
                    at volutpat diam ut venenatis.
                </Typography>
            </div>
        </div>
    );
}
