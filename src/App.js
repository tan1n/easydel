import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import PickupRequest from './Pages/PickupRequest';
import PickupHistory from './Pages/PickupHistory';
import ShopSettings from './Pages/ShopSettings';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/pickup-request">
          <PickupRequest />
        </Route>
        <Route path="/pickup-history">
          <PickupHistory />
        </Route>
        <Route path="/shop-settings">
          <ShopSettings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
