import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessagesEs from "./locales/es";
import localeEsMessagesEn from "./locales/en";
import JobsList from "./components/jobslist";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var userLanguage = window.navigator.userLanguage || window.navigator.language;

ReactDOM.render(
  <IntlProvider
    locale={userLanguage}
    messages={
      userLanguage === "en-US" ? localeEsMessagesEn : localeEsMessagesEs
    }
  >
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
