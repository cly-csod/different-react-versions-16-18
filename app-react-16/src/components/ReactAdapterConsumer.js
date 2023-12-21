import React from 'react';

class ReactAdapterConsumer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Component: () => null };
    this.RemoteComponent = React.lazy(() =>
      this.props.importer().then(component => ({
        // Adapted needs to be used such that it utilizes render from remote app
        default: component.Adapted,
      })
    ));
  }

  render() {
    return (
      <React.Suspense fallback="loading">
        <this.RemoteComponent {...this.props} />
      </React.Suspense>
    );
  }
}

export default ReactAdapterConsumer;