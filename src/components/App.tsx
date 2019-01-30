import React, { Component } from "react";
import { NavBar } from "./Header";

interface IProps {
  setLocale: (lang: string) => void;
}
export class App extends Component<IProps, {}> {

  public render() {
    return (
      <section className="App">
          <header>
            <NavBar setLocale={this.props.setLocale} />
          </header>
      </section>
    );
  }
}

export default App;
