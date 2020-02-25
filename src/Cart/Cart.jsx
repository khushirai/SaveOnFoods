import React, { useContext, useState } from "react";
import {
    Typography,
    Button,
    makeStyles,
    Grid,
    CardMedia,
    IconButton,
    TextField
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { store } from "../Store/ProductStore";

const useStyles = makeStyles({
    heading: {
        margin: "5rem",
        textAlign: "center"
    },
    image: {
        width: "100px"
    },
    SubTotal: {
        textAlign: "right",
        marginRight: "10rem"
    }
});

export function Cart() {
    const [data, setdata] = useState(null);

    const classes = useStyles();
    const { state: products, dispatch } = useContext(store);

    const removeItem = id => {};

    return (
        <div>
            <Typography className={classes.heading} variant="h3">
                Shopping Cart
            </Typography>
            <Grid container>
                <Grid item md={9}>
                    <Typography variant="h4">Quantity</Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography variant="h4">Item</Typography>
                </Grid>
                <Grid item md={1}>
                    <Typography variant="h4">Price</Typography>
                </Grid>
                {products &&
                    products.length &&
                    products
                        .filter(product => product.quantity > 0)
                        .map(
                            (
                                { quantity, src, alt, price, name, id },
                                index
                            ) => {
                                return (
                                    <Grid container key={index + quantity}>
                                        <Grid item xs={12}>
                                            <Grid container alignItems="center">
                                                <Grid
                                                    item
                                                    md={9}
                                                    className={
                                                        classes.productInfo
                                                    }
                                                >
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                    >
                                                        <IconButton
                                                            type="button"
                                                            onClick={() =>
                                                                dispatch({
                                                                    type:
                                                                        "removeProductFromCart",
                                                                    id: id
                                                                })
                                                            }
                                                            aria-label="clear"
                                                        >
                                                            <ClearIcon />
                                                        </IconButton>

                                                        <CardMedia
                                                            component="img"
                                                            src={src}
                                                            alt={alt}
                                                            className={
                                                                classes.image
                                                            }
                                                        />
                                                        <Typography>
                                                            {name}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={2}>
                                                    <TextField
                                                        id="quantity"
                                                        value={quantity}
                                                        variant="outlined"
                                                        type="number"
                                                        inputProps={{ min: 1, max: 50 }}
                                                        onChange={(event) =>
                                                            dispatch({
                                                                type:
                                                                    "setProductToCart",
                                                                    quantity: parseInt(event.target.value),
                                                                    id: id
                                                            })
                                                        }
                                                        
                                                    />
                                                </Grid>
                                                <Grid item md={1}>
                                                    <Typography>
                                                        {quantity * price}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Typography
                                            className={classes.SubTotal}
                                            variant="h6"
                                        >
                                            SubTotal
                                        </Typography>
                                        <Typography
                                            className={classes.SubTotal}
                                            variant="h6"
                                        >
                                            {quantity * price}
                                        </Typography>
                                    </Grid>
                                );
                            }
                        )}
            </Grid>

            <Link underline="none" to="/checkout" component={RouterLink}>
                <Button variant="contained" size="large">
                    Checkout
                </Button>
            </Link>
        </div>
    );
}
