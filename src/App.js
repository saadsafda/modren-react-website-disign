import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HomePage } from "./containers/HomePage";
import { checkUserSession } from "./redux/User/user.actions";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import "./App.css";
import WithAuth from "./hoc/withAuth";
import UserProfile from "./components/UserProfile";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./Pages/Dashboard";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <MainLayout>
                <HomePage />
              </MainLayout>
            )}
          />
          <Route
            path="/:action"
            exact
            render={() => (
              <MainLayout>
                <CustomerAccessPage />
              </MainLayout>
            )}
          />
          <Route
            path="/dashbord"
            exact
            render={() => (
              // <WithAuth>
              //     <UserProfile />
              // </WithAuth>
              // <MainLayout>
              <Dashboard />
              // </MainLayout>
            )}
          />
          <Route path="*" exact render={() => "404 page not found"} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
