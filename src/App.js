import React, { createContext, useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./components/Login/Login";
import Shipment from "./components/Shipment/Shipment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
 
export const userContext=createContext();
function App() {
  const [login,setLogin]=useState({});
  return (
    <userContext.Provider value={[login,setLogin]}>
   
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <PrivateRoute path="/shipment">
              <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
      
    </userContext.Provider>
  );
}

export default App;
