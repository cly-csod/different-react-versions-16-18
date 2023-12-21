import React from 'react';
import ReactAdapterProvider from './ReactAdapterProvider';

const ModernReactComponent = props => {
  const { input } = props;

  React.useEffect(() => console.log('effect'), []);

  return (
    <div>
      <strong>
        This Component uses hooks, if loaded on localhost:3001, it should work, even though that
        host does not support React Hooks
      </strong>
      <br />
      <h2>Text form legacy React app: {input}</h2>
    </div>
  );
};

export const Adapted = React.forwardRef((props, ref) => {
  return <ReactAdapterProvider {...props} component={ModernReactComponent} ref={ref} />;
});

export default ModernReactComponent;