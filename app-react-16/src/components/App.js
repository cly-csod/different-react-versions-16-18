import React from "react";
import ReactAdapterConsumer from "./ReactAdapterConsumer";

const Button = React.lazy(() => import("app2/Button"));
const ModernComponent = React.lazy(() => import("app2/ModernComponent"));

import HookComponent from "./ComponentWithHook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Basic Host-Remote</h1>
        <h2>App 1, Uses react version not compatible with hooks</h2>
        <input
          onChange={this.setValue}
          placeholder="Type something into this input"
        />
        <br />

        {/*This will Fail*/}
        {/* <HookComponent/> */}

        <div style={{ border: "1px red solid", padding: "10px", margin: "20px 0" }}>
          {/* <React.Suspense fallback="loading...">
            <Button />
          </React.Suspense> */}
          <ReactAdapterConsumer importer={() => import("app2/Button")} />
        </div>

        <div style={{ border: '1px red solid', padding: '10px', margin: '20px 0' }}>
          <ReactAdapterConsumer
            {...this.state}
            importer={() => import('app2/ModernComponent')}
          />
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default App;
