import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { RecoilRoot } from "recoil";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://countries-274616.ew.r.appspot.com/",
  }),
});

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
