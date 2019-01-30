import React from "react";
import { render } from "react-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import ko from "react-intl/locale-data/ko";
import { HashRouter, Route, Switch } from "react-router-dom";
import { About, App, TodoListContainer } from "./components";
import locale from "./i18n";

addLocaleData([...en, ...ko]);

interface IState {
  lang: string;
}
export class Router extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      lang: localStorage.getItem("lang") || "en",
    };
  }

  public setLocale = (lang: string) => {
    this.setState({ lang });
  }
  public render() {
    return (
      <IntlProvider locale={this.state.lang} messages={locale[this.state.lang]}>
        <HashRouter>
          <div>
            <App setLocale={this.setLocale}/>
            <Switch>
              <Route exact path="/" component={TodoListContainer} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </HashRouter>
      </IntlProvider>
    );
  }
}

export default Router;
