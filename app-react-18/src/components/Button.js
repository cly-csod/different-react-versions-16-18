import React from 'react';
import ReactAdapterProvider from './ReactAdapterProvider';

const Button = () => {
  const [glow, setGlow] = React.useState();

  return (
    <div style={{ backgroundColor: glow ? 'yellow' : 'white' }}>
      <p>
        React component from <strong>App2</strong> using non-legacy React to render
      </p>
      <button onClick={() => setGlow(!glow)}>{glow ? 'Unglow' : 'Glow'}</button>
    </div>
  );
};


const PlainButton = () => {
  return (
    <button>Sup</button>
  );
};

export const Adapted = React.forwardRef((props, ref) => {
  return <ReactAdapterProvider {...props} component={Button} ref={ref} />;
});

export default Button;