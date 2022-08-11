import { lazy, Suspense } from "react";
import "bootstrap";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Spinner from "./components/Spinner";
import Hidden from "@material-ui/core/Hidden";

import Navbar from "./components/Navbar";
import PreNav from "./components/preNav";

const Homescreen = lazy(() => import("./screens/Homescreen"));
const Cartscreen = lazy(() => import("./screens/Cartscreen"));
const Registerscreen = lazy(() => import("./screens/Registerscreen"));
const Loginscreen = lazy(() => import("./screens/Loginscreen"));
const Ordersscreen = lazy(() => import("./screens/Ordersscreen"));
const Adminscreen = lazy(() => import("./screens/Adminscreen"));
const Shippingscreen = lazy(() => import("./screens/Shippingscreen"));
const Success = lazy(() => import("./screens/Success"));
const Cancelled = lazy(() => import("./screens/Cancelled"));

function App() {
  return (
    <div className="App">
      <Hidden smUp>
        <PreNav />
      </Hidden>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Route path="/" exact component={Homescreen} />
          <Route path="/cart" exact component={Cartscreen} />
          <Route path="/register" exact component={Registerscreen} />
          <Route path="/login" exact component={Loginscreen} />
          <Route path="/orders" exact component={Ordersscreen} />
          <Route path="/shipping" exact component={Shippingscreen} />
          <Route path="/success" exact component={Success} />
          <Route path="/cancelled" exact component={Cancelled} />
          <Route path="/admin" component={Adminscreen} />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
