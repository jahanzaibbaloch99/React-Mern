import { Switch, Route } from "react-router-dom";
import React from "react"
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Products";
import Login from "./Components/Login/Login"



export default
    (<Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/login" component={Login} />
    </Switch>
    );