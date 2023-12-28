import React from 'react';
import { Button } from '@flare/primitives/button';
import { ThemeProvider } from '@flare/primitives/core-ui';
import ReactAdapterProvider from './ReactAdapterProvider';

const MyButton = () => (
  <ThemeProvider>
    <Button displayStyle="primary" onClick={() => alert('hi')}>Hi</Button>
  </ThemeProvider>
);

export const Adapted = React.forwardRef((props, ref) => {
  return <ReactAdapterProvider {...props} component={MyButton} ref={ref} />;
});

export default MyButton;
