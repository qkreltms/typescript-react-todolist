import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import ko from "react-intl/locale-data/ko";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { setLocale } from "./actions";
import { App, TodoListContainer } from "./components";
import About from "./components/About/About";
import locale from "./i18n";
import { IState } from "./reducers";

addLocaleData([...en, ...ko]);

interface IProps {
  lang: string;
  setLocale: (lang: string) => void;
}

export class Router extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <IntlProvider locale={this.props.lang} messages={locale[this.props.lang]}>
        <HashRouter>
          <div>
            <App setLocale={this.props.setLocale}/>
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

const mapStateToProps = (state: IState) => ({
    lang: state.locale.lang,
});

const mapDispatchToProps = (dispatch: any) => ({
  setLocale: (lang: string) => dispatch(setLocale(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
