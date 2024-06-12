import logo from './logo.svg';
import './App.css';
import React from "react";
import UseMyWidget from "../src/component/UseMyWidget";



function My_content() {
  return (
    <div className="App">
      <header className="App-header">

        <p className='main_code_body'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function App() {

  return <UseMyWidget element={My_content()}  url={"http://localhost/app/widget_disabilitas_ctx.js"}  url_responsive_voice={"https://code.responsivevoice.org/responsivevoice.js?key=N0bzbTAK"} />;
}

export default (App);

