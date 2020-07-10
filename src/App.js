import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import 'antd/dist/antd.css'
import AppRouter from "./routers/app-router";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path={"/app"} component={AppRouter} />
        <Redirect to={"/app/home"} component={AppRouter} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
