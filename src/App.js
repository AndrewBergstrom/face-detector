import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/* { <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
