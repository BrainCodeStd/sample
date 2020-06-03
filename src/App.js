import React, { Component } from 'react';
import Header from "./header";
import './App.css';
import Section from "./contentSection"
import Footer from "./footer"
class App extends Component {
  render() {
    return (
      <div className="home page-template-default page page-id-68   home" data-template="base.twig">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
