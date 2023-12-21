import React from 'react';
import { withRouter } from 'react-router';

export default Component => withRouter((props) => {
  return (
    <Component eventBus={{ navigate: props.router.push }}/>
  );
});