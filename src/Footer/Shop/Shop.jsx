import React, { useState, useContext } from "react";
import { Grid, makeStyles, Link } from "@material-ui/core";
import { ShopProduct } from "../../ShopProduct/ShopProduct";
import { store } from "../../Store/ProductStore";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    products: {
        margin: "10rem"
    }
});

export function Shop() {
    const classes = useStyles();
    const { state: products}  = useContext(store);
    const [onMouseEnter, setOnMouseEnter] = useState({});

    const onMouseEnterHandler = (event, status, index) => {
        setOnMouseEnter({ ...onMouseEnter, [index]: status });
    };

    return (
        <div className={classes.products}>
            <Grid container spacing={8}>
                {products && products.map(
                    ({ alt, src, name, slug, price, hoverSrc }, index) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={index + name} >
                                <Link
                                    underline="none"
                                    to={`/shop/${slug}`} component={RouterLink}
                                    onMouseEnter={event =>
                                        onMouseEnterHandler(event, true, index)
                                    }
                                    onMouseLeave={event =>
                                        onMouseEnterHandler(event, false, index)
                                    }
                                >
                                    <ShopProduct
                                        alt={alt}
                                        src={
                                            onMouseEnter[index] ? hoverSrc : src
                                        }
                                        name={name}
                                        slug={slug}
                                        price={price}
                                    />
                                </Link>
                            </Grid>
                        );
                    }
                )}
            </Grid>
        </div>
    );
}
