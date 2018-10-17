import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Terms from "../../pages/Terms";
import AllProducts from "../../pages/AllProducts";
import Category from "../../pages/Category";
import SingleProduct from "../../pages/SingleProduct";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/all-products" component={AllProducts} />
            <Route exact path="/category/:category_type" component={Category} />
            <Route
              exact
              path="/product/:product_id"
              component={SingleProduct}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
