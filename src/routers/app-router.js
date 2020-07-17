import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { Row, Col } from 'antd';

import HomeMenu from '../components/home-menu';
import AdminRouter from './admin-router';
import HomeRouter from "./home-router";
import YourPaintingRouter from './your-painting-router';
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
          <Row>
            <Col>
              <HomeMenu />
            </Col>
            <Col>
              <div className="layout">
                <HomeRouter />
                <AdminRouter />
                <YourPaintingRouter />
              </div>
            </Col>
          </Row>
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
