import React from "react";
import { createRoot } from "react-dom/client";

class ReactAdapterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.refHold;
  }

  init = () => {
    (async () => {
      const { component, children, ...rest } = this.props;
        if (!this.root) {
          this.root = createRoot(this.refHold);
        }

        this.root.render(React.createElement(component, rest, children));
    })();
  };

  componentDidUpdate() {
    this.init();
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return <div ref={(ref) => (this.refHold = ref)} />;
  }
}

export default ReactAdapterProvider;
