import React from 'react';
import { Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

export const A11yRoute = ({ component, alertText, ...rest }) =>
  <Route
    {...rest}
    render={props => {
      return (
        <DocumentTitle title={alertText}>
          <div>
            <div
              className="sr-only"
              aria-live="assertive"
              aria-atomic="true"
              aria-relevant="additions">
              {alertText}
            </div>
            {React.createElement(component, props)}
          </div>
        </DocumentTitle>
      );
    }}
  />;

export default A11yRoute;
