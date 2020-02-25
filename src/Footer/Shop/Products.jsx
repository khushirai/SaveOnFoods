import React, { useEffect, useState, useContext } from "react";
import {
    makeStyles,
    Grid,
    Button,
    Link,
    CircularProgress,
    Typography,
    CardMedia
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { store } from "../../Store/ProductStore";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
    body: {
        width: "auto"
    },
    button: {
        boxShadow: "none",
        "&:hover": {
            boxShadow: "none",
            transition: ".25s ease-in-out"
        }
    },
    
    ProductImage: {
        height: "80%",
        width: "80%"
    },
    CartButton: {
        boxShadow: "none",
        "&:hover": {
            booxShadow: "none",
            transition: ".25s ease-in-out"
        }
    }
});

export function Products() {
    const classes = useStyles();
    const { state: products, dispatch } = useContext(store);

    let param = useParams();
    const [product, setProduct] = useState(null);
    const [nextProduct, setNextProduct] = useState(null);
    const [prevProduct, setPrevProduct] = useState(null);

    useEffect(() => {
        getProduct(param.id);
    }, [param.id]);

    const getProduct = id => {
        const index = products.findIndex(product => product.slug === id);
        setProduct(products[index]);
        setNextProduct(index + 1);
        setPrevProduct(index - 1);
    };

    const addToCart = () => {
        dispatch({ type: "addProductToCart", id: product.id });
    };

    return (
        <div>
            {product ? (
                <div>
                    <Grid container className={classes.Headings}>
                        <Grid item>
                            <Link
                                underline="none"
                                to="/shop"
                                component={RouterLink}
                            >
                                <Typography variant="h5">Shop |</Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                underline="none"
                                to={`${products[prevProduct + 1].slug}`}
                                component={RouterLink}
                            >
                                <Typography variant="h5">{`${
                                    products[prevProduct + 1].name
                                }`}</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.NavHeadings}>
                        <Grid item>
                            {prevProduct >= 0 ? (
                                <Link
                                    underline="none"
                                    to={`/shop/${products[prevProduct].slug}`}
                                    component={RouterLink}
                                >
                                    <Button
                                        size="large"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        Previous
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                        <Grid item>
                            {products.length > nextProduct ? (
                                <Link
                                    underline="none"
                                    to={`/shop/${products[nextProduct].slug}`}
                                    component={RouterLink}
                                >
                                    <Button
                                        size="large"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                    </Grid>
                    <Grid container> 
                        <Grid item md={7}>
                            <CardMedia
                                className={classes.ProductImage}
                                component="img"
                                src={`${products[prevProduct + 1].src}`}
                                alt={`${products[prevProduct + 1].alt}`}
                            ></CardMedia>
                        </Grid>
                        <Grid item md={5}>
                            <Typography
                                className={classes.heading}
                                variant="h5"
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                className={classes.body}
                                variant="subtitle1"
                            >
                                {product.price}
                            </Typography>
                            <Typography
                                className={classes.body}
                                variant="body1"
                            >
                                {product.description}
                            </Typography>
                            <Grid item>
                                <Button
                                    className={classes.CartButton}
                                    variant="contained"
                                    onClick={addToCart}
                                >
                                    Add to Cart
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}
