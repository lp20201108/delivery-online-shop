import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductsPage from "../../pages/ProductsPage";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import NotFoundPage from "../../pages/NotFoundPage";
import CommonLayout from "../../shared/layouts/CommonLayout";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import WishListPage from "../../pages/WishListPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

const App = () => {
  return (
    <CommonLayout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:productId" component={ProductDetailsPage} />
        <Route exact path="/wishlist" component={WishListPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </CommonLayout>
  );
};

export default App;
