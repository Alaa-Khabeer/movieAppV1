import Login from "./login";
import Nbar from "./nbar";
import SignUp from "./signup";
import Home from "./home";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./notfound";
import Details from "./moviedetails";
import Favorite from "./favorite";
function App() {
  return (
  <>
  <BrowserRouter>
  <Nbar/>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/home" component={Home}/>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/signup" component={SignUp}/>
  <Route exact path="/details/:id" component={Details}/>
  <Route exact path="/favorite" component={Favorite}/>
  <Route exact path="*" component={NotFound}/>
  </Switch>
</BrowserRouter>
  </>
  );
}

export default App;
