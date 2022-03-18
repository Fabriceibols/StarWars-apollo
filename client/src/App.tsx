import "./App.css";
import People from "./components/People";
import Person from "./components/Person";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={People} />
          <Route exact path="/person/:name" component={Person} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
