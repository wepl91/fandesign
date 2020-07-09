import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import HomeRouter from "./home-router";
import YourPaintingRouter from './your-painting-router';
import HomeMenu from '../components/home-menu';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  render() {
    // In conditional will be logged user validation
    if (true) {
      return (
        <React.Fragment>
          <HomeMenu />
          <HomeRouter />
          <YourPaintingRouter />
        </React.Fragment>
      );
    } else {
      return (
        <Switch>
          <Redirect to={`/session/signin`} component={null} />
        </Switch>
      );
    }
  }
}

export default withRouter(AppRouter);
