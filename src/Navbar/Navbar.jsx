import React, { useEffect, useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Button,
    Grid,
    Link,
    Typography,
    makeStyles,
    Toolbar,
    AppBar,
    Badge
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useLocation } from "react-router-dom";
import { store } from "../Store/ProductStore";

const Links = [
    { name: "Shop", href: "/shop" },
    { name: "Our Story", href: "/our-story" },
    { name: "Blog", href: "/blog" }
];

const useStyles = makeStyles({
    headerBackgroundHome: {
        backgroundImage: 'url("/Background/home.jpg")',
        height: "100vh"
    },
    headerBackground: {
        backgroundImage: "#FFFFFF",
        height: "auto"
    },
    appBarHome: {
        boxShadow: "none",
        color: "#ffffff"
    },
    appBar: {
        boxShadow: "none",
        color: "#000"
    },
    logo: {
        flexGrow: 1,
        marginRight: "120px"
    },
    linkContainer: {
        width: "auto",
        marginTop: "2rem"
    },
    button: {
        marginTop: "2rem",
        "&:hover": {
            // psudo class
            backgroundColor: "transparent"
        }
    },
    shoppingCartIcon: {
        fill: "#000" //fill is for SVG only
    },
    shoppingCartIconHome: {
        fill: "#ffffff" //for SVG only
    },
    homeContainer: {
        height: "calc(100% - 64px)",
        alignContent: "center"
    },
    title: {
        color: "#fff",
        marginBottom: "3rem",
        fontSize: "5rem",
        fontWeight: 500,
        textAlign: "center"
    },
    shopNowContainer: {
        textAlign: "center"
    },
    shopNowButton: {
        borderRadius: 0,
        boxShadow: "none",
        padding: "1rem 2rem",
        opacity: 1,
        transition: "opacity .25s ease-in-out",
        "&:hover": {
            boxShadow: "none",
            opacity: "0.5",
            transition: "opacity .25s ease-in-out"
        }
    },
    heading: {
        marginTop: "2rem",
        textAlign: "center"
    }
});

export function Navbar() {
    const [isHome, setIsHome] = useState(false);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const classes = useStyles();
    const location = useLocation();
    const { state: products } = useContext(store);

    useEffect(() => {
        setIsHome(location.pathname === "/");
    }, [location]);

    useEffect(() => {
        let quantity = 0;
        products.forEach(product => {
            quantity = quantity + product.quantity;
        });
        setTotalCartItems(quantity);
    }, [products]);

    return (
        <div
            className={
                isHome ? classes.headerBackgroundHome : classes.headerBackground
            }
        >
            <AppBar
                position="static"
                color="transparent"
                className={isHome ? classes.appBarHome : classes.appBar}
            >
                <Toolbar>
                    <Grid
                        container
                        className={classes.linkContainer}
                        spacing={2}
                    >
                        {Links.map(({ name, href }, index) => {
                            return (
                                <Grid item key={index + name}>
                                    <Link
                                        to={href}
                                        color="inherit"
                                        component={RouterLink}
                                    >
                                        <Typography>{name}</Typography>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Link
                        underline="none"
                        color="inherit"
                        to="/"
                        component={RouterLink}
                        className={classes.logo}
                    >
                        <Typography className={classes.heading} variant="h4">
                            Save On
                        </Typography>
                    </Link>
                    <Grid>
                        <Link
                            underline="none"
                            to="/cart"
                            component={RouterLink}
                        >
                            <Badge
                                size="large"
                                className={classes.button}
                                badgeContent={totalCartItems}
                                color="secondary"
                                showZero
                            >
                                <ShoppingCartIcon
                                    className={
                                        isHome
                                            ? classes.shoppingCartIconHome
                                            : classes.shoppingCartIcon
                                    }
                                />
                            </Badge>
                        </Link>
                    </Grid>
                </Toolbar>
            </AppBar>
            {isHome ? (
                <Grid container className={classes.homeContainer}>
                    <Grid item xs={12}>
                        <Typography className={classes.title} variant="h1">
                            Always fresh
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.shopNowContainer}>
                        <Link
                            to="/shop"
                            underline="none"
                            component={RouterLink}
                        >
                            <Button
                                className={classes.shopNowButton}
                                variant="contained"
                            >
                                Shop Now
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            ) : null}
        </div>
    );
}
