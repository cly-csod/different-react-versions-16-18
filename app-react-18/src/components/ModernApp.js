import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import ReactAdapterProvider from "./ReactAdapterProvider";

const Header = ({ eventBus }) => (
  <ul>
    <li>
      <Link to="/">Sub home</Link>
    </li>
    <li>
      <Link to="/sub-about">Sub about</Link>
    </li>
    <li>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          eventBus.navigate("/profile");
        }}
      >
        Go back to profile
      </a>
    </li>
    <Outlet />
  </ul>
);

const ModernApp = ({ eventBus }) => {
  return (
    <BrowserRouter basename="/about">
      <Routes>
        <Route path="/" element={<Header eventBus={eventBus} />}>
          <Route index element={<div>You are at sub home</div>} />
          <Route path="sub-about" element={<div>You are at sub about</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export const Adapted = React.forwardRef((props, ref) => {
  return <ReactAdapterProvider {...props} component={ModernApp} ref={ref} />;
});

export default ModernApp;
