import React from 'react';
import { Route, Link } from "react-router-dom";

const CustomLink = (props) => {


  return (
    <Route
      path={props.path}
      exact={props.exact}
      children={
        ({ match }) =>
          match ?
            <Link className="tab-item active" to={props.path}>
              <div className="tab-item-inner d-flex flex-column">
                {props.icon}
                {props.label}
              </div>
            </Link>
            :
            <Link className="tab-item" to={props.path}>
              <div className="tab-item-inner d-flex flex-column">
                {props.icon}
                {props.label}
              </div>
            </Link>
      }
    />

  );
}

export default CustomLink;