import React from "react";
import "./styles.css";
import NewComp from "./NewComp";

const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <NewComp images={images} >
  <p>one</p>
  <p>two</p>
</NewComp>
    </div>
  );
}


