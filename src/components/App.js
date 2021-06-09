import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate.js";
import StreamDelete from "./Streams/StreamDelete.js";
import StreamEdit from "./Streams/StreamEdit.js";
import StreamList from "./Streams/StreamList.js";
import StreamShow from "./Streams/StreamShow.js";
import Header from "./Header.js";
import history from "../history.js";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
