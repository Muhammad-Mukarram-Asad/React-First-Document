import logo from "./logo.svg";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, it will help you alot in your future, In Sha Allah.
        </a>
      </header>
    </div>
  );
}

export default myThirdApp;

/*
For running the file, first of all do the following things:
1) Open terminal then move to the your respective app name.
   Like cd my-first-react-app.
2) Then write npm start there in the terminal.
*/
