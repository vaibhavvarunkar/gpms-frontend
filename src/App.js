import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Header from "./components/Header"
import Login from "./components/Login"
import Navbar1 from "./components/Navbar1"
import { Provider } from "react-redux"
import store from "./redux/store"
import Profile from "./components/Profile"
import Twilio from "./components/Twilio"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar1 />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/twilio" component={Twilio} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
