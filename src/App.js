import React from "react";
import "./App.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Home from "./components/Home";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Support from "./components/Support";
import { Link, Route } from "react-router-dom";

// ========================
//       렌더링 영역
// ========================
const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/team" component={Team}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/support" component={Support}></Route>
      <Footer />
    </div>
  );
};

export default App;
