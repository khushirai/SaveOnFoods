import React from 'react'
import { Route, Switch } from "react-router-dom"
import { NotFound } from './NotFound/NotFound'
import { Shop } from './Footer/Shop/Shop'
import { OurStory } from './OurStory/OurStory'
import { Blog } from './Blog/Blog'
import { Home } from './Home/Home'
import { Articles } from './Blog/Articles'
import { Products } from './Footer/Shop/Products'
import { Cart } from './Cart/Cart'
import Checkout from './Checkout/Checkout'

export function Routing() {
    return (
        <Switch>
            <Route path="/blog/:id" component={Articles}/>
            <Route path="/shop/:id" component={Products}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/our-story" component={OurStory}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/" component={Home}/>
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
