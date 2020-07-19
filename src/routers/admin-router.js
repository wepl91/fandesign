import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AdminConfigurationsView from '../views/admin-configurations-list';
import AdminConfigurationEdit from '../views/admin-configurations-edit';
import AdminView from '../views/admin-view';
import AdminImagesView from '../views/admin-images-view';

class AdminRouter extends Component {
  render() {
    const path = this.props.match.path;
    const location = this.props.location;
    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.pathname}
          timeout={700}
          classNames="sectionTransition"
        >
          <section className="transition-wrapper">
            <Switch location={location}>
              <Route path={`${path}/admin/images`} component={AdminImagesView} />
              <Route path={`${path}/admin/configurations/new`} component={AdminConfigurationEdit} />
              <Route path={`${path}/admin/configurations/:id`} component={AdminConfigurationEdit} />
              <Route path={`${path}/admin/configurations`} component={AdminConfigurationsView} />
              <Route path={`${path}/admin`} component={AdminView} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(AdminRouter);
