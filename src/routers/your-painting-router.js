import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import YourPaintingView from "../views/your-painting-view";

class YourPaintingRouter extends Component {
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
              <Route path={`${path}/your-painting`} component={YourPaintingView} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(YourPaintingRouter);
